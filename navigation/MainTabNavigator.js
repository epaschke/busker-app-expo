import React from 'react';
import { Platform } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import HomeScreen from '../screens/Home';
import MapScreen from '../screens/MapScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Explore: {
      screen: MapScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = 'home';
            break;
          case 'Explore':
            iconName = 'map';
            break;
          default:
            iconName = 'link';
        }
        return (
          <Foundation
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? 'darkgray': 'lightgray'}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
