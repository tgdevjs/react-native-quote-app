import React, {Component, PropTypes} from 'react';
import {View, StyleSheet} from 'react-native';

import Quote from './Quote';

class QuoteScreen extends Component {
  render() {
    const {text, source} = this.props;
    return (
      <View style={styles.container}>
        <Quote quoteText={text} quoteSource={source} />
      </View>
    );
  }
}

QuoteScreen.propTypes = {
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#161737',
  }
});

export default QuoteScreen;
