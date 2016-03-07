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
  View,
  Dimensions
} from 'react-native';

class layoutExamples extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.headerText}>React PhotoView</Text>
        <Col>
          <Row size={12} wrap>
            <Col sm={12} md={3}>
              <ImageBlock imageText={'Image 1'} likes={1}/>
            </Col>
            <Col sm={12} md={3}>
              <ImageBlock imageText={'Image 2'} likes={1}/>
            </Col>
            <Col sm={12} md={3}>
              <ImageBlock imageText={'Image 3'} likes={1}/>
            </Col>
            <Col sm={12} md={3}>
              <ImageBlock imageText={'Image 4'} likes={1}/>
            </Col>
          </Row>
        </Col>
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
  headerText:{
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center'
  },
});

AppRegistry.registerComponent('layoutExamples', () => layoutExamples);
