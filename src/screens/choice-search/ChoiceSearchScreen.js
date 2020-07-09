import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import DividerLine from './../../components/divider/DividerLine';
import styles from './Style';

export default class ChoiceSearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View>
          <Text style={styles.topText}>What’s on your mind?</Text>
        </View>
        <View style={styles.logoImage}>
          <Image
            source={require('./../../res/images/sell-car.png')}
            style={{
              height: 200,
              left: 0,
              right: 0,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View style={styles.buttonView}>
          {/* <GradientButton
            style={styles.buttonSignUp}
            textStyle={styles.titleBtn}
            text="Search for a Vehicle"
            loadingProps={{size: 20}}
            radius={10}
            onPressAction={() => this.props.navigation.navigate('SellerType')}
            gradientBegin="#FF4F29"
            gradientEnd="#F19058"
          /> */}
          <View style={{margin: 20}}>
            <DividerLine dividerText="Or" />
          </View>
          <Button
            buttonStyle={styles.buttonLogin}
            titleStyle={styles.titleBtnLogin}
            title="Sell Your Vehicle"
            loadingProps={{size: 20}}
            onPress={() => this.props.navigation.navigate('SellerType')}
          />
        </View>
        <View style={{padding: 10}}>
          <Text style={styles.bottomText}>
            “Don’t worry, you can do both{'\n'} once you’re signed up!”
          </Text>
        </View>
      </View>
    );
  }
}
