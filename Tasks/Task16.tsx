import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Index(){
  const [isVisible, setIsVisible]=useState(false);
  const toggleVisibility=()=>{
    setIsVisible(!isVisible);
  };

  return(
    <View style={styles.container}>
      <Button title="Show" onPress={toggleVisibility}/>
      {isVisible&&<Text style={styles.nameText}>Nabeel Alnsair</Text>}
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
  nameText:{
    marginTop: 20,
    fontSize: 22,
    fontWeight: 'bold',
  },
});