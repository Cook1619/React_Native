import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={StyleSheet.container}>
        <Text>Some random text</Text>
        <Text>Change this text to see change</Text>
        <Text>What about a third line??</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  }
})