import React,{ useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
    StyleSheet,
    Text,
    View,    
    ToastAndroid,
    FlatList,
    Button,
} from 'react-native';


import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalisVisible, setModalIsVisible]= useState(false)
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endAddGoalHandler(){
    setModalIsVisible(false);
  }
  
  function addGoalHandler(enteredGoalText){
    if (enteredGoalText.length > 0){
      setCourseGoals((currentCouseGoals) => [
        ...courseGoals,
        {text:enteredGoalText, id:Math.random().toString()}
      ]);
      endAddGoalHandler();      
    }else{
      ToastAndroid.show('No puede crear metas vacias', ToastAndroid.TOP);
    }
  }

  function deleteGoalHandler(id){
    setCourseGoals(currentCouseGoals => {
      return currentCouseGoals.filter((goal) => goal.id !== id)
    });
  }

  
  return (
    <>
       <StatusBar
        animated={true}        
        backgroundColor="#fa920bd8"
        color="#fff"
        style='light'        
      />
      <View style={styles.appContainer}>      
      <Button 
        title='Adde new Goal'
        color='#c9216c'
        onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalisVisible} 
          onAddGoal={addGoalHandler} 
          onCancel={endAddGoalHandler}
          />
        <View style={styles.goalsContainer}>
                
          <FlatList data={courseGoals} renderItem={(itemData)=>{
            return (
              <GoalItem 
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index)=>{
            return item.id
          }}
          alwaysBounceVertical={true} />                  
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({  
  appContainer: {
    flex:1,
    paddingTop:50,
    paddingHorizontal:16,    
  }, 
  goalsContainer:{
    flex:5,
  },
    
});

