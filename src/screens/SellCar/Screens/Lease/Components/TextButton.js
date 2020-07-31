import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
const TextButton = props => {
    return (
        <TouchableOpacity onPress={props.onSelect}>
            <View style={{ marginTop: 30 }}>
                <Text style={styles.statement}>{props.statement}</Text>
            </View>
        </TouchableOpacity>
    )
};
const styles = StyleSheet.create({
    statement: {
        fontSize: 14,
        fontWeight: 'bold',
        color: "#FF4F29"
    }
});
export default TextButton