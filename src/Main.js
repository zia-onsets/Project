import React, { Component } from 'react';
import Navigation from './navigation/Navigation';
import HomeScreen2 from './screens/home/HomeScreen2';
import SelectCar from './screens/SelectCar';
import MainHeader from './components/headers/MainHeader';
import HomeScreen from './screens/home/HomeScreen';
//import HomeScreen from './../src/screens/home/HomeScreen';
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <HomeScreen2></HomeScreen2>;
  }
}
