import {StyleSheet} from 'react-native';
import {baseStyles, THEME_COLORS} from '../../res/css/base';

export default StyleSheet.create({
  mainContainer: {
    ///  justifyContent: 'center',
    // alignItems: 'center',
  },
  mainHeading: {
    fontWeight: 'bold',
    fontSize: 20,
    color: THEME_COLORS.white,
    padding: 5,
    textAlign: 'center',
  },
  secondText: {
    fontWeight: 'normal',
    fontSize: 20,
    color: THEME_COLORS.white,
    textAlign: 'center',
    padding: 30,
  },
  sellerTypeText: {
    fontSize: 14,
    color: THEME_COLORS.white,
    fontWeight: '100',
    marginLeft: '5%',
  },
  //---3--- Input and forgot------//

  containerStyle: {
    backgroundColor: THEME_COLORS.primary,
    ...baseStyles.pV3x,
    height: '7%',
    shadowColor: 'transparent',
    borderBottomColor: THEME_COLORS.primary,
  },
  backButton: {
    backgroundColor: 'transparent',
    marginTop: -6,
  },
  //---4--- Button----//
  buttonView: {
    width: '94%',
    marginLeft: '3%',
    //alignItems: 'center',
  },
  titleBtn: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  buttonLogin: {
    //...baseStyles.pV2x,
    //...baseStyles.mT1x,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
    //backgroundColor: THEME_COLORS.primary,
  },
});
