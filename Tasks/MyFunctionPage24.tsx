import { forwardRef, useImperativeHandle, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MyFunctionPage24=forwardRef((props, ref)=>{
  const [text, setText]=useState('');

  useImperativeHandle(ref,()=>({
    updateText:(newText)=>{
      setText(newText);
    },
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{text}</Text>
    </View>
  );
});

export default MyFunctionPage24;

const styles=StyleSheet.create({
  container:{
    marginTop: 20,
    alignItems: 'center',
  },
  nameText:{
    fontSize: 22,
    fontWeight: 'bold',
  },
});