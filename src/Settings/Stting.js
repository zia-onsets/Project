import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import MainHeader from '../components/headers/MainHeader';
import Questioncontainer from './Compotent/Questioncontainer';
const Stting = props => {
    return (
        <View style={styles.screen}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="black"></StatusBar>
            <MainHeader title='Settings'></MainHeader>
            <View style={{ height: "2%" }}></View>
            <View style={styles.container}>
                <Questioncontainer title='About Us' fontFamily='Roboto-Regular' fontSize={15} fontWeight='400' imgpath={require('../res/images/arrowright.png')} onSelect={() => { props.navigation.navigate('Aboutus') }}></Questioncontainer>
                <Questioncontainer title='Terms and Conditions' fontFamily='Roboto-Regular' fontSize={15} fontWeight='400' imgpath={require('../res/images/arrowright.png')} onSelect={() => { props.navigation.navigate('Terms') }}></Questioncontainer>
                <Questioncontainer title='Help' fontFamily='Roboto-Regular' fontSize={15} fontWeight='400' imgpath={require('../res/images/arrowright.png')} onSelect={() => { props.navigation.navigate('Help') }}></Questioncontainer>
            </View>

        </View>
    )
};
const styles = StyleSheet.create({
    screen: {
        height: "100%",
        width: "100%",
        alignItems: "center"
    },
    container: {
        justifyContent: "flex-start",
        width: "87%",
        height: "70%",

    },
});
export default Stting