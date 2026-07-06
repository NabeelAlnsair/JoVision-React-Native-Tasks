import { useRef, useState } from 'react';
import { Alert, FlatList, Image, Modal, Pressable, StyleSheet, Text, TextInput, View, } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const initialData = [
  { id: 1, source: require('../../resources/1.png') },
  { id: 2, source: require('../../resources/2.png') },
  { id: 3, source: require('../../resources/3.png') },
  { id: 4, source: require('../../resources/4.png') },
  { id: 5, source: require('../../resources/5.png') },
  { id: 6, source: require('../../resources/6.png') },
  { id: 7, source: require('../../resources/7.png') },
  { id: 8, source: require('../../resources/8.png') },
  { id: 9, source: require('../../resources/9.png') },
  { id: 10, source: require('../../resources/10.png') },
];

export default function Task31() {
  const flatListRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [inputIndex, setInputIndex] = useState('');
  const [data, setData] = useState(initialData);
  const handlePress = item =>Alert.alert('Image', String(item.id));
  const handleDelete = id =>
    setData(data.filter(item => item.id !== id));
  const handleDuplicate = item => {
    const index = data.findIndex(i => i.id === item.id);
    const newData = [...data];
    newData.splice(index + 1, 0, { ...item, id: Date.now() });
    setData(newData);
  };

  const handleSubmit = () => {
    const index = data.findIndex(i => i.id === Number(inputIndex));
    if (index === -1) return Alert.alert('Invalid');
    setModalVisible(false);
    setInputIndex('');
    flatListRef.current.scrollToIndex({ index, animated: true });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Go to Image</Text>
        </Pressable>

        <FlatList
          ref={flatListRef}
          horizontal
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Pressable onPress={() => handlePress(item)}>
                <Image source={item.source} style={styles.image} />
              </Pressable>

              <Pressable style={styles.copy} onPress={() => handleDuplicate(item)}>
                <Text>+</Text>
              </Pressable>

              <Pressable style={styles.delete} onPress={() => handleDelete(item.id)}>
                <Text>✕</Text>
              </Pressable>
            </View>
          )}
        />
        <Modal visible={modalVisible} transparent animationType="slide">
          <View style={styles.modal}>
            <View style={styles.box}>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={inputIndex}
                onChangeText={setInputIndex}
                placeholder="Image ID"
              />
              <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', gap: 15 },
  imageContainer: { marginHorizontal: 5 },
  image: { width: 100, height: 100 },
  button: { backgroundColor: '#2196F3', padding: 10, alignItems: 'center', marginHorizontal: 20 },
  buttonText: { color: '#fff' },
  delete: { position: 'absolute', top: 5, right: 5, backgroundColor: 'red', width: 22, height: 22, alignItems: 'center', justifyContent: 'center' },
  copy: { position: 'absolute', top: 5, left: 5, backgroundColor: 'green', width: 22, height: 22, alignItems: 'center', justifyContent: 'center' },
  modal: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0005' },
  box: { backgroundColor: '#fff', padding: 20, width: 250 },
  input: { borderWidth: 1, marginBottom: 10, padding: 8, textAlign: 'center' },
});