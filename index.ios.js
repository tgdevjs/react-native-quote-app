
import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';

import StartScreen from './src/components/StartScreen';
import QuoteScreen from './src/components/QuoteScreen';

const { quotes } = require('./src/quotes.json');

class QuoteApp extends Component {
  render() {
    const quote = quotes[2];
    return (
      <Navigator
          initialRoute={{name: 'StartScreen'}}
          renderScene={(route, navigator) => {
            switch (route.name) {
              case 'StartScreen':
                return <StartScreen onStartHandler={() => navigator.push({name: 'QuoteScreen'})} />
              case 'QuoteScreen':
                return <QuoteScreen text={quote.text} source={quote.source} />
            }
          }}
        />
    );
  }
}


AppRegistry.registerComponent('QuoteApp', () => QuoteApp);
