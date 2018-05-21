import React, {Component} from 'react';
import { Image, View, StyleSheet } from 'react-native';

export default class Robot extends Component {

  render() {
      return (
      <View style = {[styles.size, styles.container]}>
      </View>
    );
  }
}
  const styles = StyleSheet.create({
    container: {
      marginTop: 30,
      marginLeft: 30,
      marginRight: 30,
      backgroundColor: '#324355',
      borderWidth: 2
    },

    size: {
      width: 200,
      height: 200
    }
  });
