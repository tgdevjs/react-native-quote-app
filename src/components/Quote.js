import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';


class Quote extends Component {
  render() {
    const {quoteText, quoteSource} = this.props
    return (
      <View>
        <Text style={styles.quoteText}>"{quoteText}"</Text>
        <Text style={styles.quoteSource}>- {quoteSource}</Text>
      </View>

    );
  }
}

Quote.propTypes = {
  quoteText: PropTypes.string.isRequired,
  quoteSource: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  quoteText: {
    fontFamily: (Platform.OS === 'ios') ? 'AvenirNext-Bold' : 'Roboto',
    fontSize: 36,
    color: '#ffffff',
    marginVertical: 30,
  },
  quoteSource: {
    fontFamily: (Platform.OS === 'ios') ? 'AvenirNext-Bold' : 'Roboto',
    fontSize: 20,
    color: '#f8f8f8',
    textAlign: 'right',
    fontStyle: 'italic',
  }
});

export default Quote;
