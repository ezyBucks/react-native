/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import './src/api/api.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  centerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  getUsers = () => {
    this.setState({
      users: getUsers()
    });
  };

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.centerText}>ezyBucks!</Text>
          <Text style={styles.centerText}>{this.state.users}</Text>
          <Button onPress={() => this.getUsers()} title="Test"></Button>
        </View>
    );
  }
}

export default App;