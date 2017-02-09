import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import { apiKey, authDomain, databaseURL, storageBucket, messagingSenderId } from './credentials';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey,
    authDomain,
    databaseURL,
    storageBucket,
    messagingSenderId
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>Test</Text>
      </View>
    );
  }
}

export default App;
