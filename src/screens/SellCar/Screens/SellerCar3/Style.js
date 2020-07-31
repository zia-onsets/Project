import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create(
    {
        screen: { flex: 1, width: "100%", alignItems: "center" },
        container: {
            flex: 1,
            width: Dimensions.get('window').width * 1,

            justifyContent: "space-around",
            alignItems: "center",

        },
        scrollcontainer: {
            width: Dimensions.get('window').width * .9,
            flex: 1,

        }, headertitle: {
            fontSize: 18,
            fontWeight: "bold",
            fontFamily: 'IBMPlexSans-Regular',
            alignSelf: "flex-start",
            marginBottom: '5%',
            marginTop: '5%'
        },
        title: {
            color: 'rgba(1,1,1,.5)',
            fontFamily: "Segoe UI",
            fontSize: 14,
            fontWeight: "normal",
            paddingBottom: "2%"
        },
        buttoncontainer:
        {
            width: "100%",
            height: Dimensions.get('window').height * .08,
            alignSelf: "flex-end",
            justifyContent: "flex-end",

        },
        card: {
            flexDirection: "row",
            borderRadius: 4,
            justifyContent: "flex-end",
            width: "100%",
            height: "13%",
            shadowColor: "black",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: .3,
            backgroundColor: "white"
        },
        sectionA: {
            flexDirection: 'row',
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            height: "12%",

        },
        sectionB: {
            justifyContent: "space-around",
            height: Dimensions.get('window').height * .7,


        },
        BlockA: {
            width: "93%",
            height: "90%",

        },
        BlockB: {
            justifyContent: "center",
            alignItems: "center",
            width: '100%',
            height: "10%",

        },
    }


);
