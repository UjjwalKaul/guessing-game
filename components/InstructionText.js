import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function InstructionText({ children, style }) {
  return <Text style={[styles.instruction, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instruction: {
    fontFamily: 'open-sans',
    color: '#ddb52f',
    fontSize: 25,
  },
});
