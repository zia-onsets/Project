import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Dimensions, Platform } from 'react-native';
import SimpleButton from '../../../components/buttons/SimpleButton';

const SimpleInput = props => {
    const [value, setvalue] = useState('');
    const inputhandler = data => {

        setvalue(data)
        props.DataValue(data)
    }
    return (
        <View style={styles.card}>
            <TextInput keyboardType='number-pad' placeholder={props.placeHolder} placeholderTextColor='black' style={props.left ? styles.inputB : styles.input} value={value} onChangeText={inputhandler}></TextInput>
        </View>
    )
};
const styles = StyleSheet.create({
    inputB: {
        textAlign: "left",
        width: "95%",
        fontFamily: "IBMPlexSans-Bold",
        fontSize: 20,
        fontWeight: "bold",

    },
    input: {
        textAlign: 'center',
        width: "100%",
        fontFamily: "IBMPlexSans-Bold",
        fontSize: 20,
        fontWeight: "bold",
    },

    card: {

        height: Dimensions.get('window').height * .092,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        width: "100%",
        backgroundColor: "#ffffff",
        borderColor: 'lightgray',
        marginBottom: '3%',
        borderRadius: 5,
        borderWidth: .8,

    }
});
export default SimpleInput;