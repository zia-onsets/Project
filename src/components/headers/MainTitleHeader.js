import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { Icon, Badge } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { THEME_COLORS } from '../../res/css/base';
import Style from '../../screens/choice-search/Style';

class MainTitleHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View
                style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: "flex-start",
                    height: '10%',
                    backgroundColor: THEME_COLORS.headerColor,
                }}>
                <View style={{ width: "95%", height: "100%", flexDirection: 'row', justifyContent: "space-around", alignItems: "center" }}>
                    <View style={{ width: '20%', alignItems: "flex-start", justifyContent: "center" }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.goBack();
                            }}>
                            <Image source={require('../../res/images/menu.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '50%', }}>
                        <Text
                            style={{
                                color: '#ffffff',
                                textAlign: 'center',
                                fontSize: 24,
                                fontFamily: "IBMPlexSans-Bold",
                                fontWeight: 'bold',
                            }}>
                            {this.props.title}
                        </Text>
                    </View>
                    {this.props.rTitle && (<View style={{ width: '20%', flexDirection: "row", justifyContent: "space-between", height: "100%", alignItems: "center" }}>

                        <Image source={require('../../res/images/search.png')} ></Image>
                        <View>
                            <Image source={require('../../res/images/bell.png')} >
                            </Image>
                            <Badge status='error' containerStyle={{ position: 'absolute', top: -10, right: -8 }} value={<Text style={styles.ringtext}>99</Text>}></Badge>

                        </View>

                    </View>)}


                </View>


            </View>
        );
    }
};
const styles = StyleSheet.create({
    ringtext: {
        alignSelf: "center",
        color: "white",
        fontSize: 11,
        fontWeight: "700",
        fontFamily: "IBMPlexSans-Regular",

    }
})

export default MainTitleHeader;