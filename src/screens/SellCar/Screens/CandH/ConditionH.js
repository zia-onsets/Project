import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import styles from './Styles';
import Textpicker from '../../Elements/Textpicker';
import CButton from '../../../../components/buttons/CButton';
import MainHeader from '../../../../components/headers/MainHeader';
import Checkbox from '../Features/Elements/Checkbox'

const ConditionH = props => {
    const [noofaccident, setnoofaccident] = useState("No");
    const [havSlavaged, setSlavaged] = useState('No')
    const [IsDrivable, setdrivable] = useState('Yes')
    const [lightissue, setlightissue] = useState('No')
    const [afterMarketParts, setafterMarketParts] = useState('No')
    const [condition, setcondition] = useState('Good')
    const [beenSmoked, setbeenSmoked] = useState('No')
    const [noOfKeys, setnoOfKeys] = useState(2)
    const [wheelsSet, setSetOfWheels] = useState(2);
    console.log('Accidents  =' + noofaccident)
    console.log('Slavaged  =' + havSlavaged)
    console.log('Drivable  =' + IsDrivable)
    console.log('Lighissues  =' + lightissue)
    console.log('After Market Parts  =' + afterMarketParts)
    console.log('Condition  =' + condition)
    console.log('Been Smoked  =' + beenSmoked)
    console.log('Number Of keys  =' + noOfKeys)
    console.log('Wheel Sets  =' + wheelsSet)
    const Selected = [];
    const Add = (id, value) => {

        if (value === 'delete') {
            let index = Selected.findIndex(item => item.id === id)

            Selected.splice(index, 1)
            console.log('-----------After Delete---------------------')
            Selected.map(item => { console.log(item.id, item.title) })
            console.log('--------------------------------')
        } else {
            //const item = new Item(id, value)
            Selected.push({ id: id, title: value })
            console.log('-------------Adding Item-------------------')
            Selected.map(item => { console.log(item.id, item.title) })
            console.log('--------------------------------')
        }

    }
    const Boolean = [{ value: 'Yes', }, { value: 'No' }];
    const Condition = [{ value: 'Satisfactory' }, { value: 'Good' }, { value: 'Extraordinary' }];
    const count = [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }]
    return (
        <SafeAreaView>
            <View style={styles.screen}>
                <MainHeader title='Create Listing' rTitle ricontitle='Step 4 of 5' ></MainHeader>
                <ScrollView style={styles.containder}>
                    <View style={styles.childcontainer}>
                        <Text style={styles.headertitle}>Vehicle condition and history</Text>
                        <Textpicker title='Has this vehicle ever been in an accident?' hasSelected={val => setnoofaccident(val)} Data={Boolean} label='No'></Textpicker>
                        <Textpicker title='Does this vehicle have a Salvaged/Rebuilt/VGA title?' hasSelected={val => setSlavaged(val)} Data={Boolean} label='No'></Textpicker>
                        <Textpicker title='Is your vehicle in a drivable condition?' hasSelected={val => setcondition(val)} Data={Boolean} label='Yes'></Textpicker>
                        <Textpicker title='Are there any warning light or mechanical issues?' hasSelected={val => setlightissue(val)} Data={Boolean} label='No'></Textpicker>
                        <Textpicker title='Does your vehicle have aftermarket parts or modifications?' hasSelected={val => setafterMarketParts(val)} Data={Boolean} label='No'></Textpicker>
                        <Textpicker title='How would you describe the condition of your vehicle?' hasSelected={val => setcondition(val)} Data={Condition} label='Good'></Textpicker>
                        <Textpicker title='Has this vehicle been smoked in?' hasSelected={val => setbeenSmoked(val)} Data={Boolean} label='No'></Textpicker>
                        <Textpicker title='How many keys does this vehicle have?' hasSelected={val => setnoOfKeys(val)} Data={count} label='2'></Textpicker>
                        <Textpicker title='How many set(s) of wheels does this come with?' hasSelected={val => setSetOfWheels(val)} Data={count} label='2'></Textpicker>
                        <View style={styles.card}>
                            <View style={styles.checkbox}>
                                <Text style={styles.inputContainerTitle}>How many set(s) of tires does this come with?</Text>
                                <Checkbox title='Summer Tires' marked={Add} History value='1'></Checkbox>
                                <Checkbox title='Winter Tires' marked={Add} History value='2'></Checkbox>

                            </View>
                        </View>

                    </View>
                </ScrollView>
                <View style={styles.buttoncontainer}>
                    <CButton title='Next : Personal Details' color='white' fontFamily='IBMPlexSans-Bold' fontSize={16} fontWeight='700' onSelect={() => { props.navigation.navigate('SellerCarS6') }}></CButton>
                </View>
            </View>
        </SafeAreaView>)
};
export default ConditionH;