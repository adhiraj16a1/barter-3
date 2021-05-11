import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DonateScreen from '../screens/DonateScreen';
import RequestScreen from '../screens/RequestScreen';

export const AppTabNavigator = createBottomTabNavigator({
  Donate : {
    screen: DonateScreen,
    navigationOptions :{
      tabBarLabel : "Donate Items",
    }
  },
  Request: {
    screen: RequestScreen,
    navigationOptions :{
      tabBarLabel : "Request an Item",
    }
  }
});
