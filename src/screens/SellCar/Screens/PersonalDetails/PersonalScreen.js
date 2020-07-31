import React, { useState } from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import styles from './Styles';
import MainHeader from '../../../../components/headers/MainHeader';
import CButton from '../../../../components/buttons/CButton';
import InputContainer from '../../Elements/InputContainer';
const PersonalScreen = props => {
    const [Phonenumber, setphonenumber] = useState('')
    const [Postalcode, setpostalcode] = useState('')
    const [address, setaddress] = useState('')
    console.log('Number', Phonenumber);
    console.log('Postal Code', Postalcode);
    console.log('address', address)
    return (
        <SafeAreaView>
            <View style={styles.screen}>
                <MainHeader title='Create Listing' rTitle ricontitle='Step 5 of 5' ></MainHeader>
                <ScrollView>
                    <View style={styles.childcontainer}>
                        <Text style={styles.headertitle}>Add Personal Details</Text>
                        <InputContainer title='Phone Number' style={styles.text} DataValue={val => setphonenumber(val)}></InputContainer>
                        <InputContainer title='Postal Code' Dis style={styles.text} DataValue={val => setpostalcode(val)} ></InputContainer>
                        <InputContainer title='Address' Dis style={styles.text} DataValue={val => setaddress(val)}></InputContainer>

                    </View>
                </ScrollView>
                <View style={styles.buttoncontainer}>
                    <CButton title='View Draft' color='white' fontSize={16} fontWeight='700' onSelect={() => { props.navigation.navigate('SellerCarS6') }}></CButton>
                </View>
            </View>
        </SafeAreaView>
    )
};
export default PersonalScreen;