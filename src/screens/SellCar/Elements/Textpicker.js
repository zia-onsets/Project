import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, Picker, _View, Platform } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
const Textpicker = props => {
    const [selectedValue, setSelectedValue] = useState('');

    const handler = val => {
        setSelectedValue(val);
        props.hasSelected(val)

    }

    return (
        <View style={{ ...styles.card }}>
            <View style={styles.container}>
                <Text style={styles.inputContainerTitle}  >{props.title}</Text>
                <View style={styles.ddcontainer}>
                    <Dropdown containerStyle={{ ...styles.Dropdown, ...{ width: props.center ? "65%" : '100%', alignSelf: props.center ? 'flex-end' : 'flex-start' } }}
                        inputContainerStyle={{ borderBottomColor: 'transparent' }}
                        onChangeText={(itemValue) => { handler(itemValue) }}
                        data={props.Data} label={selectedValue ? "" : props.label}
                        baseColor='#000000'
                        itemTextStyle={styles.font}
                        labelTextStyle={{ fontSize: 20, fontWeight: "bold" }}
                        style={styles.font}
                    />
                </View>
            </View>
        </View>
    )

};
const styles = StyleSheet.create({
    container: {
        width: "98%",
        height: "80%",
        justifyContent: "space-between",
        padding: 5
    },
    ddcontainer: {
        justifyContent: "center",
        height: "90%",
        alignItems: "flex-start",
    },
    Dropdown: {
        height: "70%",
        justifyContent: "flex-end",
        marginTop: Platform.OS === 'ios' ? 15 : -5,
        borderBottomColor: 'transparent'
    },
    font: {
        fontSize: 17,
        fontWeight: "bold"
    },
    inputContainerTitle: {
        color: 'rgba(1,1,1,.5)',
        fontSize: 12,
        fontWeight: "normal",
    },
    card: {
        height: 75,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 4,
        justifyContent: "flex-end",
        width: "100%",
        backgroundColor: "#ffffff",
        borderColor: 'lightgray',
        marginBottom: "3%",
        borderRadius: 5,
        borderWidth: .8,
    }
});
export default Textpicker;