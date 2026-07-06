import { Alert, FlatList, Image, Pressable, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const images = [
  require('../../resources/1.png'),
  require('../../resources/2.png'),
  require('../../resources/3.png'),
  require('../../resources/4.png'),
  require('../../resources/5.png'),
  require('../../resources/6.png'),
  require('../../resources/7.png'),
  require('../../resources/8.png'),
  require('../../resources/9.png'),
  require('../../resources/10.png'),
];

export default function Task28(){
  const Pressing=(index)=>{
    Alert.alert('You have selected image :', String(++index));
  };

  return(
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={images}
          horizontal={true}
          keyExtractor={(item, index)=>index.toString()}
          renderItem={({item, index})=>(
            <Pressable onPress={()=>Pressing(index)}>
              <Image style={styles.image} source={item}/>
            </Pressable>
          )}/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 5,
    resizeMode: 'cover',
  },
});