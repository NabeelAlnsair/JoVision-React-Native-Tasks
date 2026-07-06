import { useState } from 'react';
import { Alert, Image, Pressable, StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const images={
  1: require('../../resources/1.png'),
  2: require('../../resources/2.png'),
  3: require('../../resources/3.png'),
};
export default function Task27(){
  const [selectedImage, setSelectedImage]=useState(1);
  const showImagePicker=()=>{
    Alert.alert(
      'Choose an image',
      'Pick image number (1, 2, 3)',
      [
        {text:'1', onPress:()=>setSelectedImage(1)},
        {text:'2', onPress:()=>setSelectedImage(2)},
        {text:'3', onPress:()=>setSelectedImage(3)},
      ]
    );
  };

  return(
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Image style={styles.stretch} source={images[selectedImage]}/>
        <Pressable style={styles.button} onPress={showImagePicker}>
          <Text style={styles.buttonText}>Choose Image</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  stretch:{
    width: 150,
    height: 150,
    resizeMode: 'stretch',
  },
  button:{
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});