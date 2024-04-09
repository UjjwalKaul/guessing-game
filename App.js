import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['purple', '#ddb52f']} style={styles.container}>
      <ImageBackground
        source={require('./assets/background.png')}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backImage}>
        <StartGameScreen />
        <StatusBar style="auto" />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImage: {
    opacity: 0.15,
  },
});
