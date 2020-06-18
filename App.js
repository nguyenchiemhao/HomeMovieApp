/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainStackScreen from './src/MainStackScreen';
import DrawerContent from './src/drawer-content/DrawerContent';

const Drawer = createDrawerNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          drawerPosition="left"
          drawerContent={() => <DrawerContent />}>
          <Drawer.Screen name="MainStack" component={MainStackScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
