import React,{ useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredText] = useState('')
  const  [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText){
    setEnteredText(enteredText)
  }
  
  function addGoalHandler(){
    setCourseGoals((currentCouseGoals) => [...courseGoals, enteredGoal]);
    setEnteredText('');
  }

  return (
    <View style={styles.appContainer}>      
     <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Your course goal!!!"
          value={enteredGoal} />
        <Button
            onPress={addGoalHandler}
            color="#841584"
            title="Add Goal"
            accessibilityLabel="Holitas de mar from piura"/>
      </View>      
      <View style={styles.goalsContainer}>
        <Text>List of Goals!</Text>
        {courseGoals.map((goal, indice) => (
          <View key={indice} style={styles.goalItem} >
            <Text style={styles.goalText}>{goal}</Text>
          </View>          
        ))}
        
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({  
  appContainer: {
    flex:1,
    paddingTop:50,
    paddingHorizontal:16,    
    backgroundColor:'#f1eed3ec',

  },
  inputContainer: {
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginBottom:24,
    borderBottomWidth:1,
    borderBottomColor:'#cccccc'
  },
  textInput:{
    borderWidth:1,
    borderColor: '#cccccc',
    width:'70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer:{
    flex:5,
  },
  goalItem:{
    color:'#e4e4e4',
    margin:8,
    padding:8,
    borderRadius:6,
    backgroundColor:'#5a038dcc'    
  },
  goalText:{
    color:'white',
  }

});

