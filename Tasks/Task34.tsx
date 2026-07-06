import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import useCurrentTime from './useCurrentTime';

export default function Task34() {
  const currentTime = useCurrentTime();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>
          Date: {currentTime.toLocaleDateString()}
        </Text>

        <Text style={styles.text}>
          Time: {currentTime.toLocaleTimeString()}
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginVertical: 10,
  },
});