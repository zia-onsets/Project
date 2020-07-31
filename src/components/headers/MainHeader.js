import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Dimensions, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { THEME_COLORS } from '../../res/css/base';
import { withNavigation } from 'react-navigation';
const MainHeader = props => {
  return (
    <View
      style={{ ...styles.container, ...{ backgroundColor: props.bgwhite ? 'white' : THEME_COLORS.headerColor } }}>
      <View style={styles.backarrow}>
        <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
          <Icon name="arrow-back" color={props.bgwhite ? "black" : '#FFFF'} />
        </TouchableOpacity>
      </View>

      <View style={{ width: '60%' }}>
        <Text style={styles.txt}>{props.title}  </Text>
      </View>
      {props.rTitle ? (<View style={styles.headerrighttext}>

        <Text style={styles.headerrighticon}>{props.ricontitle}</Text>

      </View>) : (<View style={{ width: "20%" }}></View>)}
    </View>
  );

}
const styles = StyleSheet.create({
  headerrighticon: {
    color: 'white',
    fontFamily: "IBMPlexSans-Medium",
    fontSize: 12,
    fontWeight: '500'
  },
  headerrighttext: {
    width: '20%',
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  txt: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: "IBMPlexSans-Bold",
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: Dimensions.get("window").height * .095,

    width: "100%",
    justifyContent: "space-evenly"
  },
  backarrow: {
    width: '15%',
    alignItems: "center"
  }
})
export default withNavigation(MainHeader);