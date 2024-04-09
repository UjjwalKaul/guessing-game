import { View, TextInput } from 'react-native';
import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import { StyleSheet } from 'react-native';

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder="Enter your guess" />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: 100,
    padding: 16,
    backgroundColor: 'purple',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
  },
});
