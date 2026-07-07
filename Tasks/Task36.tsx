import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function generateRandomWord(length){
  let result='';
  const characters='abcdefghijklmnopqrstuvwxyz';
  for(let i=0;i<length;i++){
    result+=characters.charAt(Math.floor(Math.random()*characters.length));
  }
  return result;
}

export default function Task36(){
  return(
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {Array.from({length:100},(_,i)=>(
            <Text key={i} style={styles.text}>
              {i+1}. {generateRandomWord(6)}
            </Text>
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  text:{
    fontSize:20,
    margin:10,
  },
});