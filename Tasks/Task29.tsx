import { useRef, useState } from 'react';
import { Alert, FlatList, Image, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const images=[
  require('../../resources/1.png'),
  require('../../resources/2.png'),
  require('../../resources/3.png'),
  require('../../resources/4.png'),
  require('../../resources/5.png'),
  require('../../resources/6.png'),
  require('../../resources/7.png'),
  require('../../resources/8.png'),
  require('../../resources/9.png'),
  require('../../resources/10.png'),
];

export default function Task29(){
  const flatListRef=useRef(null);
  const [modalVisible, setModalVisible]=useState(false);
  const [inputIndex, setInputIndex]=useState('');

  const handlePress=(index)=>{
    Alert.alert('You have selected image :', String(index+1));
  };

  const handleSubmit=()=>{
    const number=parseInt(inputIndex, 10);
    if(isNaN(number) || number<1 || number>images.length){
      Alert.alert('Invalid index', `Please enter a number between 1 and ${images.length}`);
      return;
    }
    setModalVisible(false);
    setInputIndex('');
    flatListRef.current.scrollToIndex({index: number-1, animated: true});
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Pressable style={styles.button} onPress={()=>setModalVisible(true)}>
          <Text style={styles.buttonText}>Go to Image</Text>
        </Pressable>
        <FlatList
          ref={flatListRef}
          data={images}
          horizontal={true}
          keyExtractor={(item, index)=>index.toString()}
          renderItem={({item, index})=>(
            <Pressable onPress={()=>handlePress(index)}>
              <Image style={styles.image} source={item}/>
            </Pressable>
          )}
        />
        <Modal visible={modalVisible} transparent={true} animationType="slide">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Enter image index</Text>
              <TextInput
                style={styles.input}
                placeholder="input here"
                keyboardType="numeric"
                value={inputIndex}
                onChangeText={setInputIndex}
              />
              <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
              </Pressable>
              <Pressable style={styles.cancelButton} onPress={()=>setModalVisible(false)}>
                <Text style={styles.buttonText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles=StyleSheet.create({
  container:{flex: 1, justifyContent: 'center', gap: 15},
  image:{width: 100, height: 100, marginHorizontal: 5, resizeMode: 'cover'},
  button:{backgroundColor: '#2196F3', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5, alignItems: 'center', marginHorizontal: 20},
  cancelButton:{backgroundColor: '#999', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5, alignItems: 'center', marginTop: 10},
  buttonText:{color: '#fff', fontSize: 16, fontWeight: 'bold'},
  modalOverlay:{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center'},
  modalContent:{backgroundColor: '#fff', padding: 20, borderRadius: 10, width: 250, alignItems: 'center'},
  modalTitle:{fontSize: 18, fontWeight: 'bold', marginBottom: 10},
  input:{borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, width: '100%', marginBottom: 15, textAlign: 'center'},
});