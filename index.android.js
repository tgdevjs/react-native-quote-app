
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class QuoteApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.readyText}>I'm ready to relax...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#161737',
  },
  readyText: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#ffffff'
  },
});

AppRegistry.registerComponent('QuoteApp', () => QuoteApp);
