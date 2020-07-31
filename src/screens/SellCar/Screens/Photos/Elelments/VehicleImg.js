import React, { useState } from "react";
import { View, Text, Button, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const VehicleImg = props => {
    return (
        <View style={styles.container}>

            <View style={styles.img}>
                <TouchableOpacity onPress={props.onSelect}>
                    <Image source={props.img} resizeMode='cover' ></Image>
                </TouchableOpacity>
            </View>

            <Text style={styles.txt}>{props.title}</Text>



        </View>
    )
};
const styles = StyleSheet.create({
    txt: {
        fontFamily: "SegoeUI",
        fontSize: 12,
        fontWeight: '400',
        textAlign: 'center',
        color: "rgba(0,0,0,.3)"
    },
    img: {
        width: '100%',
        height: '75%',
        alignItems: "center",
        justifyContent: "center"
    },
    container: {
        marginEnd: "1.3%",
        width: "24%",
        height: Dimensions.get('window').height * .17,


    }
})
export default VehicleImg;