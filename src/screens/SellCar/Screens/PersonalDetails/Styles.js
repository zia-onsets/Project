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
    childcontainer: {
        width: "95%",
        alignSelf: "center",
    },
    headertitle: {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "flex-start",
        marginBottom: '8%',
        marginTop: '8%'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlignVertical: "top",
        height: "90%",
    }
});