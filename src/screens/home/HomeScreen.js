import React, {Component} from 'react';
import {Image, View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Style';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // <View style={styles.mainContainer}>
      <LinearGradient
        colors={['#ffffff', '#FF4F29']}
        start={{x: 0.3, y: 0.7}}
        end={{x: 0.4, y: 1}}
        style={styles.mainContainer}>
        <View style={styles.logoText}>
          <Image
            source={require('./../../res/images/VOILA.png')}
            style={{height: 50, width: 280}}
          />
        </View>
        <View style={styles.logoImage}>
          <Image
            source={require('./../../res/images/CBotHi_01.png')}
            style={{height: 300, width: 280}}
          />
        </View>
        <View style={styles.buttonView}>
          <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.linearGradient}>
            <Text style={styles.buttonText}>Sign in with Facebook</Text>
          </LinearGradient>
          {/* <GradientButton
            radius={10}
            style={styles.buttonSignUp}
            textStyle={styles.titleBtn}
            text="Sign Up"
            loadingProps={{size: 20}}
            gradientBegin="#FF4F29"
            gradientEnd="#F19058"
            onPressAction={() => this.props.navigation.navigate('SignUp')}
          /> */}
          <Button
            buttonStyle={styles.buttonLogin}
            titleStyle={styles.titleBtnLogin}
            title="Sign In"
            loadingProps={{size: 20}}
            onPress={() => this.props.navigation.navigate('Login')}
          />
          <Button
            buttonStyle={styles.buttonAsGeust}
            titleStyle={styles.titleBtn}
            title="Continue as Guest"
            loadingProps={{size: 20}}
            onPress={() => this.props.navigation.navigate('VerifyEmail')}
          />
        </View>
      </LinearGradient>
      // </View>
    );
  }
}
