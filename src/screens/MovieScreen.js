/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {styles} from '../style/styles';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../colors/color';

import poster1 from '../assets/images/poster1.jpg';
import poster2 from '../assets/images/poster2.jpg';
import poster3 from '../assets/images/poster3.jpg';
import poster4 from '../assets/images/poster4.jpg';
import poster5 from '../assets/images/poster5.jpg';

import poster1_main from '../assets/images/poster1_main.jpg';
import poster2_main from '../assets/images/poster2_main.jpg';
import poster3_main from '../assets/images/poster3_main.jpg';
import poster4_main from '../assets/images/poster4_main.jpg';
import poster5_main from '../assets/images/poster5_main.jpg';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class MovieScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <ScrollView style={styles.MovieConatainer}>
        <View style={styles.movieSlideContainer}>
          <Swiper
            style={styles.slidewrapper}
            showsButtons={false}
            dot={
              <View
                style={{
                  backgroundColor: 'rgba(255,255,255,.7)',
                  width: 6,
                  height: 6,
                  borderRadius: 4,
                  marginLeft: 3,
                  marginRight: 3,
                  marginTop: 3,
                  marginBottom: 3,
                }}
              />
            }
            activeDot={
              <View
                style={{
                  backgroundColor: colors.tabBarActiveColor,
                  width: 9,
                  height: 9,
                  borderRadius: 8,
                  marginLeft: 3,
                  marginRight: 3,
                  marginTop: 3,
                  marginBottom: 3,
                }}
              />
            }
            loop={true}
            autoplay={true}
            autoplayTimeout={2.0}
            paginationStyle={{
              top: -140,
              left: null,
              right: 20,
            }}>
            <View style={styles.slide1}>
              <Image source={poster1} style={styles.slideImageItem} />
              <LinearGradient
                colors={['#3330', '#3339', '#333a', '#333f']}
                style={styles.slideTitleBox}>
                <Text style={styles.slideTitleItem}>End game</Text>
                <Text style={styles.slideDesItem}>End game</Text>
              </LinearGradient>
            </View>
            <View style={styles.slide1}>
              <Image source={poster2} style={styles.slideImageItem} />
            </View>
            <View style={styles.slide1}>
              <Image source={poster3} style={styles.slideImageItem} />
            </View>
            <View style={styles.slide1}>
              <Image source={poster4} style={styles.slideImageItem} />
            </View>
            <View style={styles.slide1}>
              <Image source={poster5} style={styles.slideImageItem} />
            </View>
          </Swiper>
        </View>
        <View>
          <View style={styles.movieTitleBox}>
            <Text style={styles.movieTitle}>Trailers</Text>
            <TouchableOpacity>
              <Text style={styles.allBtton}>View all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={styles.movieTrailerContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('TrailerPlayer')}>
              <View style={styles.movieTrailerImageContainer}>
                <Image source={poster1_main} style={styles.movieTrailerImage} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.movieTrailerImageContainer}>
                <Image source={poster2_main} style={styles.movieTrailerImage} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.movieTrailerImageContainer}>
                <Image source={poster3_main} style={styles.movieTrailerImage} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.movieTrailerImageContainer}>
                <Image source={poster4_main} style={styles.movieTrailerImage} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.movieTrailerImageContainer}>
                <Image source={poster4_main} style={styles.movieTrailerImage} />
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View>
          <View style={styles.movieTitleBox}>
            <Text style={styles.movieTitle}>Feature Films</Text>
            <TouchableOpacity>
              <Text style={styles.allBtton}>View all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            style={styles.movieFeatureFilmContainer}
            showsHorizontalScrollIndicator={false}
            horizontal={true}>
            <View style={styles.movieImageContainer}>
              <Image source={poster3_main} style={styles.movieImage} />
            </View>
            <View style={styles.movieImageContainer}>
              <Image source={poster2_main} style={styles.movieImage} />
            </View>
            <View style={styles.movieImageContainer}>
              <Image source={poster4_main} style={styles.movieImage} />
            </View>
            <View style={styles.movieImageContainer}>
              <Image source={poster1_main} style={styles.movieImage} />
            </View>
            <View style={styles.movieImageContainer}>
              <Image source={poster5_main} style={styles.movieImage} />
            </View>
          </ScrollView>
        </View>
        <View>
          <View style={styles.movieTitleBox}>
            <Text style={styles.movieTitle}>Television Films</Text>
            <TouchableOpacity>
              <Text style={styles.allBtton}>View all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            style={styles.movieTelevisionSeriesContainer}
            showsHorizontalScrollIndicator={false}
            horizontal={true}>
            <View style={styles.movieImageContainer}>
              <Image source={poster5_main} style={styles.movieImage} />
            </View>
            <View style={styles.movieImageContainer}>
              <Image source={poster2_main} style={styles.movieImage} />
            </View>
            <View style={styles.movieImageContainer}>
              <Image source={poster1_main} style={styles.movieImage} />
            </View>
            <View style={styles.movieImageContainer}>
              <Image source={poster3_main} style={styles.movieImage} />
            </View>
            <View style={styles.movieImageContainer}>
              <Image source={poster4_main} style={styles.movieImage} />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}
