import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Title from '../components/Title';

export default function GameOver() {
  return (
    <View style={styles.root}>
      <Title>Game Over</Title>
      <View style={styles.foreground}>
        <Image style={styles.image} source={require('../assets/success.png')} />
      </View>
      <Text>Your phone needed X rounds to guess number Y</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  foreground: {
    borderRadius: 150,
    height: 300,
    width: 300,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    margin: 35,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  root: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
