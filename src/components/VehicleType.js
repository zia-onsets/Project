import React, { useState } from "react";
import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
const VehicleType = props => {
    const [color, setcolor] = useState('#FFFF')
    return (
        <TouchableOpacity style={{ ...styles.container, ...{ borderColor: props.bordercolor } }} onPress={props.onSelect}>

            <View style={{ width: "100%", height: "60%", alignItems: "center", justifyContent: "center" }}>
                <Image source={props.img} resizeMode='cover' ></Image>
            </View>
            <View style={{ height: "20%", width: "100%", alignItems: "center", justifyContent: "flex-end" }}>
                <Text style={{ fontFamily: "SegoeUI", fontSize: 12, fontWeight: '400', color: "rgba(0,0,0,.3)" }}>{props.title}</Text>
            </View>


        </TouchableOpacity>
    )
};
const styles = StyleSheet.create({
    container: {
        width: "31%",
        height: "100%",
        borderRadius: 15,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
export default VehicleType;