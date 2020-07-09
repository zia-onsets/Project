import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ChoiceSearchScreen from './../screens/choice-search/ChoiceSearchScreen';
import ForgetPasswordScreen from './../screens/forget-password/ForgetPasswordScreen';
import HomeScreen from './../screens/home/HomeScreen';
import LoginScreen from './../screens/login/LoginScreen';
import SellerTypeScreen from './../screens/seller-type/SellerTypeScreen';
import SignUpScreen from './../screens/sign-up/SignUpScreen';
import VerifyEmailScreen from './../screens/verify-email/VerifyEmailScreen';
import Splash from './../screens/splash/Splash';
import HomeScreen2 from '../screens/home/HomeScreen2';
const RootStack = createStackNavigator(
  {
    HomeScreen2: {
      screen: HomeScreen2,
      navigationOptions: {
        headerShown: false
      }
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    VerifyEmail: {
      screen: VerifyEmailScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    ForgetPassword: {
      screen: ForgetPasswordScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    ChoiceSearch: {
      screen: ChoiceSearchScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    SellerType: {
      screen: SellerTypeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Splash: {
      screen: Splash,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Splash',
  },
);

export default createAppContainer(RootStack);
