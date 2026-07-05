import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MyClassPage25 extends React.Component{
  constructor(props){
    super(props);
    this.state={
      text: '',
    };
  }
  updateText(newText){
    this.setState({text: newText});
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.nameText}>{this.state.text}</Text>
      </View>
    );
  }
}
export default MyClassPage25;
const styles=StyleSheet.create({
  container:{
    marginTop: 20,
    alignItems: 'center',
  },
  nameText:{
    fontSize: 22,
    fontWeight: 'bold',
  },
});