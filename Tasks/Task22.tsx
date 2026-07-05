import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyFunctionPage22 from '../components/MyFunctionPage22';

export default function Task22(){
  const [parentText, setParentText]=useState('');

  return(
    <View style={styles.container}>
      <Text style={styles.displayText}>{parentText}</Text>
      <MyFunctionPage22 onTextChange={setParentText} />
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
  displayText:{
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});