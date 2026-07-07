import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';

const Tab=createBottomTabNavigator();

function Screen1(){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Screen 1</Text>
    </View>
  );
}

function Screen2(){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Screen 2</Text>
    </View>
  );
}

function Screen3(){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Screen 3</Text>
    </View>
  );
}

function Screen4(){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Screen 4</Text>
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