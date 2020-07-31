import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView } from 'react-native';
import MainHeader from '../../../components/headers/MainHeader';
import VehicleType from '../../../components/VehicleType';
import CButton from '../../../components/buttons/CButton';

const SelectCar = props => {
    const [selectedvehicle, setselectedvehicle] = useState('Sedans');
    const [V1, setV1] = useState(true);
    const [V2, setV2] = useState(false);
    const [V3, setV3] = useState(false);
    const [V4, setV4] = useState(false);
    const [V5, setV5] = useState(false);
    const [V6, setV6] = useState(false);
    const [V7, setV7] = useState(false);
    const [V8, setV8] = useState(false);
    const [V9, setV9] = useState(false);
    console.log(selectedvehicle)
    const Presshandler = SelectedVehicle => {
        setV1(false)
        setV2(false)
        setV3(false)
        setV4(false)
        setV5(false)
        setV6(false)
        setV7(false)
        setV8(false)
        setV9(false)

        if (SelectedVehicle === 'V1') {
            setselectedvehicle('Sedans')
            setV1(!V1)
        } else if (SelectedVehicle === 'V2') {
            setselectedvehicle('Coupe')
            setV2(!V2)
        } if (SelectedVehicle === 'V3') {
            setselectedvehicle('Hatch-Back')
            setV3(!V3)
        } else if (SelectedVehicle === 'V4') {
            setselectedvehicle('SUV')
            setV4(!V4)
        } if (SelectedVehicle === 'V5') {
            setselectedvehicle('Convertible')
            setV5(!V5)
        } else if (SelectedVehicle === 'V6') {
            setselectedvehicle('Hybrid/Electric')
            setV6(!V6)
        } if (SelectedVehicle === 'V7') {
            setselectedvehicle('Pick-Up-Trucks')
            setV7(!V7)
        } else if (SelectedVehicle === 'V8') {
            setselectedvehicle('Crossover')
            setV8(!V8)
        } if (SelectedVehicle === 'V9') {
            setselectedvehicle('Minvian')
            setV9(!V9)
        }
    };
    return (
        <SafeAreaView style={styles.screen}>

            <MainHeader title='Select Vehicle' rTitle ricontitle='Step 1 of 5' ></MainHeader>
            <View style={{ height: "5%" }}></View>
            <View style={{ height: "85%", justifyContent: "space-between" }}>
                <View style={styles.carsModal}>
                    <View style={styles.carcontainer}>
                        <VehicleType title='Sedans' img={require('../../../res/images/icon-06.png')} onSelect={() => { Presshandler('V1') }} bordercolor={V1 ? 'red' : 'rgba(0,0,0,.4)'}></VehicleType>
                        <VehicleType title='Coupe' img={require('../../../res/images/icon-02.png')} onSelect={() => { Presshandler('V2') }} bordercolor={V2 ? 'red' : 'rgba(0,0,0,.4)'}></VehicleType>
                        <VehicleType title='Hatch-Back' img={require('../../../res/images/icon-04.png')} onSelect={() => { Presshandler('V3') }} bordercolor={V3 ? 'red' : 'rgba(0,0,0,.4)'}></VehicleType>

                    </View>
                    <View style={styles.carcontainer}>
                        <VehicleType title='SUV' img={require('../../../res/images/icon-07.png')} onSelect={() => { Presshandler('V4') }} bordercolor={V4 ? 'red' : 'rgba(0,0,0,.4)'}></VehicleType>
                        <VehicleType title='Convertible' img={require('../../../res/images/icon-01.png')} onSelect={() => { Presshandler('V5') }} bordercolor={V5 ? 'red' : 'rgba(0,0,0,.4)'}></VehicleType>
                        <VehicleType title='Hybrid/Electric' img={require('../../../res/images/icon-03.png')} onSelect={() => { Presshandler('V6') }} bordercolor={V6 ? 'red' : 'rgba(0,0,0,.4)'}></VehicleType>

                    </View>
                    <View style={styles.carcontainer}>
                        <VehicleType title='Pick-Up-Trucks' img={require('../../../res/images/icon-08.png')} onSelect={() => { Presshandler('V7') }} bordercolor={V7 ? 'red' : 'rgba(0,0,0,.4)'}></VehicleType>
                        <VehicleType title='Crossover' img={require('../../../res/images/icon-09.png')} onSelect={() => { Presshandler('V8') }} bordercolor={V8 ? 'red' : 'rgba(0,0,0,.4)'}></VehicleType>
                        <VehicleType title='Minvian' img={require('../../../res/images/icon-05.png')} onSelect={() => { Presshandler('V9') }} bordercolor={V9 ? 'red' : 'rgba(0,0,0,.4)'}></VehicleType>
                    </View>



                </View>

                <View style={{ width: "100%", height: "10%" }}>

                    <CButton title='Next : Basic Vehicle Details' color='white' fontSize={16} fontWeight='bold' onSelect={() => { props.navigation.navigate('SellerCarS2') }}></CButton>


                </View>
            </View>





        </SafeAreaView>);
};
const styles = StyleSheet.create({
    carcontainer: {
        width: "100%",
        height: "30%",
        justifyContent: "space-between",
        flexDirection: 'row'
    },
    carsModal: {
        height: '65%',
        width: "95%",
        alignItems: "center",
        justifyContent: 'space-evenly',
        alignSelf: 'center'
    },
    screen: {
        flex: 1
    },
    buttonView: {
        height: "30%",
        width: '100%',
    },
    mainContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "center",
    },
})

export default SelectCar