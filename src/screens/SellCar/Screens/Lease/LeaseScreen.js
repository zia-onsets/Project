import React, { useState } from 'react';
import { View, Text, Dimensions, FlatList, ScrollView } from 'react-native';
import { ListItem, Icon, } from 'react-native-elements';
import { SliderBox } from "react-native-image-slider-box";
import MainHeader from '../../../../components/headers/MainHeader';
import CButton from '../../../../components/buttons/CButton';
import Feature from './Components/Feature';
import TextButton from './Components/TextButton';
import Details from './Components/Details';
import styles from './Style'
import { LeaseDetails, Condition, Specifications, Features } from './Assests/Data/DummyData';
const LeaseScreen = props => {
    const [showspecification, setshowspecification] = useState(false)
    const [showf, setshowf] = useState(false);
    const [read, setread] = useState(true);

    const images = [
        require('./Assests/Lease.png'),
        require('./Assests/sliderimg2.jpg'),
        require('./Assests/sliderimg4.jpg')
    ]
    //         onPressAction={() => this.props.navigation.navigate('SellerType')}
    const Viewer = itemData => {
        return (
            <Feature title={itemData.item.title} value={itemData.item.value}></Feature>
        )
    }
    return (

        <View style={styles.screen}>
            <MainHeader title='Panamera' ></MainHeader>
            <ScrollView>
                <View>
                    <View style={styles.sliderbox}>
                        <SliderBox images={images} dotColor="#FFFFFF" />
                    </View>

                    <Details title='Porsche Panamera 911 GTS Sport Turismo' price='$465.67' paymentremaining='5' speed='13,483' discription='Gas' modal='2018' city='Toronto'   ></Details>

                    <View style={styles.divider}></View>


                    <View style={styles.liststyle}>
                        <ListItem
                            style={styles.listitem}
                            leftAvatar={{
                                rounded: true,
                                source: require('./Assests/Profile.png'),
                                size: 'large'
                            }}
                            title='John Smith'
                            subtitle='Private Seller'
                            titleStyle={styles.listtitle}
                            subtitleStyle={styles.listsubtitle}
                        />
                        <Icon reverse name='chat' size={20} color='#8BA6C1' />
                        <Icon reverse name='call' color='#01BA77' size={20} />
                    </View>

                    <View style={styles.divider}></View>
                    <View style={{ ...styles.container, ...{ height: read ? Dimensions.get('window').height * .28 : Dimensions.get('window').height * .46 } }}>
                        <View style={styles.childcontainer}>
                            <Text style={styles.title}>Description</Text>
                            <Text numberOfLines={read ? 3 : null} style={styles.textdis}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</Text>
                            <TextButton statement={read ? "READ MORE   >" : "Read LESS   <"} onSelect={() => { setread(!read) }}></TextButton>

                        </View>
                    </View>
                    <View style={styles.divider}></View>
                    <View style={styles.container}>
                        <View style={styles.childcontainer}>
                            <Text style={styles.title}>Lease Details</Text>
                            <FlatList data={LeaseDetails} renderItem={Viewer} keyExtractor={item => item.id}></FlatList>
                        </View>
                    </View>

                    <View style={styles.divider}></View>
                    <View style={styles.container}>
                        <View style={styles.childcontainer}>
                            <Text style={styles.title}>Vehicle Condition</Text>
                            <FlatList data={Condition} renderItem={Viewer} keyExtractor={item => item.id}></FlatList>
                        </View>
                    </View>
                    <View style={styles.divider}></View>

                    <View style={{ ...styles.responcivecontainer, ...{ height: showspecification ? Dimensions.get('window').height * .9 : Dimensions.get('window').height * .41 } }}>
                        <View style={styles.childcontainer}>
                            <Text style={styles.title}>Specification</Text>
                            <FlatList data={Specifications} renderItem={Viewer} keyExtractor={item => item.id}></FlatList>
                            <TextButton statement={showspecification ? "VIEW LESS SPECIFICATIONS   <" : "VIEW ALL SPECIFICATIONS   >"} onSelect={() => { setshowspecification(!showspecification) }}></TextButton>

                        </View>

                    </View>

                    <View style={styles.divider}></View>

                    <View style={{ ...styles.responcivecontainer, ...{ height: showf ? Dimensions.get('window').height * .9 : Dimensions.get('window').height * .41 } }}>
                        <View style={styles.childcontainer}>
                            <Text style={styles.title}>FEATURES</Text>
                            <FlatList data={Features} renderItem={Viewer} keyExtractor={item => item.id}></FlatList>
                            <TextButton statement={showf ? "VIEW LESS SPECIFICATIONS   <" : "VIEW ALL SPECIFICATIONS   >"} onSelect={() => { setshowf(!showf) }}></TextButton>

                        </View>

                    </View>
                </View>
            </ScrollView>

            <View style={styles.buttoncontainer}>

                <CButton title='PUBLISH' color='#FFFFFF' fontSize={14} fontWeight="bold" onSelect={() => { props.navigation.navigate('SellerCarS5') }}></CButton>


            </View>

        </View>);
};

export default LeaseScreen;
