import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuter}>
      <Pressable
        style={styles.Btncontainer}
        android_ripple={{ color: '#640233', borderRadius: 20 }}
        onPress={onPress}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  Btncontainer: {
    backgroundColor: '#923e96',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    margin: 4,
  },
  buttonOuter: {
    borderRadius: 20,
    margin: 4,
    overflow: 'hidden',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
