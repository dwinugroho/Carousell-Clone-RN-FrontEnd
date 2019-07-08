

import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  StatusBar
} from 'react-native';

// Components

import Header from './src/components/header'



import AppStack from './src/screen/RootNavigator'
export default class App extends Component {
  render() {
    return (

      <React.Fragment>
          <StatusBar backgroundColor="#9e2626" barStyle="light-content" />
          <Header />
          <AppStack/>
      </React.Fragment>    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
