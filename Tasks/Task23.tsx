import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Task23(){
  const [parentText, setParentText]=useState('');

  return(
    <View style={styles.container}>
      <Text style={styles.displayText}>{parentText}</Text>
      <MyFunctionPage23 onTextChange={setParentText} />
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