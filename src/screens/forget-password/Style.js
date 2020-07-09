import {StyleSheet} from 'react-native';
import {baseStyles, THEME_COLORS} from '../../res/css/base';

export default StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    ...baseStyles.p2x,
    backgroundColor: THEME_COLORS.white,
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
    width: '98%',
    marginTop: '8%',
    marginLeft: '1%',
  },
  topText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: THEME_COLORS.black,
    margin: 10,
    textAlign: 'left',
  },
  textParagraph: {
    color: THEME_COLORS.black,
    fontSize: 15,
    fontWeight: 'normal',
    textAlign: 'left',
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
    width: '92%',
    marginLeft: '4%',
    marginTop: '8%',
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
    //backgroundColor: THEME_COLORS.primary,
  },
  emailText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: THEME_COLORS.primary,
    textAlign: 'center',
  },
});
