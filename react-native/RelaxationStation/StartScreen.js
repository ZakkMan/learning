import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Quote from './Quote'

const zenImage = require('./assets/zen.png')

export default class StartScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={ this.props.onStartHandler }>
          <Image source={zenImage} style={styles.buttonImage}></Image>
        </TouchableOpacity>
        <Text style={styles.readyText}>
          I'm ready to relax ...
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  readyText: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#000'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  },
  buttonImage: {
    width: 200,
    height: 200
  }
});
