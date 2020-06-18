/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, ScrollView, View, Image, TouchableOpacity} from 'react-native';
import {styles} from '../style/styles';
import avatar from '../assets/images/avatar.jpg';
import wallpaper from '../assets/images/wallpaper.jpg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class DrawerContent extends Component {
  render() {
    return (
      <View style={styles.drawer}>
        <View style={styles.drawerHeader}>
          <Image
            source={wallpaper}
            style={{width: '100%', height: '100%', position: 'absolute'}}
          />
          <View style={styles.avatarContainer}>
            <View>
              <Image source={avatar} style={styles.avatarImage} />
            </View>
            <View style={styles.nameBox}>
              <Text style={styles.name}>Howie</Text>
              <Text style={styles.role}>author</Text>
            </View>
          </View>
        </View>
        <View style={styles.drawerBody}>
          <ScrollView>
            <TouchableOpacity>
              <View style={styles.listContainer}>
                <MaterialCommunityIcons
                  name="home-outline"
                  size={28}
                  color="black"
                  style={styles.listTitleActive}
                />
                <Text style={[styles.listTitle, styles.listTitleActive]}>
                  Home
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.listContainer}>
                <MaterialCommunityIcons
                  name="account-box-outline"
                  size={28}
                  color="black"
                />
                <Text style={styles.listTitle}>Profile</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.listContainer}>
                <MaterialCommunityIcons
                  name="help-circle-outline"
                  size={28}
                  color="black"
                />
                <Text style={styles.listTitle}>Help</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.listContainer}>
                <MaterialCommunityIcons
                  name="settings-outline"
                  size={28}
                  color="black"
                />
                <Text style={styles.listTitle}>Settings</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.listContainer}>
                <MaterialCommunityIcons name="login" size={28} color="black" />
                <Text style={styles.listTitle}>Sign in</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.drawerFooter}>
          <View style={styles.copyright}>
            <MaterialCommunityIcons name="copyright" size={20} color="black" />
            <Text style={styles.textCopyright}>No copyright</Text>
          </View>
        </View>
      </View>
    );
  }
}
