import { StyleSheet, Dimensions } from 'react-native';
export default StyleSheet.create({
    buttoncontainer:
    {
        alignSelf: "flex-end",
        width: "100%",
        height: Dimensions.get('window').height * .08,
    }, pcontainer: {
        width: "90%", height: "95%", alignItems: "center", alignSelf: "center"
    },
    screen: {
        width: "100%",
        height: "100%",
        backgroundColor: '#FFFFFF',

    },
    childcontainer: {
        width: "80%",
        height: "70%",
        justifyContent: 'flex-start',
        alignItems: "center",


    },
    headertitle: {
        fontSize: 24,
        fontWeight: "500",
        marginTop: -20

    },
    text: {
        marginTop: '5%',
        alignSelf: "center",
        textAlign: "center",
        fontSize: 18,
        fontWeight: '500',
    }
});