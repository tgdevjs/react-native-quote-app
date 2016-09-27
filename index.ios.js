
import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';

import StartScreen from './src/components/StartScreen';
import QuoteScreen from './src/components/QuoteScreen';

const { quotes } = require('./src/quotes.json');

class QuoteApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteIndex: 1
    };
    this._incrementQuoteIndex = this._incrementQuoteIndex.bind(this);
  }
  _incrementQuoteIndex() {
    let newIndex
    if (this.state.quoteIndex + 1 === quotes.length) {
      newIndex = 0;
    }else {
      newIndex = this.state.quoteIndex +1;
    }
    this.setState({quoteIndex: newIndex});
  }
  render() {
    const quote = quotes[this.state.quoteIndex];
    return (
      <Navigator
          initialRoute={{name: 'StartScreen'}}
          renderScene={(route, navigator) => {
            switch (route.name) {
              case 'StartScreen':
                return <StartScreen onStartHandler={() => navigator.push({name: 'QuoteScreen'})} />
              case 'QuoteScreen':
                return <QuoteScreen text={quote.text} source={quote.source} onNextQuotePress={this._incrementQuoteIndex} />
            }
          }}
        />
    );
  }
}


AppRegistry.registerComponent('QuoteApp', () => QuoteApp);
