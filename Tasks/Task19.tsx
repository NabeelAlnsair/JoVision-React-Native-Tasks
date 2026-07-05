import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import MyClassPage19 from '../components/MyClassPage19';

export default function Task19() {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => setShowComponent(true)}>
        <Text style={styles.buttonText}>Show</Text>
      </Pressable>
      {showComponent && <MyClassPage19 />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});