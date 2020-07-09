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
import {Button} from 'react-native-elements';
import {form, struct} from 'tcomb-form-native';
import {validate} from 'tcomb-validation';
import MainHeader from '../../components/headers/MainHeader';
import Loader from '../../components/loader/Loader';
import {Email} from '../../constants/auth';
import {validationForm} from '../../res/css/validationForm';
import styles from './Style';

const Form = form.Form;
const UserForm = struct({
  email: Email,
});

export default class ForgetPasswordScreen extends Component {
  options = {
    fields: {
      email: {
        error: '* Invalid email',
        keyboardType: 'email-address',
        placeholderTextColor: '#000000',
        placeholder: 'Email',
        returnKeyType: 'next',
        onEndEditing: () => {
          this.onEndEditingComponent(['email']);
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

    if (value == null) {
    } else {
      this.setState({
        isLoading: true,
      });
      auth()
        .sendPasswordResetEmail(value.email)
        .then(res => {
          this.setState({
            isLoading: false,
          });
          Alert.alert(
            'Done',
            'Hurry, Check your mail! Link expires in 24 hours',
            [{text: 'OK', onPress: () => this.props.navigation.goBack()}],
            {cancelable: false},
          );
        })
        .catch(error => {
          this.authenticationFail(error.message);
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

  render() {
    return (
      <View style={{backgroundColor: '#ffffff', flex: 1}}>
        <MainHeader title="Forget Password" />
        <Loader loading={this.state.isLoading} />
        <View style={styles.mainContainer}>
          <ScrollView>
            <View>
              <Text style={styles.topText}>Forgot Password</Text>
            </View>
            <View style={{padding: 10}}>
              <Text style={styles.textParagraph}>
                Please enter your e-mail for a{'\n'}
                password reset link to be sent to you
              </Text>
            </View>

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
                radius={10}
                style={styles.buttonLogin}
                textStyle={styles.titleBtn}
                text="Request Password"
                loadingProps={{size: 20}}
                onPressAction={() => {
                  this.authenticate();
                }}
                gradientBegin="#FF4F29"
                gradientEnd="#F19058"
              /> */}
            </View>
            <View style={{padding: 10, margin: 10}}>
              <TouchableOpacity
                onPress={() => {
                  this.resendEmail();
                }}>
                <Text style={styles.emailText}>
                  click here if you haven’t received an email.
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
