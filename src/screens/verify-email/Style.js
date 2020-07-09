import {StyleSheet} from 'react-native';
import {baseStyles, THEME_COLORS} from '../../res/css/base';

export default StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    ...baseStyles.p2x,
    flex: 1,
    backgroundColor: THEME_COLORS.white,
  },

  buttonView: {
    width: '90%',
  },
  titleBtn: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleBtnLogin: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  gradient: {},
  buttonLogin: {
    ...baseStyles.pV2x,
    ...baseStyles.mT1x,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    borderRadius: 5,
    backgroundColor: THEME_COLORS.white,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  topText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME_COLORS.black,
    margin: 30,
  },
  buttonSignUp: {
    //...baseStyles.pV2x,
    //...baseStyles.mT1x,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: THEME_COLORS.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonAsGeust: {
    ...baseStyles.pV2x,
    ...baseStyles.mT1x,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: THEME_COLORS.black,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  resendEmailText: {
    color: THEME_COLORS.primary,
    fontSize: 14,
    fontWeight: '700',
  },
  emailText: {
    fontSize: 14,
    fontWeight: '700',
    color: THEME_COLORS.black,
  },
  bottomText: {
    fontSize: 14,
    fontWeight: 'normal',
    color: THEME_COLORS.black,
    textAlign: 'center',
  },
});
