import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { CheckBox } from 'react-native-elements'
import { DIMENSIONS } from '../../../../../res/css/base';
const Checkbox = props => {
    // <FontAwesome5 name="check-square" size={24} color="black" />
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const marked = () => {
        if (toggleCheckBox) {
            setToggleCheckBox(false)
            props.marked(props.value, "delete")
        } else {
            setToggleCheckBox(true);
            props.marked(props.value, props.title)
        }


    }
    return (

        <View style={props.History ? styles.containerH : styles.container}>


            <CheckBox
                wrapperStyle={props.permission ? styles.wrstylep : styles.wrstyle}
                title={props.title}
                iconRight
                containerStyle={styles.contstyle}
                checkedIcon='check-square'
                checkedColor='#F15D38'
                textStyle={props.History ? styles.textStyle : styles.textStyleH}
                checked={toggleCheckBox}
                onPress={marked}
            />
        </View>
    )
};
const styles = StyleSheet.create({
    contstyle: {
        borderColor: "rgba(1,1,1,0)",
        alignSelf: "flex-end",
        backgroundColor: "rgba(1,1,1,0)",
        width: '100%',
        paddingHorizontal: 0,
        marginLeft: 0,

    },
    wrstylep: {
        justifyContent: "space-between",
        alignItems: "flex-start",

        width: '95%',
        paddingBottom: 5,
        marginLeft: -10,
        marginRight: -10,
    },
    wrstyle: {
        justifyContent: "space-between",
        alignItems: "flex-start",

        width: '100%',
        paddingBottom: 5,
        marginLeft: -10,
        marginRight: -10,
    },
    textStyleH: {
        fontSize: 16,
        fontWeight: '500'
    },
    textstyle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    container: {
        backgroundColor: "#FFFF",
        height: Dimensions.get('window').height * .11,
        borderBottomColor: "#D6D6D6",
        borderBottomWidth: 2,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    containerH: {
        backgroundColor: "#FFFF",
        height: Dimensions.get('window').height * .06,
        flexDirection: "row",
        justifyContent: "space-between",

    }
})
export default Checkbox;