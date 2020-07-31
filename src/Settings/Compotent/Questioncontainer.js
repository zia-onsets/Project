import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
const Questioncontainer = props => {
    return (
        <TouchableOpacity onPress={props.onSelect} style={styles.container}>

            <View style={styles.textcontainer}>

                <Text style={{ fontFamily: props.fontFamily, fontSize: props.fontSize, fontWeight: props.fontWeight }}>{props.title}</Text>
                <Image source={props.imgpath}></Image>

            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {

        borderBottomWidth: 1,
        borderBottomColor: 'rgba(112,112,112,.4)',
        justifyContent: "center",
        height: "13%",
    },
    textcontainer: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    }
});
export default Questioncontainer