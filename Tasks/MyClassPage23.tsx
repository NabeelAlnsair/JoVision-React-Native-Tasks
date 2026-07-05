import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

class MyClassPage23 extends React.Component{
  componentDidMount(){
    console.log('MyClassPage has loaded');
  }
  componentWillUnmount(){
    console.log('MyClassPage has unloaded');
  }
  render(){
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Text Input"
          onChangeText={(text) => this.props.onTextChange(text)}
        />
      </View>
    );
  }
}

export default MyClassPage23;

const styles=StyleSheet.create({
  container:{
    marginTop: 20,
    alignItems: 'center',
  },
  input:{
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: 200,
  },
});