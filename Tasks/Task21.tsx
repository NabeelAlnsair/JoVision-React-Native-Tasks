import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import MyFunctionPage from '../components/MyFunctionPage';

export default function Task21(){
  const [showComponent, setShowComponent]=useState(false);
  const toggleComponent=()=>{
    setShowComponent(!showComponent);
  };

  return(
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={toggleComponent}>
        <Text style={styles.buttonText}>Show</Text>
      </Pressable>
      {showComponent && <MyFunctionPage />}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
});