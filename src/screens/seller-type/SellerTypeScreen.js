import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import RadioButton from './../../components/buttons/RadioButton';
import TransparentHeader from './../../components/headers/TransparentHeader';
import styles from './Style';

const PROP = [
  {
    key: 'Private',
    text: 'Private',
  },
  {
    key: 'Dealer',
    text: 'Dealer',
  },
];
class SellerTypeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <LinearGradient
        colors={['#5344AD', '#3376F5']}
        style={styles.mainContainer}>
        <TransparentHeader title=" " />
        <View>
          <Text style={styles.mainHeading}>A better way to sell your car</Text>
          <Text style={styles.secondText}>
            Financing available for your buyers with Extra protections offered
            on your vehicles
          </Text>
        </View>
        <View style={{marginLeft: '10%', padding: 10}}>
          <Text style={styles.sellerTypeText}>Seller Type</Text>
        </View>
        <View style={{flexDirection: 'row', padding: 10}}>
          <RadioButton PROP={PROP} />
        </View>
        <View style={styles.buttonView}>
          {/* <GradientButton
            radius={10}
            style={styles.buttonLogin}
            textStyle={styles.titleBtn}
            text="GET STARTED"
            loadingProps={{size: 20}}
            onPressAction={() => {
              this.authenticate();
            }}
            gradientBegin="#FF4F29"
            gradientEnd="#F19058"
          /> */}
        </View>

        <View style={styles.logoImage}>
          <Image
            source={require('./../../res/images/sell-car.png')}
            style={{
              height: 250,
              left: 0,
              right: 0,
              resizeMode: 'contain',
            }}
          />
        </View>
      </LinearGradient>
    );
  }
}

export default SellerTypeScreen;
