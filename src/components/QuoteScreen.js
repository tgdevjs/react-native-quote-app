import React, {Component, PropTypes} from 'react';
import {View, Image, LayoutAnimation, StyleSheet} from 'react-native';

import Quote from './Quote';
import NextQuoteButton from './NextQuoteButton';

const bgImage = require('./../assets/bg.png');

class QuoteScreen extends Component {
  componentWillUpdate() {
    LayoutAnimation.configureNext(tranquil);
  }
  render() {
    const {text, source, quoteId} = this.props;
    return (
      <Image source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.container}>
          <Quote key={quoteId} quoteText={text} quoteSource={source} />
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
  quoteId: PropTypes.number.isRequired,
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

// Animation
const tranquil = {
  duration: 500,
  create: {
    duration: 1000,
    delay: 300,
    type: LayoutAnimation.Types.easeIn,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  delete: {
    duration: 200,
    type: LayoutAnimation.Types.easeOut,
    property: LayoutAnimation.Properties.opacity,
  }
};

export default QuoteScreen;
