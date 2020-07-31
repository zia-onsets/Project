import React from "react";
import { View, Text, TouchableOpacity, TouchableNativeFeedback, StyleSheet, Platform } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
const CButton = props => {
    let Touch = TouchableOpacity
    if (Platform.OS === 'android') {
        Touch = TouchableNativeFeedback
    }
    return (
        <LinearGradient
            colors={['rgba(255,79,41,.8)', 'rgba(241,128,77,.4)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ ...styles.mainContainer, ...{ borderRadius: props.borderRadius } }}>
            <TouchableOpacity onPress={props.onSelect} style={styles.container}>
                <View>
                    <Text style={{ color: props.color, fontSize: props.fontSize, fontFamily: props.fontFamily, fontWeight: props.fontWeight }}>{props.title}</Text>
                </View>
            </TouchableOpacity>
        </LinearGradient>
    )
};
const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "center",
    },
    container: {

        //borderRadius: 5,
        height: "100%",
        width: "100%",
        justifyContent: "center", alignItems: 'center',
    }
})
export default CButton;