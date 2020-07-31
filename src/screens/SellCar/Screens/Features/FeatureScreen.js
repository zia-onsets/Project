import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import styles from './Style';
import MainHeader from '../../../../components/headers/MainHeader';
import CButton from '../../../../components/buttons/CButton';
import Checkbox from './Elements/Checkbox';

import { dumyData } from './Elements/DummyData';
const FeatureScreen = props => {
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
    const Viewer = itemData => {

        return (
            <Checkbox title={itemData.item.Title} marked={Add} value={itemData.item.id}></Checkbox>
        )
    }
    return (
        <View style={styles.screen}>
            <MainHeader title='Create Listing' rTitle ricontitle='Step 4 of 5' ></MainHeader>

            <ScrollView style={styles.scrl}>

                <View style={styles.containder}>
                    <Text style={styles.title}>Select Features</Text>
                    <FlatList data={dumyData} keyExtractor={Item => Item.id} renderItem={Viewer}></FlatList>
                </View>
            </ScrollView>


            <View style={styles.buttoncontainer}>
                <CButton title='Next : Extra Protections' color='white' fontFamily='IBMPlexSans-Bold' fontSize={16} fontWeight='700' onSelect={() => { props.navigation.navigate('SellerCarS6') }}></CButton>
            </View>
        </View>

    )
};
export default FeatureScreen;