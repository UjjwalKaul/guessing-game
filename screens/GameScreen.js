import { View, Text, StyleSheet, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import Title from '../components/Title';
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;
export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't Lie", 'You know that this is wrong..', [
        { text: 'Sorry', style: 'cancel' },
      ]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.btnContainer}>
          <View style={styles.single}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
              +
            </PrimaryButton>
          </View>
          <View style={styles.single}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              -
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  btnContainer: {
    flexDirection: 'row',
  },
  single: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
  },
});
