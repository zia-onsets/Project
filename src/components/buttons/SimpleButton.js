import React from "react";
import { View, Text, TouchableOpacity, TouchableNativeFeedback, StyleSheet, Platform, Dimensions } from "react-native";
const SimpleButton = props => {
    let Touch = TouchableOpacity
    if (Platform.OS === 'android') {
        Touch = TouchableNativeFeedback
    }
    return (


        <TouchableOpacity onPress={props.onSelect} style={{ ...styles.container, ...{ borderColor: props.borderColor } }}>

            <Text style={styles.txt}>{props.title}</Text>

        </TouchableOpacity>

    )
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFF',
        borderWidth: .5,
        borderRadius: 3,
        height: Dimensions.get('window').height * .1,
        width: Dimensions.get('window').width * .47,
        justifyContent: "center", alignItems: 'center',

    },
    txt: {
        backgroundColor: '#FFFF',
        fontFamily: 'IBMPlexSans-Bold',
        fontSize: 16,
        fontWeight: '700'
    }
})
export default SimpleButton;