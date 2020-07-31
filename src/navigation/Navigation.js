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
import AboutUs from '../Settings/AboutUs';
import HomeScreen2 from '../screens/home/HomeScreen2';
import Stting from '../Settings/Stting';
import Help from '../Settings/Help';
import Termconditions from '../Settings/Termconditions';
import LeaseScreen from '../screens/SellCar/Screens/Lease/LeaseScreen';
import SellerCarS2 from '../screens/SellCar/Screens/SellerCar2/SellerCarS2';
import SellerCarS4 from '../screens/SellCar/Screens/SellerCarS4';

import SellerCarS3 from '../screens/SellCar/Screens/SellerCar3/SellerCarS3';

import SellerCarS5 from '../screens/SellCar/Screens/SellerCarS5';
import SellerCarS6 from '../screens/SellCar/Screens/SellerCarS6';
import SellerCarS7 from '../screens/SellCar/Screens/SellerCarS7';
import SellerCarS8 from '../screens/SellCar/Screens/SellerCarS8';
import SellerCarS9 from '../screens/SellCar/Screens/SellerCarS9';
import FeatureScreen from '../screens/SellCar/Screens/Features/FeatureScreen';
import SpecificationScreen from '../screens/SellCar/Screens/Specification/SpecificationScreen';
import ConditionH from '../screens/SellCar/Screens/CandH/ConditionH';
import PersonalScreen from '../screens/SellCar/Screens/PersonalDetails/PersonalScreen';
import PhotosScreen from '../screens/SellCar/Screens/Photos/PhotosScreen';
import EPScreen from '../screens/SellCar/Screens/ExtraProtection.js/EPScreen';
import Greetings from '../screens/SellCar/LastScreen.js/Greetings';
const RootStack = createStackNavigator(

  {
    Greetings: {
      screen: Greetings,
      navigationOptions: {
        headerShown: false
      }
    },
    EPScreen: {
      screen: EPScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    ConditionH: {
      screen: ConditionH,
      navigationOptions: {
        headerShown: false
      }
    },
    FeatureScreen: {
      screen: FeatureScreen,
      navigationOptions: {
        headerShown: false,
      }
    },


    PhotoScreen: {
      screen: PhotosScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    PersonalScreen: {
      screen: PersonalScreen,
      navigationOptions: {
        headerShown: false
      }
    },



    SpecificationScreen: {
      screen: SpecificationScreen,
      navigationOptions: {
        headerShown: false
      }
    },

    LeaseScreen: {
      screen: LeaseScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    SellerCarS2: {
      screen: SellerCarS2,
      navigationOptions: {
        headerShown: false
      }

    },
    SellerCarS3: {
      screen: SellerCarS3,
      navigationOptions: {
        headerShown: false
      }

    },
    SellerCarS4: {
      screen: SellerCarS4,
      navigationOptions: {
        headerShown: false
      }

    },

    SellerCarS5: {
      screen: SellerCarS5,
      navigationOptions: {
        headerShown: false
      }

    }, SellerCarS6: {
      screen: SellerCarS6,
      navigationOptions: {
        headerShown: false
      }

    }, SellerCarS7: {
      screen: SellerCarS7,
      navigationOptions: {
        headerShown: false
      }

    }, SellerCarS8: {
      screen: SellerCarS8,
      navigationOptions: {
        headerShown: false
      }

    }, SellerCarS9: {
      screen: SellerCarS9,
      navigationOptions: {
        headerShown: false
      }

    },
    Stting: {
      screen: Stting,
      navigationOptions: {
        headerShown: false
      }
    },
    Help: {
      screen: Help,
      navigationOptions: {
        headerShown: false
      }
    },
    Terms: {
      screen: Termconditions,
      navigationOptions: {
        headerShown: false
      }
    },
    Aboutus: {
      screen: AboutUs,
      navigationOptions: {
        headerShown: false
      }
    },


  }
);

export default createAppContainer(RootStack);
