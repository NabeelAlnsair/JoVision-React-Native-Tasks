import { useRef } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import MyClassPage25 from '../components/MyClassPage25';

export default function Task25(){
  const childRef=useRef(null);
  const handleChangeText=(text)=>{
    if(childRef.current){
      childRef.current.updateText(text);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Text Input"
        onChangeText={handleChangeText}
      />
      <MyClassPage25 ref={childRef}/>
    </View>
  );
}
const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: 200,
  },
});