import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Quote from './Quote'

export default class QuoteScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Quote quoteText="First Quote Text" quoteSource="- source" />
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
