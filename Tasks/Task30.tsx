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

export default function Task30() {
  const ref = useRef(null);
  const [data, setData] = useState(initialData);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('');
  const remove=id=>Alert.alert('Confirm Deletion',`Delete image #${id}?`,[
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => setData(data.filter(i => i.id !== id)),
        },
      ]
    );
  const go = () => {
    const index = data.findIndex(i => i.id == value);
    if (index === -1)
      return Alert.alert(
        'Invalid index',
        `Please enter a number between 1 and ${initialData.length}`
      );
    setShow(false);
    setValue('');
    ref.current.scrollToIndex({ index, animated: true });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.c}>
        <Pressable style={s.b} onPress={() => setShow(true)}>
          <Text style={s.t}>Go to Image</Text>
        </Pressable>
        <FlatList
          ref={ref}
          horizontal
          data={data}
          keyExtractor={i => i.id.toString()}
          renderItem={({ item }) => (
            <View style={s.box}>
              <Pressable onPress={() => Alert.alert('You have selected image :', String(item.id))}>
                <Image source={item.source} style={s.img} />
              </Pressable>

              <Pressable style={s.del} onPress={() => remove(item.id)}>
                <Text style={s.x}>✕</Text>
              </Pressable>
            </View>
          )}
        />
        <Modal visible={show} transparent animationType="slide">
          <View style={s.overlay}>
            <View style={s.modal}>
              <TextInput
                style={s.input}
                placeholder="input here"
                keyboardType="numeric"
                value={value}
                onChangeText={setValue}
              />
              <Pressable style={s.b} onPress={go}>
                <Text style={s.t}>Submit</Text>
              </Pressable>

              <Pressable style={s.cancel} onPress={() => setShow(false)}>
                <Text style={s.t}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const s = StyleSheet.create({
  c: { flex: 1, justifyContent: 'center', gap: 15 },
  box: { marginHorizontal: 5 },
  img: { width: 100, height: 100 },
  b: { backgroundColor: '#2196F3', padding: 10, alignItems: 'center', marginHorizontal: 20 },
  t: { color: '#fff', fontWeight: 'bold' },
  del: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 25,
    height: 25,
    borderRadius: 15,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  x: { color: '#fff', fontWeight: 'bold' },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0008',
  },
  modal: {
    backgroundColor: '#fff',
    padding: 20,
    width: 250,
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  cancel: {
    backgroundColor: '#999',
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
});
