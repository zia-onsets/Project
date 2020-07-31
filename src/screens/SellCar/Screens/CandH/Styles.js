import { StyleSheet, Dimensions } from 'react-native';
export default StyleSheet.create({
    buttoncontainer:
    {
        alignSelf: "flex-end",
        width: "100%",
        height: Dimensions.get('window').height * .08,
    },
    screen: {
        width: "100%",
        height: "100%",
        backgroundColor: '#ffffff',
        alignItems: "center",
        justifyContent: "space-between"
    },
    containder: {
        alignSelf: "center",
        width: "100%",

    },
    checkbox: {
        width: "95%",
        alignSelf: "center",
        justifyContent: "space-evenly",
        height: '90%'
    },
    childcontainer: {
        width: "95%",
        alignSelf: "center"
    },
    headertitle: {
        fontSize: 18,
        fontWeight: "bold",

        alignSelf: "flex-start",
        marginBottom: '8%',
        marginTop: '8%'
    },
    card: {

        height: 120,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 4,
        justifyContent: "flex-end",
        width: "100%",
        backgroundColor: "#ffffff",
        marginBottom: "3%",
        borderRadius: 5,
        borderWidth: .8,
        borderColor: 'lightgray'
    },
    inputContainerTitle: {
        color: 'rgba(1,1,1,.5)',
        fontSize: 12,
        fontWeight: "normal",
        marginBottom: 15,
    },
});