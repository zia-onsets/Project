import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './Style';

export default class VerifyEmailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  resendEmail = () => {};
  render() {
    return (
      <View style={styles.mainContainer}>
        <View>
          <Text style={styles.topText}>Hey, you’ve got mail!</Text>
        </View>
        <View style={{padding: 10}}>
          <Text style={styles.bottomText}>
            Safety is a priority for us, please verify your email by{'\n'}
            clicking on the verification link!
          </Text>
        </View>
        <View style={{padding: 10}}>
          <Text style={styles.emailText}>Send to ahmad@gmail.com</Text>
        </View>
        <View style={styles.buttonView}>
          {/* <GradientButton
            style={styles.buttonSignUp}
            textStyle={styles.titleBtn}
            text="OK"
            loadingProps={{size: 20}}
            onPressAction={() => this.props.navigation.navigate('Login')}
            gradientBegin="#FF4F29"
            gradientEnd="#F19058"
          /> */}
        </View>
        <View style={{padding: 10, margin: 10}}>
          <TouchableOpacity
            onPress={() => {
              this.resendEmail();
            }}>
            <Text style={styles.resendEmailText}>
              click here if you haven’t received an email.
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logoImage}>
          <Image
            source={require('./../../res/images/sell-car.png')}
            style={{
              height: 250,
              left: 0,
              right: 0,
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>
    );
  }
}
