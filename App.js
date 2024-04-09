import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['purple', '#ddb52f']} style={styles.container}>
      <StartGameScreen />
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddb52f',
  },
});
