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
    backgroundColor: '#000',
  },
  // slides
  movieSlideContainer: {
    height: 200,
    marginBottom: 8,
    overflow: 'hidden',
  },
  slidewrapper: {},
  slideImageItem: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    resizeMode: 'stretch',
  },
  slideTitleBox: {
    position: 'absolute',
    bottom: 0,
    borderWidth: 0,
    right: 0,
    left: 0,
  },
  slideTitleItem: {
    alignSelf: 'flex-start',
    color: 'white',
    fontSize: 16,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  slideDesItem: {
    alignSelf: 'flex-start',
    color: 'white',
    fontSize: 13,
    marginLeft: 20,
  },
  // Trailers
  movieTrailerImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    resizeMode: 'stretch',
  },
  movieTrailerImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: 'hidden',
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'white',
  },
  movieTrailerContainer: {
    height: 100,
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  // movie
  movieImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    resizeMode: 'stretch',
  },
  movieImageContainer: {
    width: 120,
    height: 170,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 8,
  },
  movieTitleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  movieTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  allBtton: {
    color: 'white',
    fontSize: 14,
    marginRight: 16,
  },
  // Feature Films
  movieFeatureFilmContainer: {
    height: 170,
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  // Television Series
  movieTelevisionSeriesContainer: {
    height: 170,
    paddingHorizontal: 8,
    marginBottom: 70, // last item need it
  },
});
