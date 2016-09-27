import React, {Component, PropTypes} from 'react';
import {View, Image, StyleSheet} from 'react-native';

import Quote from './Quote';
import NextQuoteButton from './NextQuoteButton';

const bgImage = require('./../assets/bg.png');

class QuoteScreen extends Component {
  render() {
    const {text, source} = this.props;
    return (
      <Image source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.container}>
          <Quote quoteText={text} quoteSource={source} />
          <NextQuoteButton onPress={this.props.onNextQuotePress}/>
        </View>
      </Image>
    );
  }
}

QuoteScreen.propTypes = {
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  onNextQuotePress: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundContainer: {
    flex: 1,
    resizeMode: 'cover',
    width: undefined,
    height: undefined,
  }
});



export default QuoteScreen;
