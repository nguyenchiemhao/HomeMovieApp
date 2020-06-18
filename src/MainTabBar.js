/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {colors} from './colors/color';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MovieScreen from './screens/MovieScreen';
import {View, Text} from 'react-native';

const Tab = createMaterialBottomTabNavigator();

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

export default class MainTabBar extends Component {
  render() {
    return (
      <>
        <Tab.Navigator
          initialRouteName="MovieScreen"
          activeColor={colors.tabBarActiveColor}
          inactiveColor={colors.tabBarInActiveColor}
          shifting={true}
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color = '#333', size = 25}) => {
              let iconName;

              if (route.name === 'MovieScreen') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'SettingsScreen') {
                iconName = focused ? 'settings' : 'settings-outline';
              }

              // You can return any component that you like here!
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                  style={{position: 'absolute'}}
                />
              );
            },
          })}
          barStyle={{
            position: 'absolute',
            backgroundColor: colors.tabBarColor,
            marginHorizontal: 40,
            paddingHorizontal: 25,
            marginVertical: 10,
            borderRadius: 20,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.8,
            shadowRadius: 1.16,

            elevation: 20,
          }}>
          <Tab.Screen
            name="MovieScreen"
            component={MovieScreen}
            options={{tabBarLabel: 'Home'}}
          />
          <Tab.Screen
            name="SettingsScreen"
            component={SettingsScreen}
            options={{
              tabBarLabel: 'Settings',
            }}
          />
        </Tab.Navigator>
      </>
    );
  }
}
