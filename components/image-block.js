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
  View
} from 'react-native';

export default class ImageBlock extends Component {

  render() {
    return (
      <View style={[styles.column, styles.item]}>
        <Image
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          style={{flex: 1, height: 365}}/>
        <Text>{this.props.imageText}</Text>
      </View>
    );
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
