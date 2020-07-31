import React, { Component } from 'react';
import Navigation from './navigation/Navigation';
import HomeScreen from './screens/home/HomeScreen';

import Termconditions from './Settings/Termconditions';
import { Settings } from 'react-native';
import Stting from './Settings/Stting';
import AboutUs from './Settings/AboutUs';
import FeatureScreen from './screens/SellCar/Screens/Features/FeatureScreen';

//import HomeScreen from './../src/screens/home/HomeScreen';
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Navigation></Navigation>
  }
}
