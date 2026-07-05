import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MyFunctionPage() {
  useEffect(()=>{
    console.log('MyFunctionPage has loaded');

    return()=>{
      console.log('MyFunctionPage has unloaded');
    };
  }, []);

  return(
    <View style={styles.container}>
      <Text style={styles.nameText}>Nabeel Alnsair</Text>
    </View>
  );
}

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