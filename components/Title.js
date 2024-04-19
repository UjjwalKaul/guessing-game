import { Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    borderWidth: 2,
    textAlign: 'center',
    borderColor: 'white',
    padding: 12,
  },
});
