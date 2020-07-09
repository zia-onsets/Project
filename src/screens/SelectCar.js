import React, { useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import MainHeader from '../components/headers/MainHeader';
import VehicleType from '../components/VehicleType';
import CButton from '../components/buttons/CButton';
const SelectCar = props => {
    const [color, setcolor] = useState('rgba(0,0,0,.4)')
    const [V1, setV1] = useState(false);
    const [V2, setV2] = useState(false);
    const [V3, setV3] = useState(false);
    const [V4, setV4] = useState(false);
    const [V5, setV5] = useState(false);
    const [V6, setV6] = useState(false);
    const [V7, setV7] = useState(false);
    const [V8, setV8] = useState(false);
    const [V9, setV9] = useState(false);

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
            setV1(!V1)
        } else if (SelectedVehicle === 'V2') {
            setV2(!V2)
        } if (SelectedVehicle === 'V3') {
            setV3(!V3)
        } else if (SelectedVehicle === 'V4') {
            setV4(!V4)
        } if (SelectedVehicle === 'V5') {
            setV5(!V5)
        } else if (SelectedVehicle === 'V6') {
            setV6(!V6)
        } if (SelectedVehicle === 'V7') {
            setV7(!V7)
        } else if (SelectedVehicle === 'V8') {
            setV8(!V8)
        } if (SelectedVehicle === 'V9') {
            setV9(!V9)
        }
    };
    return (
        <View style={styles.screen}>
            <MainHeader title='Select Vehicle' rTitle ricontitle='Step 1 of 5' ></MainHeader>
            <View style={{ height: "5%" }}></View>
            <View style={{ height: "85%", justifyContent: "space-between" }}>
                <View style={styles.carsModal}>
                    <View style={styles.carcontainer}>
                        <VehicleType title='Sedans' img={require('../res/images/icon-06.png')} onSelect={() => { Presshandler('V1') }} bordercolor={V1 ? 'red' : 'rgba(0,0,0,.4)'}></VehicleType>
                        <VehicleType title='Coupe' img={require('../res/images/icon-02.png')} onSelect={() => { Presshandler('V2') }} bordercolor={V2 ? 'red' : 'rgba(0,0,0,.4)'}></VehicleType>
                        <VehicleType title='Hatch-Back' img={require('../res/images/icon-04.png')} onSelect={() => { Presshandler('V3') }} bordercolor={V3 ? 'red' : 'rgba(0,0,0,.4)'}></VehicleType>

                    </View>
                    <View style={styles.carcontainer}>
                        <VehicleType title='SUV' img={require('../res/images/icon-07.png')} onSelect={() => { Presshandler('V4') }} bordercolor={V4 ? 'red' : 'rgba(0,0,0,.4)'}></VehicleType>
                        <VehicleType title='Convertible' img={require('../res/images/icon-01.png')} onSelect={() => { Presshandler('V5') }} bordercolor={V5 ? 'red' : 'rgba(0,0,0,.4)'}></VehicleType>
                        <VehicleType title='Hybrid/Electric' img={require('../res/images/icon-03.png')} onSelect={() => { Presshandler('V6') }} bordercolor={V6 ? 'red' : 'rgba(0,0,0,.4)'}></VehicleType>

                    </View>
                    <View style={styles.carcontainer}>
                        <VehicleType title='Pick-Up-Trucks' img={require('../res/images/icon-08.png')} onSelect={() => { Presshandler('V7') }} bordercolor={V7 ? 'red' : 'rgba(0,0,0,.4)'}></VehicleType>
                        <VehicleType title='Crossover' img={require('../res/images/icon-09.png')} onSelect={() => { Presshandler('V8') }} bordercolor={V8 ? 'red' : 'rgba(0,0,0,.4)'}></VehicleType>
                        <VehicleType title='Minvian' img={require('../res/images/icon-05.png')} onSelect={() => { Presshandler('V9') }} bordercolor={V9 ? 'red' : 'rgba(0,0,0,.4)'}></VehicleType>
                    </View>



                </View>

                <View style={{ width: "100%", height: "10%" }}>

                    <CButton title='Next : Basic Vehicle Details' color='white' fontFamily='IBMPlexSans-Bold' fontSize={14} fontWeight='700'></CButton>


                </View>
            </View>




        </View>);
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
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
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