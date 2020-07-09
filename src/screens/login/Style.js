import {StyleSheet} from 'react-native';
import {baseStyles, THEME_COLORS} from '../../res/css/base';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: THEME_COLORS.white,
    flex: 1,
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    ...baseStyles.p2x,
    backgroundColor: THEME_COLORS.white,
    flex: 1,
  },
  //---3--- Input and forgot------//
  inputContainer: {
    width: '94%',
    marginTop: '4%',
  },

  forgotText: {
    color: THEME_COLORS.black,
    fontSize: 15,
    fontWeight: '700',
    alignItems: 'flex-end',
    ...baseStyles.mB1x,
  },

  buttonView: {
    width: '90%',
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
  socialBtn: {
    borderRadius: 10,
    margin: 5,
    padding: 30,
    fontWeight: 'bold',
  },
});
