import { View, StyleSheet } from 'react-native';
import React from 'react';

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: 36,
    padding: 16,
    backgroundColor: '#750f3a',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },
});
