/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from '../style/styles';

export default class MovieScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.MovieConatainer}>
        <View style={styles.movieSlideContainer}>
          <Text>Slides</Text>
        </View>
        <View style={styles.movieTrailerContainer}>
          <Text>Trailers</Text>
        </View>
        <View style={styles.movieFeatureFilmContainer}>
          <Text>Feature Films</Text>
        </View>
        <View style={styles.movieTelevisionSeriesContainer}>
          <Text>Television Series</Text>
        </View>
      </ScrollView>
    );
  }
}
