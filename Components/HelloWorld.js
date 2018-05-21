
import React, {Component} from 'react';
import { Image, Text } from 'react-native';

export default class HelloWorld extends Component {
    render(){
      let woe = `
        Hello world
      `
      return(
        <Text> {woe} </Text>
      );
    }
}
