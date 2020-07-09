import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    setTimeout(function () {
      props.navigation.navigate('Home');
    }, 3000);
  }
  timeOut() { }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./../../res/images/CBotHi_01.png')} />

        <View>
          <Text style={styles.text}>AutoMate</Text>
        </View>
        <Image
          source={require('./../../res/images/Rectangle.png')}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF4F29',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },

  image: {
    flex: 1,
    width: '100%',
  },

  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'normal',
    fontFamily: 'IBMPlexSans-Medium',
  },

  bot: {
    height: 150,
    width: 100,
  },
});
