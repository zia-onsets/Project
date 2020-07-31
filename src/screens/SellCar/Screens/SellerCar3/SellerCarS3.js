import React, { useState } from 'react';
import { View, Text, StyleSheet, Keyboard, TouchableWithoutFeedback, ScrollView, Dimensions } from 'react-native';
import InputContainer from '../../Elements/InputContainer';
import Textpicker from '../../Elements/Textpicker';
import MainHeader from '../../../../components/headers/MainHeader';
import CButton from '../../../../components/buttons/CButton';
import styles from './Style'
import SimpleButton from '../../../../components/buttons/SimpleButton';
import SimpleInput from '../../Elements/SImpleInput';
const SellerCarS3 = props => {
    const [LeaseTerm, setLeaseTerm] = useState('39 Months');

    const [LeaseTransferFee, setLeaseTransferFee] = useState('Current Owner')
    const [LeaseExpirayDate, setLED] = useState('');
    const [purchaseOption, setPO] = useState('');
    const [OriginalDownPaymet, setODP] = useState('');

    const [SecurityDeposit, setSD] = useState('');
    const [KMCharge, setKMCharge] = useState('');

    const [MonthalyPaymet, setMP] = useState('');
    const [PaymetRemaining, setPR] = useState('');
    const [MillageAllowed, setMA] = useState('');
    const [giveCash, setgiveCash] = useState(true);
    const [wantCash, setwantCash] = useState(false);
    const [cash, setcash] = useState('')
    console.log('LEd -----' + LeaseExpirayDate);
    console.log('Original Lease Term----' + LeaseTerm)
    console.log('PO--------- ' + purchaseOption);
    console.log('ORiginalDOwn Payment------- ' + OriginalDownPaymet);
    console.log('SecurityDeposit--------- ' + SecurityDeposit);
    console.log('KM charges------- ' + KMCharge);
    console.log('Who will pay the Lease Transfer Fees------' + LeaseTransferFee)
    console.log("Monthaly PAyment-----" + MonthalyPaymet);
    console.log("Payment Remaining--------" + PaymetRemaining);
    console.log("Total MIlliage Allowed------" + MillageAllowed);
    console.log("WAnt Cas-----" + wantCash)
    console.log('Give Cash-------' + giveCash)
    console.log('Cash---' + cash)
    let LT = [{
        value: '39 Months',
    }, {
        value: '40 Months',

    }, {
        value: '41 Months',
    }];
    let LTF = [{
        value: 'Current Owner',
    }, {
        value: 'Pre Owner',

    }, {
        value: 'None',
    }];
    // console.log('LT' + LeaseTerm);
    // console.log('LTF' + LeaseTransferFee);
    //         onPressAction={() => this.props.navigation.navigate('SellerType')}
    const NavigationHandler = () => {

        props.navigation.navigate('SellerCarS4')

    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.screen} >
                <MainHeader title='Create Listing' rTitle ricontitle='Step 2 of 5' ></MainHeader>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={{ width: "96%" }}>



                            <Text style={styles.headertitle}>Enter Basic Vehicle Details</Text>
                            <InputContainer title='Lease Expiry Date' c DataValue={val => setLED(val)} placeHolder='MM/YYYY' ></InputContainer>

                            <Textpicker title='Original Lease Term' hasSelected={val => setLeaseTerm(val)} center Data={LT} label='39 Months'></Textpicker>

                            <InputContainer title='Purchase option at end of lease' c placeHolder='$41,560' DataValue={val => setPO(val)} ></InputContainer>

                            <InputContainer title='Original down payment (if any)' c placeHolder='$0' DataValue={val => setODP(val)} ></InputContainer>

                            <InputContainer title='Security Deposit (if any)' c placeHolder='$0' DataValue={val => setSD(val)} ></InputContainer>

                            <InputContainer title='Excess KM Charge' c placeHolder='$0.10' DataValue={val => setKMCharge(val)} ></InputContainer>

                            <Textpicker title='Who will pay the Lease Transfer Fees?' center hasSelected={val => setLeaseTransferFee(val)} Data={LTF} label='Current Owner'></Textpicker>

                            <InputContainer title='Monthly Payments Including Tax' c placeHolder='$475.67' DataValue={val => setMP(val)} ></InputContainer>

                            <InputContainer title='Payments Remaining' placeHolder='5' c DataValue={val => setPR(val)} ></InputContainer>

                            <InputContainer title='Total Mileage Allowed' c placeHolder='100,000' DataValue={val => setMA(val)} ></InputContainer>
                            <View style={{ flexDirection: "row", height: Dimensions.get('window').height * .1, width: '100%', justifyContent: "space-between", marginBottom: "3%" }}>

                                <SimpleButton title='Willing to give cash' onSelect={() => { setgiveCash(true), setwantCash(false) }} borderColor={giveCash ? 'red' : 'black'} ></SimpleButton>

                                <SimpleButton title='I want Cash' onSelect={() => { setgiveCash(false), setwantCash(true) }} borderColor={wantCash ? 'red' : 'black'}></SimpleButton>


                            </View>
                            <SimpleInput placeHolder='$5,500' DataValue={val => setcash(val)} ></SimpleInput>
                        </View>
                        <View style={styles.buttoncontainer}>
                            <CButton title='Next : Upload Photos' color='white' fontFamily='IBMPlexSans-Bold' fontSize={16} fontWeight='700' onSelect={NavigationHandler}></CButton>
                        </View>
                    </View>

                </ScrollView>


            </View>

        </TouchableWithoutFeedback>
    );
};

export default SellerCarS3;
