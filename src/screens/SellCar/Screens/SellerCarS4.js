import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Header, Divider, Icon, Input } from 'react-native-elements'
import MainHeader from '../../../components/headers/MainHeader';
import CButton from '../../../components/buttons/CButton';
//<MainHeader title='Create Listing' rTitle ricontitle='Step 3 of 5' ></MainHeader>
const SellerCarS4 = props => {
    //         onPressAction={() => this.props.navigation.navigate('SellerType')}
    return (
        <View style={styles.screen}>

            <Header
                //  placement="left"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff', fontFamily: "IBMPlexSans-Bold" } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <Divider></Divider>
            <Input
                placeholder='INPUT WITH ERROR MESSAGE'
                errorStyle={{ color: 'red' }}
                errorMessage='ENTER A VALID ERROR HERE'
            />
            <Text>Hey THere</Text>

            <View style={{ width: "100%", height: "10%", alignSelf: "flex-end" }}>

                <CButton title='Next : Upload Photos' color='white' fontFamily='IBMPlexSans-Bold' fontSize={16} fontWeight='700' onSelect={() => { props.navigation.navigate('SellerCarS5') }}></CButton>


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
export default SellerCarS4;
