import {GoogleSignin} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import React, {Component} from 'react';
import {
  Alert,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, SocialIcon} from 'react-native-elements';
import {form, struct} from 'tcomb-form-native';
import {validate} from 'tcomb-validation';
import DividerLine from '../../components/divider/DividerLine';
import MainHeader from '../../components/headers/MainHeader';
import Loader from '../../components/loader/Loader';
import {Email, Password} from '../../constants/auth';
import {validationForm} from '../../res/css/validationForm';
import styles from './Style';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import database from '@react-native-firebase/database';
import LinearGradient from 'react-native-linear-gradient';

const Form = form.Form;
const UserForm = struct({
  email: Email,
  password: Password,
});

export default class LoginScreen extends Component {
  options = {
    fields: {
      email: {
        error: '* Email Required orInvalid email',
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
      emailError: '',
      passwordError: '',
    };
    GoogleSignin.configure({
      webClientId:
        // "1085362861207-lh9dumtgnl1u6qspl4rkcdaq81b2adgo.apps.googleusercontent.com",
        '1085362861207-erabf7faarsk2v1kqq4atoruetu2i3el.apps.googleusercontent.com',
      //androidClientId:
      //'1085362861207-hjg4k5aqi6gthn2h0k4ue653c4stpu8p.apps.googleusercontent.com',
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

  authenticate() {
    const refs = this.refs.form;
    const value = refs.getValue();
    console.log(value);
    if (value == null) {
    } else {
      this.setState({
        isLoading: true,
      });
      auth()
        .signInWithEmailAndPassword(value.email, value.password)
        .then(res => {
          console.log('User account created & subscriber!', res);
          this.setState({
            isLoading: false,
            email: '',
            password: '',
          });
          this.props.navigation.navigate('ChoiceSearch');
        })
        .catch(error => {
          console.log('User account created & subscriber!', error);
          this.authenticationFail(error.message);
          if (error.code === 'auth/user-not-found') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
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
    var comp = this;
    // Get the users ID token
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
          });
        comp.setState({
          isLoading: false,
          email: '',
          password: '',
        });
        comp.props.navigation.navigate('ChoiceSearch');
      })
      .catch(function(error) {
        ToastAndroid.show(error.message, ToastAndroid.LONG);
      });
  }
  _forgotPassword() {
    this.props.navigation.navigate('ForgetPassword');
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
          });
        comp.setState({
          isLoading: false,
          email: '',
          password: '',
        });
        comp.props.navigation.navigate('ChoiceSearch');
      })
      .catch(function(error) {
        ToastAndroid.show(error.message, ToastAndroid.LONG);
      });
  }

  render() {
    // if (this.state.isLoading) {
    //   return (
    //     <View style={styles.preloader}>
    //       <ActivityIndicator size="large" color="#9E9E9E" />
    //     </View>
    //   );
    // }
    return (
      <View style={styles.mainContainer}>
        <MainHeader title="Sign In" />
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
              <View style={styles.forgotText}>
                <TouchableOpacity
                  onPress={() => {
                    this._forgotPassword();
                  }}>
                  <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.buttonView}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.linearGradient}>
                <Text style={styles.buttonText}>Sign in with Facebook</Text>
              </LinearGradient>
              {/* <GradientButton
                style={styles.buttonLogin}
                textStyle={styles.titleBtn}
                text="Sign In"
                radius={10}
                loadingProps={{size: 20}}
                disabled={this.state.isLoading}
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
                style={styles.socialBtn}
                title="Google"
                onPress={() => this.onGoogleButtonPress()}
                button
                type="google"
              />
              <SocialIcon
                style={styles.socialBtn}
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
