import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Task26(){
  const [ip, setIp]=useState('');
  const getIpNonBlocking=async ()=>{
    try{
      const response=await fetch('https://api.ipify.org/?format=json');
      const data=await response.json();
      setIp(data.ip);
    }catch(error){
      console.log('Error:', error);
    }
  };

  const getIpBlocking=async ()=>{
    try{
      const response=await fetch('https://api.ipify.org/?format=json');
      const data=await response.json();
      const start=Date.now();
      while(Date.now()-start<1711){}
      setIp(data.ip);
    }catch(error){
      console.log('Error:', error);
    }
  };

  return(
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={getIpNonBlocking}>
        <Text style={styles.buttonText}>Get IP (Non-blocking)</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={getIpBlocking}>
        <Text style={styles.buttonText}>Get IP (Blocking)</Text>
      </Pressable>

      <Text style={styles.ipText}>{ip}</Text>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
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
  ipText:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});