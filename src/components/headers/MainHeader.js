import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { THEME_COLORS } from '../../res/css/base';
class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: '10%',
          backgroundColor: THEME_COLORS.headerColor,

          justifyContent: "space-evenly"
        }}>
        <View style={{ width: '15%', alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <Icon name="arrow-back" color="#ffffff" />
          </TouchableOpacity>
        </View>
        <View style={{ width: '60%', }}>
          <Text
            style={{
              color: '#ffffff',
              textAlign: 'center',
              fontSize: 18,
              fontFamily: "IBMPlexSans-Bold",
              fontWeight: 'bold',
            }}>
            {this.props.title}
          </Text>
        </View>
        {this.props.rTitle && (<View style={{ width: '20%', height: "100%", justifyContent: "center", alignItems: "flex-start" }}>

          <Text style={{ color: 'white', fontFamily: "IBMPlexSans-Medium", fontSize: 12, fontWeight: '500' }}>{this.props.ricontitle}</Text>

        </View>)}
      </View>
    );
  }
}
export default MainHeader;