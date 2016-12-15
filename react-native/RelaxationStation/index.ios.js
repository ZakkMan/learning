import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Navigator
} from 'react-native';
import StartScreen from './StartScreen'
import QuoteScreen from './QuoteScreen'

export default class RelaxationStation extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'StartScreen' }}
        renderScene={( route, navigator ) => {
          switch ( route.name ) {
            case 'StartScreen':
              return <StartScreen onStartHandler={() => navigator.push({name: 'QuoteScreen'})}/>
            case 'QuoteScreen':
              return <QuoteScreen />
          }
        }}
      />
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

AppRegistry.registerComponent('RelaxationStation', () => RelaxationStation);
