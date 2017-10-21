import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import ArtistProfile from '../screens/ArtistProfile';
import PaymentScreen from '../screens/PaymentScreen';

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
    },
    Profile1: {
        screen: ArtistProfile,
    },
    PaymentScreen: {
        screen: PaymentScreen,
    },
  },
  {
    navigationOptions: () => ({
      tabBarVisible: true,
    }),
  }
);

export default class RootNavigator extends React.Component {
  render() {
    return <RootStackNavigator />;
  }
};
