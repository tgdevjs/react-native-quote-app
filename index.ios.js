
import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';

import StartScreen from './src/components/StartScreen';
import QuoteScreen from './src/components/QuoteScreen';

class QuoteApp extends Component {
  render() {
    return (
      <Navigator
          initialRoute={{name: 'StartScreen'}}
          renderScene={(route, navigator) => {
            switch (route.name) {
              case 'StartScreen':
                return <StartScreen onStartHandler={() => navigator.push({name: 'QuoteScreen'})} />
              case 'QuoteScreen':
                return <QuoteScreen />
            }
          }}
        />
    );
  }
}

AppRegistry.registerComponent('QuoteApp', () => QuoteApp);
