import { Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ddb52f',
    borderWidth: 2,
    textAlign: 'center',
    borderColor: '#ddb52f',
    padding: 12,
  },
});
