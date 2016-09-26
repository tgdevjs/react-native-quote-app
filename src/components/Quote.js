import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


class Quote extends Component {
  render() {
    const {quoteText, quoteSource} = this.props
    return (
      <View>
        <Text style={styles.quoteText}>
          {quoteText}
        </Text>
        <Text style={styles.quoteSource}>
          {quoteSource}
        </Text>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  quoteText: {
    fontSize: 30,
    color: '#cccccc',
  },
  quoteSource: {
    fontSize: 20,
    color: '#ffffff',
  }
});

export default Quote;
