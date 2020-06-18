import {colors} from '../colors/color';

/* eslint-disable prettier/prettier */
const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  headerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logoTextStyle: {
    color: 'white',
    // color: 'rgb(203, 60, 23)',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 18,
  },
  logoTextStyle2: {
    color: 'rgb(217, 63, 22)',
    // color: 'rgb(217, 63, 22)',
    fontWeight: 'normal',
    fontStyle: 'italic',
    fontSize: 15,
    lineHeight: 15,
  },
  logoTextContainer: {
    marginLeft: 10,
  },
  logoImageStyleNormal: {
    width: 45,
    height: 45,
    borderRadius: 10,
  },
  //---------drawer---------
  drawer: {
    flex: 1,
  },
  //header
  drawerHeader: {
    flex: 4,
  },
  headerContent: {},
  avatarContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  avatarImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  nameBox: {
    backgroundColor: '#ffffffd8',
    flex: 1,
    marginRight: 10,
    paddingHorizontal: 5,
    borderRadius: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 15,
  },
  //body
  drawerBody: {
    paddingTop: 20,
    flex: 10,
  },
  listContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 5,
  },
  listTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    paddingLeft: 16,
  },
  listTitleActive: {
    color: colors.tabBarActiveColor,
  },
  //footer
  drawerFooter: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  copyright: {
    flexDirection: 'row',
    marginLeft: 0,
    alignItems: 'center',
    marginBottom: 8,
  },
  textCopyright: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'italic',
  },
  //-------Movie Screen--------
  MovieConatainer: {
    backgroundColor: '#333',
  },
  // slides
  movieSlideContainer: {
    height: 170,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  // Trailers
  movieTrailerContainer: {
    height: 170,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  // Feature Films
  movieFeatureFilmContainer: {
    height: 170,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  // Television Series
  movieTelevisionSeriesContainer: {
    height: 170,
    paddingHorizontal: 8,
    marginBottom: 100, // last item need it
  },
});
