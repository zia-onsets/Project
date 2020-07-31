import React, { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';


import styles from './Style'
import Textpicker from '../../Elements/Textpicker';
import InputContainer from '../../Elements/InputContainer';
import MainHeader from '../../../../components/headers/MainHeader';
import CButton from '../../../../components/buttons/CButton';
const SellerCarS2 = props => {
    const [VehicleMade, setVehicleMade] = useState('Audi');
    const [VehicleModal, setVehicleModal] = useState('Q8 Quattro');
    const [VehicleYear, setVehicleYear] = useState('2018');
    const [VINNumber, setVINNumber] = useState('');
    const [Mileage, setMileage] = useState('');
    const [Discreption, setDiscreption] = useState();

    let Make = [{
        value: 'Audi',
    }, {
        value: 'Mercides',

    }, {
        value: 'Honda',
    }];
    let Modal = [{
        value: 'Q8 Quattro',
    }, {
        value: 'Q8 Sinco'
    }, {
        value: 'Q8 Sehh'
    }];

    let Year = [{
        value: "2018",
    }, {
        value: "2019"
    }, {
        value: "2020"
    }];
    console.log("Vehicle Make--------" + VehicleMade);
    console.log("Vehicle Year-------" + VehicleModal)
    console.log("Vehicle Manifacturing Year-------" + VehicleYear)
    console.log("VIN Number    -------" + VINNumber)
    console.log("Mileage(Km)   -------- " + Mileage)
    console.log("DIscreption          --------" + Discreption)
    const NavigationHandler = () => {
        console.log(VINNumber.length)
        if (VINNumber.length != 0 && Mileage.length != 0) {
            props.navigation.navigate('SellerCarS3')
        } else {
            Alert.alert('Alert', 'Fill All the Fields', [{ text: 'OK', style: 'destructive' }])
        }
    }
    return (

        <View style={styles.screen} >
            <MainHeader title='Create Listing' rTitle ricontitle='Step 2 of 5' ></MainHeader>
            <ScrollView style={{ width: "100%" }} >

                <View style={styles.scrollcontainer} >
                    <View style={styles.container}>
                        <Text style={styles.headertitle}>Enter Basic Vehicle Details</Text>
                        <View style={styles.sectionB}>
                            <Text style={styles.title}>Vehicle info</Text>
                            <InputContainer title='VIN Number' DataValue={val => setVINNumber(val)} ></InputContainer>
                            <Textpicker title='Make' hasSelected={val => setVehicleMade(val)} Data={Make} label='Audi'></Textpicker>
                            <Textpicker title='Modal' hasSelected={val => setVehicleModal(val)} Data={Modal} label='Q8 Quattro'></Textpicker>
                            <Textpicker title='Year' hasSelected={val => setVehicleYear(val)} Data={Year} label="2019"></Textpicker>
                            <InputContainer title='Mileage (Km)' DataValue={val => setMileage(val)}></InputContainer>
                            <InputContainer title='Description' Dis DataValue={val => setDiscreption(val)} ></InputContainer>
                        </View>
                    </View>

                </View>


            </ScrollView>
            <View style={styles.buttoncontainer}>
                <CButton title='Next : Vehicle Specifications' color='white' fontFamily='IBMPlexSans-Bold' fontSize={16} fontWeight='700' onSelect={NavigationHandler}></CButton>
            </View>
        </View>

    );
};
export default SellerCarS2