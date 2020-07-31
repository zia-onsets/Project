import React,{Component} from 'react';
import {StyleSheet,SafeAreaView,Text,View} from 'react-native';
import MainHeader from './../../components/headers/MainHeader';
export default class ComingSoonScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <MainHeader title="Coming Soon" />
        <View style={styles.container}>
          <Text style={styles.text}>
            Pending Functionality! Coming up soon....
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 300,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
    
  },
});
