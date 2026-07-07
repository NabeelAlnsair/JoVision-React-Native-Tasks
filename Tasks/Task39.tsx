import { useState } from 'react';
import { Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import ComponentOne from './ComponentOne';
import { store } from './store';

export default function Task39(){
  const[show,setShow]=useState(true);

  return(
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={{flex:1,justifyContent:'center',padding:20,gap:20}}>
          <Button
            title={show?'Hide':'Show'}
            onPress={()=>setShow(!show)}
          />
          {show&&<ComponentOne/>}
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}