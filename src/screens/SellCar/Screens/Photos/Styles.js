import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    screen: {
        justifyContent: "space-between",

        width: "100%",
        height: "100%",
    },
    titlecontainer: {
        height: "13%",
        justifyContent: "space-evenly"
    },
    buttoncontainer:
    {
        alignSelf: "flex-end",
        width: "100%",
        height: Dimensions.get('window').height * .08,
    },
    buttonView: {
        height: "30%",
        width: '100%',
    },
    inputcontainer: {
        height: "20%",
        marginTop: "4%",
        justifyContent: "space-evenly"
    },
    title: {
        fontSize: 14,
        fontWeight: '500',

    },
    headertitle: {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "flex-start",

    }, childcontainer: {
        height: Dimensions.get('window').height * .79,
        width: "92%",
        alignSelf: "center",

    },
})