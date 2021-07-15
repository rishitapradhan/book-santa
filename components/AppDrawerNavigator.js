import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import MyDonationScreen from '../screens/MyDonationScreen';
import SettingsScreen from '../screens/SettingsScreen';
import NotificationScreen from '../screens/NotificationScreen';
import MyRecievedBooks from '../screens/MyRecievedBooks';
import {Icon} from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: AppTabNavigator,
    navigationOptions:{
      drawerIcon: <Icon name="home" type ="fontawesome5" />,
      drawerLabel: 'Home'
    }
  },
  MyDonations: {
    screen: MyDonationScreen,
    navigationOptions:{
      drawerIcon: <Icon name="gift" type ="font-awesome" />,
      drawerLabel: 'My Donations'
    }
  },
  Notifications: {
    screen: NotificationScreen,
    navigationOptions:{
      drawerIcon: <Icon name="bell" type ="font-awesome" />,
      drawerLabel: 'Notifications'
    }
  },
  MyRecievedBooks: {
    screen: MyRecievedBooks,
    navigationOptions:{
      drawerIcon: <Icon name="gift" type ="font-awesome" />,
      drawerLabel: 'My Received Books'
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions:{
      drawerIcon: <Icon name="settings" type ="fontawesome5" />,
      drawerLabel: 'Settings'
    }
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
})