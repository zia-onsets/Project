import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image, Dimensions, StatusBar, FlatList } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import MainTitleHeader from '../../components/headers/MainTitleHeader';
import CButton from '../../components/buttons/CButton';
import { Icon } from 'react-native-elements'
import VehicleType from '../../components/VehicleType';
import { PRODUCTS } from '../../DummyData/SellingProduct';
import ListProduct from '../../components/LIstProduct';

export default class HomeScreen2 extends Component {

    constructor(props) {
        super(props);
        this.state = {

            images: [
                require('../../res/images/sliderimg1.png'),
                require('../../res/images/sliderimg2.jpg'),
                require('../../res/images/sliderimg4.jpg'),
                require('../../res/images/sliderimg5.jpg'),
            ]
        };
    }

    //     <SliderBox images={this.state.images} style={{ height: 404, width: 376, }} />
    render() {

        const listinghandler = itemData => {
            return (
                <ListProduct title={itemData.item.title} price={itemData.item.price} speed={itemData.item.speed} discription={itemData.item.discription} modal={itemData.item.modal} city={itemData.item.city}   ></ListProduct>
            )
        }
        return (
            <View style={styles.screen}>

                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="black" translucent={false} />


                <MainTitleHeader title='VOILA' rTitle ></MainTitleHeader>

                <ScrollView>
                    <View style={{ flex: 1, backgroundColor: "#F1804D", justifyContent: "space-evenly" }}>




                        <View style={{ justifyContent: "flex-end" }}>
                            <SliderBox images={this.state.images} autoplay dotColor="#FF8A0F" style={{ height: 404, width: 376, }} />
                            <Text style={{ position: "absolute", color: "white", paddingBottom: 90, paddingStart: 20, fontFamily: "IBMPlexSans-Bold", fontSize: 32, fontWeight: '700' }}>Automate
                            your next purchase</Text>
                        </View>



                        <View style={{ height: Dimensions.get('window').height * .01 }}></View>
                        <View style={{ height: 200, width: '100%', backgroundColor: "pink", borderRadius: 15, justifyContent: 'space-evenly' }}>

                            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                <Text style={styles.textfield}>Make</Text>
                                <Text style={styles.textfield}>Model</Text>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: 'flex-end', width: '45%', borderRadius: 20, alignSelf: 'center', backgroundColor: "#FFFF", alignItems: 'center' }}>
                                <View style={{ flexDirection: "row", paddingVertical: 2, alignItems: "center", justifyContent: "space-between", width: "80%", }}>
                                    <Text style={{ color: '#7E7E7E', textAlign: "center", fontSize: 18, fontWeight: '500' }}>Location</Text>
                                    <Icon name="my-location" size={20} color='#7E7E7E'></Icon>
                                </View>
                            </View>
                            <View style={{ width: "45%", height: "20%", alignSelf: 'center' }}>
                                <CButton title='SEARCH' borderRadius={8} color='white' fontFamily='IBMPlexSans-Bold' fontSize={14} fontWeight='700' bgcolor='#F19058'></CButton>

                            </View>



                        </View>
                        <View style={{ height: Dimensions.get('window').height * .01 }}></View>
                        <View style={{ height: Dimensions.get('window').height * .6, backgroundColor: "white", width: '100%', alignItems: "center", justifyContent: 'space-around', alignSelf: 'center' }}>
                            <View style={{ width: "90%", alignSelf: 'center', }}>
                                <Text style={{ fontFamily: "IBMPlexSans-Regular", color: "#7E7E7E", fontSize: 18, fontWeight: "500", alignSelf: "flex-start" }}>Quick Search</Text>
                            </View>
                            <View style={{ width: "90%", height: "27%", justifyContent: "space-between", flexDirection: 'row' }}>
                                <VehicleType title='Sedans' img={require('../../res/images/icon-06.png')}></VehicleType>
                                <VehicleType title='Coupe' img={require('../../res/images/icon-02.png')}></VehicleType>
                                <VehicleType title='Hatch-Back' img={require('../../res/images/icon-04.png')}></VehicleType>

                            </View>
                            <View style={{ width: "90%", height: "27%", justifyContent: "space-between", flexDirection: 'row' }}>

                                <VehicleType title='SUV' img={require('../../res/images/icon-07.png')}></VehicleType>
                                <VehicleType title='Convertible' img={require('../../res/images/icon-01.png')}></VehicleType>
                                <VehicleType title='Hybrid/Electric' img={require('../../res/images/icon-03.png')}></VehicleType>

                            </View>
                            <View style={{ width: "90%", height: "27%", justifyContent: "space-between", flexDirection: 'row' }}>
                                <VehicleType title='Pick-Up-Trucks' img={require('../../res/images/icon-08.png')}></VehicleType>
                                <VehicleType title='Crossover' img={require('../../res/images/icon-09.png')}></VehicleType>
                                <VehicleType title='Minvian' img={require('../../res/images/icon-05.png')}></VehicleType>


                            </View>
                            <View style={{ height: '3%' }}>
                            </View>


                        </View>
                        <View style={{ height: Dimensions.get('window').height * .01 }}></View>

                        <View style={{ height: Dimensions.get('window').height * .55, width: '100%', justifyContent: "space-around", backgroundColor: "#FFFFFF", alignItems: 'center' }}>
                            <View style={{ justifyContent: "space-between", flexDirection: "row", width: "90%" }}>
                                <Text style={{ fontFamily: "IBMPlexSans-Bold", fontSize: 20, fontWeight: '700', textAlign: "left" }}>Hot listings</Text>
                                <Text style={{ fontFamily: "IBMPlexSans-Bold", fontSize: 14, fontWeight: '700', alignSelf: 'flex-end', color: "#FF4F29", textAlign: "right" }}>See all</Text>
                            </View>
                            <View style={{ height: "80%", width: "100%" }}>
                                <FlatList data={PRODUCTS} horizontal={true} keyExtractor={item => item.id} renderItem={listinghandler}></FlatList>
                            </View>
                        </View>

                        <View style={{ height: Dimensions.get('window').height * .01 }}></View>

                        <View style={{ height: Dimensions.get('window').height * .43, width: '100%', flexDirection: "row", justifyContent: "space-around", backgroundColor: "#FFFFFF", alignItems: "center" }}>

                            <View style={{ height: '100%', width: '60%', justifyContent: 'space-evenly' }}>
                                <Text style={{ fontFamily: "IBMPlexSans-Bold", fontSize: 24, fontWeight: '700' }}>SELL for FREE!</Text>
                                <Text style={{ fontFamily: 'SegoeUI', fontSize: 15, fontWeight: "400", textAlign: "left" }} >Looking to sell your car? Selling can be frustrating as its usually time-consuming and expensive to list your vehicle.Automate enables a simple, yet hassle-free way to sell.</Text>
                                <View style={{ width: "70%", height: "15%", alignSelf: 'flex-start', }}>
                                    <CButton title='Get Started' borderRadius={8} color='white' fontFamily='IBMPlexSans-Bold' fontSize={14} fontWeight='700' bgcolor='#F19058'></CButton>

                                </View>

                            </View>
                            <View style={{ alignSelf: "center", height: "100%", width: "30%", justifyContent: "flex-end", alignItems: "flex-start" }}>
                                <Image source={require('../../res/images/sellcar.png')} style={{ alignSelf: 'center', marginBottom: 40 }} ></Image>
                            </View>

                        </View>
                        <View style={{ height: Dimensions.get('window').height * .01 }}></View>

                        <View style={{ flexDirection: "row", height: Dimensions.get('window').height * .5, width: '100%', justifyContent: "flex-start", backgroundColor: "#FFFFFF", }}>
                            <View style={{ height: "75%", flexDirection: "row", width: "28%", justifyContent: "center", alignItems: "center" }}>
                                <Image source={require('../../res/images/circle.png')}></Image>
                                <View style={{ position: "absolute", width: "100%", height: "100%", alignItems: 'flex-end', justifyContent: "center" }}>
                                    <Text style={{ color: "white", fontFamily: "IBMPlexSans-Bold", alignSelf: 'flex-end', width: '45%', fontSize: 25, fontWeight: '700' }}>Get See you</Text>
                                </View>

                            </View>
                            <View style={{ width: "57%", height: "78%", borderColor: 'red', alignItems: "flex-end", justifyContent: "space-evenly", }}>
                                <View style={{ height: "35%" }}></View>
                                <Text style={{ color: "black", fontFamily: "IBMPlexSans-Bold", width: "92%", alignSelf: 'flex-end', fontSize: 25, fontWeight: '700', textAlign: "left" }}>pre-approved to     all the options   can have</Text>
                                <View style={{ height: "25%" }}></View>
                                <View style={{ height: "15%", width: '120%', }}>
                                    <CButton title='Get Approved Now' borderRadius={8} color='white' fontFamily='IBMPlexSans-Bold' fontSize={14} fontWeight='700' bgcolor='#F19058'></CButton>
                                </View>
                            </View>
                            <Image source={require('../../res/images/circle2.png')} style={{ alignSelf: "flex-end" }}></Image>
                        </View>
                    </View>


                </ScrollView>

            </View>


        );
    }
};
const styles = StyleSheet.create({
    screen: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
    },
    buttonView: {
        width: '100%',
    },
    textfield: {
        color: '#7E7E7E',
        backgroundColor: "#FFFF",
        fontFamily: "IBMPlexSans-Medium",
        borderRadius: 20,
        paddingVertical: 1,
        paddingHorizontal: 40,
        textAlign: "center",
        fontSize: 18,
        fontWeight: '500'
    },
})

