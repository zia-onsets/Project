import {StyleSheet} from 'react-native';
import {baseStyles, THEME_COLORS} from '../../res/css/base';

export default StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    ...baseStyles.p2x,
    flex: 1,
  },
  logoText: {
    flex: 1,
  },
  logoImage: {
    flex: 5,
  },

  buttonView: {
    width: '90%',
    flex: 3,
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonSignUp: {
    //...baseStyles.pV2x,
    //...baseStyles.mT1x,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    height: 56,
    //backgroundColor: THEME_COLORS.primary,
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
  disableBtn: {
    ...baseStyles.pV2x,
    ...baseStyles.mT1x,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: THEME_COLORS.primary,
    opacity: 0.7,
  },
  socialBtnView: {
    flexDirection: 'row',
  },
});
