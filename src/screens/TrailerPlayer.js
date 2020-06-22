/* eslint-disable handle-callback-err */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import axios from 'axios';
import Orientation from 'react-native-orientation';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').width * (9 / 16);

export default class TrailerPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: '',
      orientation: '',
      specificOrientation: '',
    };
  }

  /**
   * source={{
            uri:
              'https://cloud-1.keochuan.com/video.mp4?hash=e96aacc1ab848675ae19067f0c64602c482317a33104f0104d56b95a988cccd5bb5d3ba30e5cb4049d751499b9fbc758b221ac104174973890b006b5bae07383a1d5be567b73ff551399b39a83d9fa76e59c648cf66e4f3a760e9d4b5a4f2d405f94a56cfd9e8f427834943588d6fd6c7bbcd52c822d3f528431a250063470d4ee230d3a2395d6b98977b88fa52783185e73bff2e091227257dfcf351f4623eea34e394b7628451d900b62b2c45c09c651db72912f2694d29b3e58d1c79b0f2de7092478b90c5c592c0a1867a7df05a789887870e5db7fa4642add9f00b3ba91d20d2391fd6a7e96f39cbcc50fb5e2074fe84cf740f9bd6a1498983fc795c71161d02ad656fe92f56ec237b8d8c423d3b7cf196d817d16568eba094441044d854786e49afaef78cb0aec6507c112561fa16d4d47bd06500d4c370be612bd5ebb61f2d2d334daafa21297260a47b3fcdc9b979a53f8abdcf9ccbb298ced8f8a9cfd38b89d5f8122a76153ca4830183ce300463019fd69402fdcaae7838cc5fea69a3136e59090679ec587ab485b974b3ac7314bf027e0649d1c706ca5572a6c1ff7571cc9785493fb6e3954f1a9aab2fe394088fc4a46a0239c1256f9314c0993c7a25820ca4fcc3f17b9b1dd00ccc8daff0915a3df7721e7e5329cb6a7e4f33c82828f97fde04a049009cf4341c0c368d1df5dac388eea63e9d0557c6f0c3c8a7cd4b4af7c140001a0072a35fc1a705f0e48b066eb35b4b3f2d173f24d559588a50672587257b5290f8a1bb6fe19528e09719f3750175af19a2913d0ebdc85c83c57c79995afb5ad90b5aeb745589a3dab2c87a233f39f0ea58708f1e2c8837c21220c26486c2a0fc9b20b9f6333e5ab52dc206edab1f7e498094bd8af27616f55f77e5bbc80da76d2f0687adc3288b73d1d003be6c7ac73a22e86ff01e09409771166d264ceb3c750d12b8a4e793df0aa8c2a5282a9603c19e7ebf11aff7c65a075594696428bdbe49680e175d3d3f9ef4f7bb3b08619e03fc871bbed36c0d953cb54218152e605935d1221cd97e2f21bd1903e50579f92b3b32332e66190f4b164dc9a73681a08543a33f9eb50dac9597953aa9e05b55016a20b050a0fd124697ff5&cookie=XQRuhhBrFbE',
            headers: {
              Range: 'bytes=0-',
              Referer:
                'https://yeuphimmoi.tv/xem-phim/thanh-thi-diep-nhan/tap-1-sv-1/',
            },
          }}
   */
  componentWillMount() {
    const init = Orientation.getInitialOrientation();
    this.setState({
      init,
      orientation: init,
      specificOrientation: init,
    });
  }
  componentDidMount() {
    Orientation.addOrientationListener(this._updateOrientation);
    Orientation.addSpecificOrientationListener(this._updateSpecificOrientation);
  }

  _getOrientation() {
    Orientation.getOrientation((err, orientation) => {
      console.log(`Orientation is ${orientation}`);
    });
  }

  _getSpecificOrientation() {
    Orientation.getSpecificOrientation((err, orientation) => {
      console.log(`Specific orientation is ${orientation}`);
    });
  }

  _updateOrientation = (orientation) => this.setState({orientation});
  _updateSpecificOrientation = (specificOrientation) =>
    this.setState(
      {specificOrientation},
      console.log(this.state.specificOrientation),
    );

  render() {
    return (
      <View style={{flex: 1}}>
        <VideoPlayer
          source={{
            uri: 'https://media.yomedia.vn/2020/05/maxkleen-summer/15s/tvc.mp4',
          }}
          paused={true}
          navigator={this.props.navigator}
          onBuffer={this.onBuffer} // Callback when remote video is buffering
          onError={this.videoError} // Callback when video cannot be loaded
          style={{
            width,
            height,
            backgroundColor: 'green',
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          tapAnywhereToPause={true}
          onEnterFullscreen={() => {
            Orientation.lockToLandscapeLeft();
            this._getSpecificOrientation();
          }}
          onExitFullscreen={() => {
            Orientation.lockToPortrait();
            this._getOrientation();
          }}
          //   style={{
          //     width,
          //     height,
          //     backgroundColor: '#000',
          //   }}
          //   fullscreenAutorotate={true}
          //   controls={true}
          //   resizeMode="cover"
        />
        {/* <Video
          source={{
            uri: 'https://media.yomedia.vn/2020/05/maxkleen-summer/15s/tvc.mp4',
          }} // Can be a URL or a local file.
          ref={(ref) => {
            this.player = ref;
          }} // Store reference
          onBuffer={this.onBuffer} // Callback when remote video is buffering
          onError={this.videoError} // Callback when video cannot be loaded
          style={{
            width,
            height,
            backgroundColor: '#000',
          }}
          fullscreenAutorotate={true}
          controls={true}
          resizeMode="cover"
        /> */}
      </View>
    );
  }
}
