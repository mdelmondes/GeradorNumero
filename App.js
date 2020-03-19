import React, {Component} from 'react';

import {StyleSheet, View, Button, Text} from 'react-native';

export default class MyProject extends Component {
  constructor() {
    super();

    this.state = {
      NumberHolder: 1,
    };
  }

  GenerateRandomNumber = () => {
    var RandomNumber = Math.floor(Math.random() * 60) + 1;

    this.setState({
      NumberHolder: RandomNumber,
    });
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{fontSize: 30, marginBottom: 200}}>Gerador de número</Text>
        <Text style={{marginBottom: 10, fontSize: 20}}>
          {this.state.NumberHolder}
        </Text>

        <Button
          title="Pressione para gerar"
          onPress={this.GenerateRandomNumber}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
