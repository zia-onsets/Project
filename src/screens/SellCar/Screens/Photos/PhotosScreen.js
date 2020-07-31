import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList, ScrollView, Dimensions } from 'react-native';
import MainHeader from '../../../../components/headers/MainHeader';
import CButton from '../../../../components/buttons/CButton';
import styles from './Styles';
import SImpleInput from '../../Elements/SImpleInput';
import { dumyData } from './Elelments/DummyData';
import VehicleImg from './Elelments/VehicleImg';

const PhotosScreen = props => {


    const [resourcePath, setresourcePath] = useState(require('./Elelments/Select.png'));


    const Viewer = itemData => {

        return (
            <VehicleImg title={itemData.item.Title} img={resourcePath} onSelect={() => { console.log('Pressed') }}></VehicleImg>
        )
    }
    return (
        <SafeAreaView>
            <View style={styles.screen}>

                <MainHeader title='Create Listing' rTitle ricontitle='Step 4 of 5' ></MainHeader>
                <ScrollView>
                    <View style={styles.childcontainer}>
                        <View style={styles.titlecontainer}>
                            <Text style={styles.headertitle}>Photos</Text>
                            <Text style={styles.title}>Photos</Text>
                        </View>
                        <View style={{ height: '65%' }}>
                            <FlatList numColumns={4} data={dumyData} keyExtractor={item => item.id} renderItem={Viewer}></FlatList>
                        </View>
                        <View style={styles.inputcontainer}>
                            <Text>Total Amount</Text>
                            <SImpleInput placeHolder='$136,900' left></SImpleInput>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.buttoncontainer}>
                    <CButton title='Next : Vehicle Features' color='white' fontSize={16} fontWeight='700' onSelect={() => { props.navigation.navigate('SellerCarS6') }}></CButton>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default PhotosScreen;