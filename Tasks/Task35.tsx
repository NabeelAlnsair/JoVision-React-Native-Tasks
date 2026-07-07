import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Task35(){
  const[name,setName]=useState('');
  const[age,setAge]=useState('');
  const[country,setCountry]=useState('');

  useEffect(()=>{
    loadData();
  },[]);

  const loadData=async()=>{
    try{
      const value=await AsyncStorage.getItem('user');
      if(!value)return;

      const data=JSON.parse(value);

      if(Date.now()-data.timestamp<60000){
        setName(data.name);
        setAge(data.age);
        setCountry(data.country);
      }
    }catch{}
  };

  const saveData=async()=>{
    const data={
      name,
      age,
      country,
      timestamp:Date.now(),
    };

    try{
      await AsyncStorage.setItem('user',JSON.stringify(data));
    }catch{}
  };

  return(
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Age"
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
        />

        <TextInput
          style={styles.input}
          placeholder="Country"
          value={country}
          onChangeText={setCountry}
        />

        <Button title="Submit" onPress={saveData}/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    padding:20,
    gap:15,
  },
  input:{
    borderWidth:1,
    padding:10,
    borderRadius:5,
  },
});