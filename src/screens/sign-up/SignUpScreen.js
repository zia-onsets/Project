import {GoogleSignin} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {Alert, Button, SocialIcon, ToastAndroid} from 'react-native-elements';
import {form, struct} from 'tcomb-form-native';
import {validate} from 'tcomb-validation';
import Loader from '../../components/loader/Loader';
import {Alphabet, Email, Password} from '../../constants/auth';
import DividerLine from './../../components/divider/DividerLine';
import MainHeader from './../../components/headers/MainHeader';
import {validationForm} from './../../res/css/validationForm';
import styles from './Style';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import database from '@react-native-firebase/database';

const Form = form.Form;
const UserForm = struct({
  name: Alphabet,
  email: Email,
  password: Password,
});

export default class SignUpScreen extends Component {
  options = {
    fields: {
      name: {
        error: '* Only alphabet allow',
        placeholderTextColor: '#000000',
        placeholder: 'Full Name',
        returnKeyType: 'next',
        keyboardType: 'default',
        onEndEditing: () => {
          this.onEndEditingComponent(['name']);
        },
      },
      email: {
        error: '* Required / Invalid email',
        keyboardType: 'email-address',
        placeholderTextColor: '#000000',
        placeholder: 'Email',
        returnKeyType: 'next',
        onEndEditing: () => {
          this.onEndEditingComponent(['email']);
        },
      },
      password: {
        password: true,
        placeholder: 'Password',
        placeholderTextColor: '#000000',
        error: '* Required password/Minimum 6 Characters ',
        keyboardType: 'default',
        secureTextEntry: true,
        onEndEditing: () => {
          this.onEndEditingComponent(['password']);
        },
      },
    },
    stylesheet: validationForm,
  };
  constructor(props) {
    super(props);
    this.state = {
      value: {},
      disableBtn: true,
      isLoading: false,
    };
    GoogleSignin.configure({
      webClientId:
        '1085362861207-erabf7faarsk2v1kqq4atoruetu2i3el.apps.googleusercontent.com',
    });
  }

  onEndEditingComponent = fieldName => {
    const refs = this.refs.form;
    refs.getComponent(fieldName).validate();
  };

  onChange(value) {
    const valid = validate(value, UserForm).isValid();
    this.setState({disableBtn: !valid, value});
  }

  onAuthStateChanged(user) {
    console.log('on Auth call');
    setUser(user);
    if (initializing) setInitializing(false);
  }

  authenticate() {
    var comp = this;
    const refs = this.refs.form;
    const value = refs.getValue();
    console.log(value);
    if (value == null) {
    } else {
      this.setState({
        isLoading: true,
      });
      auth()
        .createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          console.log('User account created & subscriber!', res);
          this.setState({
            isLoading: false,
          });
          if (!res.user.emailVerified) {
            res.user.sendEmailVerification();
            database()
              .ref('/users/' + res.user.uid)
              .set({
                full_name: res.user.displayName,
                email: res.user.displayName,
              })
              .then(function(response) {
                comp.props.navigation.navigate('VerifyEmail');
              });
          }
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            this.authenticationFail('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            this.authenticationFail('That email address is invalid!');
          }
          this.setState({
            isLoading: false,
          });
        });
    }
  }

  authenticationFail(msg) {
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.LONG);
    } else {
      Alert.alert(msg);
    }
  }

  async onGoogleButtonPress() {
    // Get the users ID token
    var comp = this;
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    auth()
      .signInWithCredential(googleCredential)
      .then(function(response) {
        database()
          .ref('/users/' + response.user.uid)
          .set({
            full_name: response.user.email,
            email: response.user.displayName,
          })
          .then(function(response) {
            comp.goToNext();
          });
      })
      .catch(function(error) {
        ToastAndroid.show(error.message, ToastAndroid.LONG);
      });
  }

  async onFacebookButtonPress() {
    var comp = this;
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    auth()
      .signInWithCredential(facebookCredential)
      .then(function(response) {
        database()
          .ref('/users/' + response.user.uid)
          .set({
            full_name: response.user.email,
            email: response.user.displayName,
          })
          .then(function() {
            comp.goToNext();
          });
      })
      .catch(error => {
        ToastAndroid.show(error.message, ToastAndroid.LONG);
      });
  }

  goToNext() {
    this.setState({
      isLoading: false,
    });
    this.props.navigation.navigate('ChoiceSearch');
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <MainHeader title="Sign Up" />
        <ScrollView>
          <View style={styles.formContainer}>
            <Loader loading={this.state.isLoading} />
            <View style={styles.inputContainer}>
              <Form
                ref="form"
                type={UserForm}
                options={this.options}
                onChange={this.onChange.bind(this)}
                value={this.state.value}
              />
            </View>
            <View style={styles.buttonView}>
              {/* <GradientButton
                style={styles.buttonLogin}
                textStyle={styles.titleBtn}
                disabled={this.state.isLoading}
                text="Sign Up"
                radius={10}
                loadingProps={{size: 20}}
                onPressAction={() => {
                  this.authenticate();
                }}
                gradientBegin="#FF4F29"
                gradientEnd="#F19058"
              /> */}
            </View>
            <View style={{margin: 20}}>
              <DividerLine dividerText="Or use your social id" />
            </View>
            <View style={styles.socialBtnView}>
              <SocialIcon
                style={{
                  borderRadius: 10,
                  margin: 5,
                  padding: 30,
                  fontWeight: 'bold',
                }}
                title="Google"
                button
                type="google"
                onPress={() =>
                  this.onGoogleButtonPress()
                    .then(function(response) {})
                    .catch(error => {
                      console.log(error);
                      //ToastAndroid.show(error.message, ToastAndroid.LONG);
                    })
                }
              />
              <SocialIcon
                style={{borderRadius: 10, margin: 5, padding: 30}}
                title="Facebook"
                button
                type="facebook"
                onPress={() => this.onFacebookButtonPress()}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
