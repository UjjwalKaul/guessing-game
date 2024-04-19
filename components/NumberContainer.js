import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: '#ddb52f',
    alignItems: 'center',
    padding: 22,
    borderRadius: 8,
    margin: 24,
    justifyContent: 'center',
  },
  text: {
    fontSize: 36,
    fontFamily: 'open-sans-bold',
    color: '#ddb52f',
  },
});
