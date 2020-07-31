import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import MainHeader from '../../../../components/headers/MainHeader';
import CButton from '../../../../components/buttons/CButton';
import styles from './Styles';
import Textpicker from '../../Elements/Textpicker';
const SpecificationScreen = props => {
    const [noofcelenders, setnoofcylinders] = useState(4);
    const [Transmission, settransmission] = useState('Automatic')
    const [Drivertrain, setdrivertain] = useState('RWD')
    const [door, setdoor] = useState(4)
    const [Extcolor, setextcolor] = useState('White')
    const [IntColor, setIntColor] = useState('Black')
    const [FuelType, setFuelType] = useState('Gas')
    const [BodyType, setBodyType] = useState('Sedan')
    const [Passengers, setPassengers] = useState(5)

    console.log('Number of Cylinders  =' + noofcelenders)
    console.log('Transmission  =' + Transmission)
    console.log('Drivertain  =' + Drivertrain)
    console.log('No of Doors  =' + door)
    console.log('External Color  =' + Extcolor)
    console.log('Interios Color  =' + IntColor)
    console.log('Type  =' + FuelType)
    console.log('Body Type  =' + BodyType)
    console.log('Passengers  =' + Passengers)

    const CylindersA = [{ value: 0 }, { value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];
    const TrasmissioNA = [{ value: 'Manual' }, { value: 'Automatic' }, { value: 'CVT' }];
    const DNA = [{ value: 'All Wheels' }, { value: 'Four Wheel Drive' }, { value: 'Front Wheel Drive' }, { value: 'Rear Wheel Drive' }];
    const DoorsA = [{ value: 4 }, { value: 6 }, { value: 8 }, { value: 10 }];
    const ColorA = [{ value: 'White' }, { value: 'Silver' }, { value: 'Black' }, { value: 'light Blue' }, { value: 'Green' }];
    const FuelTA = [{ value: 'Gas' }, { value: 'Petrol' }, { value: 'Diesel' }, { value: 'Batries' }];
    const BtypeA = [{ value: 'Hatchback' }, { value: 'Sedan' }, { value: 'MUV/SUV' }, , { value: 'Coupe' }, { value: 'Convertable' }, { value: 'Wagon' }, { value: 'Van' }, { value: 'Jeep' }];
    const passengersA = [{ value: 5 }, { value: 6 }, { value: 7 }, { value: 8 }, { value: 9 }, { value: 10 }];
    return (
        <SafeAreaView style={styles.mainContainer}>

            <MainHeader title='Create Listing' rTitle ricontitle='Step 3 of 5' ></MainHeader>
            <ScrollView style={styles.containder}>
                <View style={styles.childcontainer}>
                    <Text style={styles.headertitle}>Enter Specifications</Text>
                    <Textpicker title='Cylinders' hasSelected={val => setnoofcylinders(val)} Data={CylindersA} label='4'></Textpicker>
                    <Textpicker title='Transmission' hasSelected={val => settransmission(val)} Data={TrasmissioNA} label='Automatic'></Textpicker>
                    <Textpicker title='Drivetrain' hasSelected={val => setdrivertain(val)} Data={DNA} label='Rear Wheel Drive'></Textpicker>
                    <Textpicker title='Doors' hasSelected={val => setdoor(val)} Data={DoorsA} label='4'></Textpicker>
                    <Textpicker title='Exterior Color' hasSelected={val => setextcolor(val)} Data={ColorA} label='White'></Textpicker>
                    <Textpicker title='Interior Color' hasSelected={val => setIntColor(val)} Data={ColorA} label='Black'></Textpicker>
                    <Textpicker title='Fuel Type' hasSelected={val => setFuelType(val)} Data={FuelTA} label='Gas'></Textpicker>
                    <Textpicker title='Body Type' hasSelected={val => setBodyType(val)} Data={BtypeA} label='Sedan'></Textpicker>
                    <Textpicker title='Passengers' hasSelected={val => setPassengers(val)} Data={passengersA} label='5'></Textpicker>

                </View>
            </ScrollView>
            <View style={styles.buttoncontainer}>
                <CButton title='Next : Upload Photos' color='white' fontFamily='IBMPlexSans-Bold' fontSize={16} fontWeight='700' onSelect={() => { props.navigation.navigate('SellerCarS6') }}></CButton>
            </View>

        </SafeAreaView>

    )
};
export default SpecificationScreen;