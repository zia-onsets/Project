import React, { useState } from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import styles from './Style';
import MainHeader from '../../../../components/headers/MainHeader';
import CButton from '../../../../components/buttons/CButton';
import Checkbox from '../Features/Elements/Checkbox';

import Roundinput from './Elements/Roundinput';
const EPScreen = props => {
    const [MFwarrantyM, setMFwarrantyM] = useState('')
    const [MFwarrantyKm, setMFwarrantyKm] = useState('')
    const [TEwarrantyM, setTEwarrantyM] = useState('')
    const [TEwarrantyKm, setTEwarrantyKm] = useState('')
    console.log("MFM", MFwarrantyM)
    console.log("MFM", MFwarrantyKm)
    console.log("MFM", TEwarrantyM)
    console.log("MFM", TEwarrantyKm)



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
    return (

        <SafeAreaView>
            <View style={styles.screen}>
                <MainHeader title='Create Listing' rTitle ricontitle='Step 4 of 5' ></MainHeader>
                <ScrollView style={styles.childcontainer}>
                    <View>
                        <Text style={styles.headertitle}>Extra Protections</Text>
                        <View style={styles.datacontainer}>

                            <Checkbox marked={Add} title='Does this vehicle still have a valid manufacturers warranty?' History permission value='1'></Checkbox>

                            <Text>When does it expire?</Text>
                            <View style={styles.btncontainer}>
                                <Roundinput placeHolder='mm/yyyy' DataValue={val => setMFwarrantyM(val)}></Roundinput>
                                <Roundinput placeHolder="Km's" DataValue={val => setMFwarrantyKm(val)}></Roundinput>
                            </View>


                        </View>
                        <View style={styles.datacontainer}>

                            <Checkbox marked={Add} title='Does this vehicle have a transferable extended warranty?' History permission value='2'></Checkbox>

                            <Text>When does it expire?</Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Roundinput placeHolder='mm/yyyy' DataValue={val => setTEwarrantyM(val)}></Roundinput>
                                <Roundinput placeHolder="Km's" DataValue={val => setTEwarrantyKm(val)}></Roundinput>
                            </View>


                        </View>

                        <Checkbox marked={Add} title='Does this vehicle have a working Rust Protection Module?' History permission value='3'></Checkbox>

                    </View>
                </ScrollView>
                <View style={styles.buttoncontainer}>
                    <CButton title='Next : Vehicle Condition' color='white' fontSize={16} fontWeight='700' onSelect={() => { props.navigation.navigate('SellerCarS6') }}></CButton>
                </View>
            </View>
        </SafeAreaView>
    )
};
export default EPScreen;