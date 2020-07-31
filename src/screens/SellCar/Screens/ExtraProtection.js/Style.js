import { StyleSheet, Dimensions } from 'react-native';
export default StyleSheet.create({
    btncontainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    datacontainer: {
        width: "100%",
        justifyContent: "center",
        marginBottom: '10%',
        borderBottomColor: "#D6D6D6",
        borderBottomWidth: 2,
    },
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
    childcontainer: {
        height: "80%",

        width: "90%",
        alignSelf: "center",
    },
    headertitle: {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "flex-start",
        paddingBottom: '10%',
        marginTop: '6%',


    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlignVertical: "top",
        height: "90%",
    }
});