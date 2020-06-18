/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import MainTabBar from './MainTabBar';
import LoginScreen from './screens/LoginScreen';
import {Text, View, Image} from 'react-native';
import logo from '../src/assets/images/logo.png';
import {colors} from './colors/color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './style/styles';

const Stack = createStackNavigator();

export default class MainStackScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <Stack.Navigator headerMode="float">
        <Stack.Screen
          name="MainTabBar"
          component={MainTabBar}
          options={{
            title: 'Home Movie',
            headerStyle: {
              backgroundColor: colors.headerColor,
            },
            headerTitle: () => (
              <View style={styles.headerStyle}>
                <Image source={logo} style={styles.logoImageStyleNormal} />
                <View style={styles.logoTextContainer}>
                  <Text style={styles.logoTextStyle}>Home</Text>
                  <Text style={styles.logoTextStyle2}>Movie</Text>
                </View>
              </View>
            ),
            headerRight: () => <></>,
            headerLeft: () => (
              <View style={{}}>
                <HeaderBackButton
                  backImage={() => (
                    <MaterialCommunityIcons
                      name="format-list-bulleted"
                      size={25}
                      color="white"
                    />
                  )}
                  onPress={() => navigation.toggleDrawer()}
                />
                {/* <MaterialCommunityIcons
                  name="format-list-bulleted"
                  size={25}
                  color="white"
                  style={{paddingLeft: 15}}
                /> */}
              </View>
            ),
          }}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    );
  }
}
