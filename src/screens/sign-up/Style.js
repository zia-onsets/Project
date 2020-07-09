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
  textHeading: {
    fontWeight: '500',
    fontSize: 18,
    color: 'black',
    backgroundColor: '#FCFAFA',
    padding: 5,
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
    width: '90%',
  },
  titleBtn: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  buttonLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    height: 56,
    borderRadius: 5,
    backgroundColor: THEME_COLORS.primary,
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
