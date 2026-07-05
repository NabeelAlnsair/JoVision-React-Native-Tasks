import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MyClassPage19 extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.nameText}>Nabeel Alnsair</Text>
      </View>
    );
  }
}

export default MyClassPage19;

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