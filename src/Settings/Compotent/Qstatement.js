import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Qstatement = props => {
    return (
        <View style={styles.container}>


            <Text style={styles.textstylse}>{props.statement}</Text>

        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        height: "48%",
        alignSelf: "center",
        width: '86%',
        justifyContent: 'center'
    },
    textstylse: {

        fontFamily: 'Segoe UI',
        fontSize: 14,

        textAlign: 'left'
    }
})
export default Qstatement;