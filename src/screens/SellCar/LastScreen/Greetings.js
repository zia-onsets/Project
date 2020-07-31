import React, { useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import styles from './Styles';
import CButton from '../../../components/buttons/CButton';
import MainHeader from '../../../components/headers/MainHeader';



const Greetings = props => {

    return (
        <SafeAreaView>
            <View style={styles.screen}>
                <MainHeader title='Create Listing' bgwhite rTitle ricontitle='Step 5 of 5' ></MainHeader>
                <View style={styles.pcontainer}>

                    <View style={styles.childcontainer}>

                        <Image source={require('./tick.png')} ></Image>
                        <Text style={styles.headertitle}>Listing Created!</Text>

                        <Text style={styles.text}>Your listing has been created and published.</Text>
                        <Text style={styles.text}>You can edit your listings underthe "My Listings" tab on the Home Page</Text>

                    </View>
                    <View style={styles.buttoncontainer}>
                        <CButton title='GREAT' color='white' fontSize={16} fontWeight='700' onSelect={() => { props.navigation.navigate('SellerCarS6') }}></CButton>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
};
export default Greetings;