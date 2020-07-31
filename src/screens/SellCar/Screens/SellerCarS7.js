import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import MainHeader from '../../../components/headers/MainHeader';
import CButton from '../../../components/buttons/CButton';
const SellerCarS2 = props => {
    //         onPressAction={() => this.props.navigation.navigate('SellerType')}
    return (
        <View style={styles.screen}>
            <MainHeader title='Create Listing' rTitle ricontitle='Step 4 of 5' ></MainHeader>
            <Text>Hey THere</Text>

            <View style={{ width: "100%", height: "10%", alignSelf: "flex-end" }}>

                <CButton title='Next : Vehicle Condition' color='white' fontFamily='IBMPlexSans-Bold' fontSize={16} fontWeight='700' onSelect={() => { props.navigation.navigate('SellerCarS8') }}></CButton>


            </View>
        </View>);
};
const styles = StyleSheet.create({
    screen: {
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
    },

})
export default SellerCarS2;
