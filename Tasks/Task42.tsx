import {View,Text,Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab=createBottomTabNavigator();

function Screen1({navigation}){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center',gap:10}}>
      <Text>Screen 1</Text>
      <Button title="Go to Screen 2" onPress={()=>navigation.navigate('Two')}/>
      <Button title="Go to Screen 3" onPress={()=>navigation.navigate('Three')}/>
      <Button title="Go to Screen 4" onPress={()=>navigation.navigate('Four')}/>
    </View>
  );
}

function Screen2({navigation}){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center',gap:10}}>
      <Text>Screen 2</Text>
      <Button title="Go to Screen 1" onPress={()=>navigation.navigate('One')}/>
      <Button title="Go to Screen 3" onPress={()=>navigation.navigate('Three')}/>
      <Button title="Go to Screen 4" onPress={()=>navigation.navigate('Four')}/>
    </View>
  );
}

function Screen3({navigation}){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center',gap:10}}>
      <Text>Screen 3</Text>
      <Button title="Go to Screen 1" onPress={()=>navigation.navigate('One')}/>
      <Button title="Go to Screen 2" onPress={()=>navigation.navigate('Two')}/>
      <Button title="Go to Screen 4" onPress={()=>navigation.navigate('Four')}/>
    </View>
  );
}

function Screen4({navigation}){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center',gap:10}}>
      <Text>Screen 4</Text>
      <Button title="Go to Screen 1" onPress={()=>navigation.navigate('One')}/>
      <Button title="Go to Screen 2" onPress={()=>navigation.navigate('Two')}/>
      <Button title="Go to Screen 3" onPress={()=>navigation.navigate('Three')}/>
    </View>
  );
}

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="One" component={Screen1}/>
        <Tab.Screen name="Two" component={Screen2}/>
        <Tab.Screen name="Three" component={Screen3}/>
        <Tab.Screen name="Four" component={Screen4}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}