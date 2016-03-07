/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import Likes from './likes';

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
  constructor(props){
    super(props);
    this.state = {
      height: 0
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    return nextState.height !== this.state.height;
  }

  _onLayout(res){
    this.setState({height: res.nativeEvent.layout.width});
  }

  render() {
    return (
      <View style={[styles.column, styles.item]}>
        <Image
          onLayout={this._onLayout.bind(this)}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          style={{flex: 1, height: this.state.height, resizeMode: 'contain'}}/>
        <View style={styles.row}>
          <Text style={styles.column}>{this.props.imageText}</Text>
          <Likes likes={this.props.likes} />
        </View>
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
  },
  row: {
    flexDirection: 'row'
  }
});
