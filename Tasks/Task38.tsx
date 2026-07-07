import { Component, createContext, useContext, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const MyContext=createContext();

class ComponentOne extends Component{
  static contextType=MyContext;

  render(){
    return(
      <Text style={styles.text}>{this.context.text}</Text>
    );
  }
}

function ComponentTwo(){
  const{text,setText}=useContext(MyContext);

  return(
    <View style={styles.box}>
      <TextInput
        style={styles.input}
        placeholder="Type here"
        value={text}
        onChangeText={setText}
      />
      <ComponentOne/>
    </View>
  );
}

export default function Task38(){
  const[text,setText]=useState('');

  return(
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <MyContext.Provider value={{text,setText}}>
          <ComponentTwo/>
          <ComponentTwo/>
          <ComponentTwo/>
          <ComponentTwo/>
        </MyContext.Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    padding:20,
    gap:20,
  },
  box:{
    gap:10,
  },
  input:{
    borderWidth:1,
    padding:10,
    borderRadius:5,
  },
  text:{
    fontSize:18,
  },
});