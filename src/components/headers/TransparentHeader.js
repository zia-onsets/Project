import React,{Component} from 'react';
import {Text,TouchableOpacity,View} from 'react-native';
import {Icon} from 'react-native-elements';
import {withNavigation} from 'react-navigation';

class TransparentHeader extends Component {
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
          height: 60,
          backgroundColor: 'transparent',
        }}>
        <View style={{width: '15%'}}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <Icon name="arrow-back" color="#ffffff" />
          </TouchableOpacity>
        </View>
        <View style={{width: '70%'}}>
          <Text
            style={{
              color: '#ffffff',
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            {this.props.title}
          </Text>
        </View>
      </View>
    );
  }
}
export default withNavigation(TransparentHeader);
