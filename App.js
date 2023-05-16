import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [text, onChangeText] = React.useState('Ingrese su celular');
  const [number, onChangeNumber] = React.useState('');

  return (
    <View style={{
        padding: 50,
        flexDirection:'row',
        width:'80%',
        height:300,
        justifyContent:'space-around',
        alignItems:'stretch'
      }}>      
      <View style={{
        backgroundColor:'red',        
        justifyContent: 'center',        
        flex:1,
        flexDirection:'row',
        
        alignItems: 'center'
      }}>
        <Text>1</Text>
        <Text>other</Text>
      </View>
      <View style={{
        backgroundColor:'blue',         
        justifyContent: 'center',
        flex:1,
        alignItems: 'center'
      }}>
        <Text>2</Text>
      </View>
      <View style={{
        backgroundColor:'green',        
        justifyContent: 'center',
        flex:1,
        alignItems: 'center'
      }}>
        <Text>3</Text>
      </View>          
    </View>
  );
}

const styles = StyleSheet.create({  
  appContainer: {
    padding:50,
  },
  inputContainer: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
  textInput:{
    borderWidth:1,
    borderColor: '#cccccc',
    width:'80%',
    marginRight: 8,
    padding: 8,
  }
});

{/* <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal!!!" />
        <Button title="Add Goal"/>
      </View>
      <View></View>
      <View>
        <Text>List of Goals!</Text>
      </View> */}