import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
class MyClassPage extends React.Component{
  componentDidMount(){
    console.log('MyClassPage has loaded');
  }
  componentWillUnmount(){
    console.log('MyClassPage has unloaded');
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.nameText}>Nabeel Alnsair</Text>
      </View>
    );
  }
}
export default MyClassPage;
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