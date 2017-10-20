import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import { StackNavigator } from 'react-navigation';

const Navigator = StackNavigator({
    Login: {screen: LoginScreen}
})

export default Navigator;
