import React from 'react';
import HomeScreen from './screens/Home';
import UserScreen from './screens/User';
import UserFormikScreen from './screens/UserFormik';
import CameraScreen from './screens/Camera';
import FormsScreen from './screens/Forms'
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  User: {
    screen: UserScreen,
  },
  UserFormik: {
    screen: UserFormikScreen,
  },
}, {
  initialRouteName: 'Home',
});

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStack
  },
  Camera: {
    screen: CameraScreen,
  },
  Forms: {
    screen: FormsScreen,
  },
}, {
  initialRouteName: 'Home',
});

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;
