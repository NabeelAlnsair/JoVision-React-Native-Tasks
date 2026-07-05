import { useEffect } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function MyFunctionPage22({onTextChange}) {
  useEffect(()=>{
    console.log('MyFunctionPage has loaded');
    return ()=>{
      console.log('MyFunctionPage has unloaded');
    };
  }, []);

  return(
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Text Input"
        onChangeText={(text)=>onTextChange(text)}
      />
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    marginTop: 20,
    alignItems: 'center',
  },
  input:{
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: 200,
  },
});