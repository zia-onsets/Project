import React,{Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {THEME_COLORS} from './../../res/css/base';

export default class RadioButton extends Component {
  state = {
    value: null,
  };

  render() {
    const {PROP} = this.props;
    const {value} = this.state;

    return (
      <View>
        {PROP.map(res => {
          return (
            <View key={res.key} style={styles.container}>
              <ScrollView horizontal={true}>
                <TouchableOpacity
                  style={styles.radioCircle}
                  onPress={() => {
                    this.setState({
                      value: res.key,
                    });
                  }}>
                  {value === res.key && <View style={styles.selectedRb} />}
                </TouchableOpacity>
                <Text style={styles.radioText}>{res.text}</Text>
              </ScrollView>
            </View>
          );
        })}
        {/* <Text> Selected: {this.state.value} </Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioText: {
    fontSize: 16,
    color: THEME_COLORS.white,
    fontWeight: 'bold',
    marginLeft:5
  },
  radioCircle: {
    height: 22,
    width: 22,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: THEME_COLORS.primary,
    backgroundColor:THEME_COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 12,
    height: 12,
    borderRadius: 50,
    borderWidth: 6,
    borderColor: THEME_COLORS.primary,
  },
});
