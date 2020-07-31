
import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import MainHeader from '../components/headers/MainHeader';
const Termconditions = props => {
    return (
        <View style={styles.screen}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="black" />
            <MainHeader title='Terms & Conditions'></MainHeader>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={{ fontSize: 24, fontWeight: '500', fontFamily: "IBMPlexSans-Medium" }}>Terms & Conditions</Text>
                </View>



                <View style={styles.textcontainer}>
                    <Text style={{ fontSize: 14, fontWeight: "400", fontWeight: "normal", fontFamily: 'Segoe UI', textAlign: "left" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Text>
                </View>

            </View>

        </View>
    )
};
const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: "100%",

        alignItems: "center"
    }, title: {
        height: "30%",

        justifyContent: "center"
    },
    textcontainer: {

        justifyContent: "center",
        height: '70%',
    },
    container: {
        width: '88%',
        height: "40%",

        justifyContent: "center"
    }
});
export default Termconditions;