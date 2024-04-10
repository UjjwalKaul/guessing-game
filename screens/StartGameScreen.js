import { View, TextInput, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import React from 'react';
import PrimaryButton from '../components/PrimaryButton';

export default function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
    console.log(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    console.log('Number confirmed ' + enteredNumber);
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number', 'Pick a number between 1 and 99', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
      ]);
      return;
    }
    console.log('Valid Number');
  }

  function resetHandler() {
    setEnteredNumber('');
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.btnContainer}>
        <View style={styles.single}>
          <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.single}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
  },
  inputContainer: {
    alignItems: 'center',
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: 100,
    padding: 16,
    backgroundColor: 'purple',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  single: {
    flex: 1,
  },
});
