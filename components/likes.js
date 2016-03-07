/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import {Column as Col, Row} from 'react-native-flexbox-grid';

import React, {
  AppRegistry,
  Component,
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Dimensions
} from 'react-native';
var {width, height} = Dimensions.get('window');

export default class ImageBlock extends Component {
  render() {
    if(width < 768){
      return (
        <Text>{this.props.likes} likes</Text>
      );
    } else {
      return null;
    }

  }
}

const styles = StyleSheet.create({
  column :{
    flexDirection: 'column',
    flex: 1
  },
  item: {
    padding: 5
  }
});
