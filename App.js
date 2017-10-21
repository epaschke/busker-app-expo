import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import MapScreen from './screens/MapScreen';

import { StackNavigator } from 'react-navigation';

const Navigator = StackNavigator({
    Login: {screen: LoginScreen},
    Map: {screen: MapScreen}
}, {
    initialRouteName: 'Login'
})

export default Navigator;
