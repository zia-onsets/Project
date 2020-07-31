import { Dimensions, StyleSheet } from 'react-native';
export default StyleSheet.create({
    liststyle: {
        borderRadius: 8, alignItems: "center", backgroundColor: "#FFFF", flexDirection: "row", justifyContent: "space-between", height: Dimensions.get('window').height * .17, width: '100%',
    }, listitem: {
        width: "60%", alignItems: 'center', flexDirection: "row"
    },
    listtitle: {
        color: "#191919",
        fontSize: 18,
        fontWeight: "500"
    }, listsubtitle: {
        color: "#3376F5",
        fontSize: 12,
        fontWeight: "bold"
    },
    screen: {
        position: "absolute",
        backgroundColor: '#F99567',
        width: "100%",
        height: "100%",
    },
    buttoncontainer:
    {
        width: "100%",
        height: Dimensions.get('window').height * .08,
        alignSelf: "flex-end",
        justifyContent: "flex-end",

    }, sliderbox: {
        height: Dimensions.get('window').height * .3
    }, container: {
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        height: Dimensions.get('window').height * .83,
        backgroundColor: "#FFFF"
    },
    childcontainer: {
        width: "93%",
        height: "90%"
    }, buttoncontainer:
    {
        width: "100%", height: Dimensions.get('window').height * .08,
    },
    responcivecontainer: {
        backgroundColor: "#FFFF",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFF"
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',

    },
    textdis: {
        marginTop: 15,
        fontSize: 14,
        fontWeight: '400'
    },
    divider: { height: Dimensions.get('window').height * .01 }
})