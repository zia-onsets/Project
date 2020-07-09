import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import CButton from './buttons/CButton';
import { SliderBox } from "react-native-image-slider-box";
export default class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images2: [
                require('../res/images/Rectangle2.png'),

            ]
        };
    }

    //     <SliderBox images={this.state.images} style={{ height: 404, width: 376, }} />
    render() {
        return (
            <View style={{ width: Dimensions.get('window').width * .66, height: '100%', marginEnd: Dimensions.get('window').width * .13 }}>
                <View style={{ width: "100%", height: "50%", overflow: "hidden" }}>
                    <Image source={require("../res/images/Rectangle2.png")} resizeMode='cover'></Image>
                </View>

                <View style={{ width: "90%", alignSelf: "center", justifyContent: "space-around" }}>

                    <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                        <Text style={{ fontFamily: "IBMPlexSans-Medium", fontSize: 10, fontWeight: '500', textAlign: "left" }}>{this.props.title}</Text>
                        <Image source={require('../res/images/favorite_border.png')}></Image>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontFamily: "IBMPlexSans-Bold", fontSize: 20, fontWeight: '700' }}>${this.props.price}</Text>
                            <Text style={{ fontFamily: "IBMPlexSans-Bold", fontSize: 9, fontWeight: '700', color: "#6B6B6B", alignSelf: "flex-start" }}>  +  Taxes</Text>

                        </View>

                        <View style={{ alignItems: "flex-end", alignSelf: "flex-end", }}>
                            <Image source={require('../res/images/checkbox.png')} style={{ alignSelf: "flex-end" }}></Image>
                            <Text style={{ fontFamily: "Segoe UI", fontSize: 8, fontWeight: "400" }}>Compare</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", width: Dimensions.get('window').width * .3, justifyContent: "space-between", }}>
                        <Text style={{ ...styles.extrainfotext, ...{ alignSelf: "auto" } }}>{this.props.speed} Km</Text>
                        <Text style={styles.extrainfotext}>{this.props.discription}</Text>
                        <Text style={styles.extrainfotext}>{this.props.modal}</Text>
                        <Text style={styles.extrainfotext}>{this.props.city}</Text>
                    </View>
                    <View style={{ width: "100%", height: "30%" }}>
                        <CButton title='MORE DETAILS' borderRadius={5} color='white' fontFamily='IBMPlexSans-Bold' fontSize={14} fontWeight='700' bgcolor='#F19058'></CButton>
                    </View>
                </View>
            </View>
        )
    }
};
const styles = StyleSheet.create({
    extrainfotext: {
        fontFamily: "Segoe UI",
        fontSize: 8,
        fontWeight: "400"
    }
})