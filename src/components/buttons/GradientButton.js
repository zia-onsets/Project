import React from 'react';
import {StyleSheet,Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientButton = () => {
  return (
    <LinearGradient
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      locations={[0, 0.5, 0.6]}
      colors={['#FF4F29','#FF4F29' ,'#192f6a']}
      style={styles.linearGradient}>
      <Text style={styles.buttonText}>Sign in with Facebook</Text>
    </LinearGradient>
  );
};
// Later on in your styles..
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    // backgroundColor: 'transparent',
  },
});
export default GradientButton;