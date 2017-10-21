import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import LoginScreen from './screens/LoginScreen';
import Home from './screens/Home';
import { StackNavigator } from 'react-navigation';

const Navigator = StackNavigator({
    // Login: {screen: LoginScreen},
    Home: {screen: Home}
})

export default Navigator;
