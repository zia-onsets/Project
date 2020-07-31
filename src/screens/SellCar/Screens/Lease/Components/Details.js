import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import CButton from '../../../../../components/buttons/CButton';
export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.childcontainer}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.price}>{this.props.price}</Text>
                        <Text style={styles.paymentremaining}>{this.props.paymentremaining} Months Remaining</Text>
                    </View>
                    <View style={styles.specificatiocontainer}>
                        <Text style={styles.extrainfotext}>{this.props.speed} Km   .   </Text>
                        <Text style={styles.extrainfotext}>{this.props.discription}   .   </Text>
                        <Text style={styles.extrainfotext}>{this.props.modal}   .   </Text>
                        <Text style={styles.extrainfotext}>{this.props.city}</Text>
                    </View>
                    <View style={styles.btncontainer}>
                        <CButton title='MAKE AN OFFER' borderRadius={8} color='white' fontSize={14} fontWeight='bold' bgcolor='#F19058'></CButton>
                    </View>

                </View>
            </View>
        )
    }
};
const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        width: '100%', justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFF",
        height: Dimensions.get('window').height * .35,
    },
    childcontainer: {
        width: "90%",
        height: "90%",
        justifyContent: "space-around"
    },
    btncontainer: {
        height: "30%",
        width: '65%',
        alignSelf: "center"
    },
    specificatiocontainer: {
        flexDirection: "row",
        width: Dimensions.get('window').width * .76,
        justifyContent: "space-between",
    },
    price: {
        textAlignVertical: "bottom",
        fontSize: 30,
        fontWeight: "bold"
    },
    title: {
        fontSize: 16,
        fontWeight: "500",

    },
    extrainfotext: {

        fontSize: 14,
        fontWeight: "400"
    },
    paymentremaining: {
        textAlignVertical: "bottom",

        fontSize: 16,
        fontWeight: "500"
    }
});
