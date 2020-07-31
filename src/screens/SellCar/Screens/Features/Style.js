import { Dimensions, StyleSheet } from 'react-native';
export default StyleSheet.create({
    screen: {
        width: "100%",
        height: "100%",
        backgroundColor: "#FFFF",
        alignItems: "center",
        justifyContent: "space-between"
    },
    containder: {
        alignSelf: "center",
        width: "95%",

    },
    scrl: {
        width: "100%",
        height: "100%",
        marginBottom: 20,
    },
    title: {
        marginTop: 25,
        marginBottom: 8,
        fontSize: 18,
        fontWeight: 'bold',

    },
    buttoncontainer:
    {
        alignSelf: "flex-end",
        width: "100%",
        height: Dimensions.get('window').height * .08,
    },
})