/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import {Column as Col, Row} from 'react-native-flexbox-grid';
import ImageBlock from './components/image-block';

import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

class layoutExamples extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.headerText}>React PhotoView</Text>
        <View style={styles.row}>
          <ImageBlock imageText={'Image 1'}/>
          <ImageBlock imageText={'Image 2'}/>
          <ImageBlock imageText={'Image 3'}/>
          <ImageBlock imageText={'Image 4'}/>
        </View>
        <View style={styles.row}>
          <ImageBlock imageText={'Image 5'}/>
          <ImageBlock imageText={'Image 6'}/>
          <ImageBlock imageText={'Image 7'}/>
          <ImageBlock imageText={'Image 8'}/>
        </View>
        <View style={styles.row}>
          <ImageBlock imageText={'Image 9'}/>
          <ImageBlock imageText={'Image 10'}/>
          <ImageBlock imageText={'Image 11'}/>
          <ImageBlock imageText={'Image 12'}/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30
  },
  row :{
    flexDirection: 'row',
    paddingBottom: 20
  },
  column :{
    flexDirection: 'column',
    flex: 1
  },
  headerText:{
    fontSize: 30,
    textAlign: 'center'
  },
  item: {
    // padding: 10,
    borderWidth: 1,
    borderColor: 'black'
  }
});

AppRegistry.registerComponent('layoutExamples', () => layoutExamples);
