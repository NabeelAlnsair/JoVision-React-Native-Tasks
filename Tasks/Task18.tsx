import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function Task18(){
  const [isLoading, setIsLoading]=useState(true);
  useEffect(()=>{
    setTimeout(()=>setIsLoading(false), 5000);
  }, []);
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text>Nabeel Alnsair</Text>
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