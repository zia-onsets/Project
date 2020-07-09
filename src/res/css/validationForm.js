import {Platform} from 'react-native';
import {form} from 'tcomb-form-native';
import {THEME_TEXT_COLORS} from './base';

const Form = form.Form;

const validationForm = {
  ...Form.stylesheet,
  controlLabel: {
    normal: {
      fontSize: 0,
    },
    error: {
      fontSize: 0,
    },
  },
  textbox: {
    normal: {
      color: '#000000',
      fontSize: 14,
      height: 60,
      paddingLeft: 20,
      paddingVertical: Platform.OS === 'ios' ? 7 : 0,
      borderColor: '#E5E5E5',
      borderWidth: 1,
      borderRadius: 50,
      backgroundColor:'#FBFBFB',
      fontWeight: 'bold',
      marginBottom: 5,
      padding: 5,
    },
    error: {
      color: '#000000',
      fontSize: 14,
      height: 60,
      paddingLeft: 20,
      backgroundColor:'#FBFBFB',
      paddingVertical: Platform.OS === 'ios' ? 7 : 0,
      borderColor: 'red',
      borderWidth: 1,
      borderRadius: 50,
      fontWeight: 'bold',
      marginBottom: 5,
      padding: 5,
    },
  },
  errorBlock: {
    fontSize: 14,
    padding: '0.2%',
    color: THEME_TEXT_COLORS.errorBG,
    //backgroundColor: THEME_TEXT_COLORS.errorBG,
  },
};

const validationChangePassword = {
  ...Form.stylesheet,
  controlLabel: {
    normal: {
      fontSize: 0,
    },
    error: {
      fontSize: 0,
    },
  },
  textbox: {
    normal: {
      color: '#000',
      fontSize: 16,
      height: 36,
      paddingVertical: Platform.OS === 'ios' ? 7 : 0,
      paddingHorizontal: 7,
      borderColor: THEME_TEXT_COLORS.placeHolder,
      borderBottomWidth: 1,
      backgroundColor:'#000000',
      marginBottom: 5,
    },
    error: {
      color: '#000',
      fontSize: 16,
      height: 20,
      paddingVertical: Platform.OS === 'ios' ? 7 : 0,
      paddingHorizontal: 7,
      backgroundColor:'#FBFBFB',
      borderColor: THEME_TEXT_COLORS.placeHolder,
      borderBottomWidth: 1,
      marginBottom: 1,
    },
  },
  errorBlock: {
    fontSize: 14,
    padding: '0.2%',
    color: THEME_TEXT_COLORS.errorText,
    backgroundColor: THEME_TEXT_COLORS.errorBG,
  },
};

export {Form,validationForm,validationChangePassword};

