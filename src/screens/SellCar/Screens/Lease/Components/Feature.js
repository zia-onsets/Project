import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Feature = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.value}>{props.value}</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 14,


    },
    value: {
        fontSize: 14,
        fontWeight: 'bold',

    }
})
export default Feature;