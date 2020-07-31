import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Dimensions, Platform } from 'react-native';

const InputContainer = props => {
    const [value, setvalue] = useState('');
    const inputhandler = data => {
        setvalue(data)
        props.DataValue(data)

    }
    return (
        <View style={styles.card}>
            <View style={{ width: "97%", height: "85%", justifyContent: "space-around", }}>
                <View style={{ height: "90%" }}>
                    <Text style={styles.container} >{props.title}</Text>
                    {
                        props.Dis ? (<TextInput multiline style={{ ...styles.Dis, ...props.style }} value={value} keyboardType={Platform.OS === 'ios' ? 'default' : 'visible-password'} onChangeText={inputhandler} ></TextInput>
                        ) : (<TextInput keyboardType='number-pad' style={styles.input} value={value} onChangeText={inputhandler}></TextInput>
                            )
                    }

                </View>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        color: 'rgba(1,1,1,.5)',
        fontSize: 12,
        fontWeight: "normal",
    },
    input: {
        flexDirection: "row",
        fontSize: 20,
        fontWeight: "bold",
    },
    Dis: {
        textAlignVertical: "top",
        height: "90%",
        fontSize: 15,
        fontWeight: "normal",

    },
    card: {
        height: 65,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 4,
        justifyContent: "flex-end",
        width: "100%",
        backgroundColor: "#ffffff",
        marginBottom: "3%",
        borderRadius: 5,
        borderWidth: .8,
        borderColor: 'lightgray'
    }
});
export default InputContainer