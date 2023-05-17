import { useState } from "react";
import { 
    StyleSheet, 
    View, 
    TextInput, 
    Button,
    Modal,
    Image
 } from "react-native"; 

function GoalInput(props){    

    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredGoal){
        setEnteredGoalText(enteredGoal)
    }
    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('')        
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/img/Luffy.jpg')}/>
                <TextInput
                    onChangeText={goalInputHandler}
                    style={styles.textInput}
                    placeholder="Your course goal!!!"
                    value={enteredGoalText}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button
                                onPress={addGoalHandler}
                                color="#e209ac"
                                title="Add Goal"
                                accessibilityLabel="Holitas de mar from piura"
                            />
                        </View>
                        <View style={styles.button}>
                            <Button title='Cancel' onPress={props.onCancel}/>
                        </View>
                    </View>                    
            </View>
            
        </Modal>
    );
}

// #841584

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex:1,        
        justifyContent:'center',
        alignItems: 'center',        
        padding:16,
        backgroundColor:'#ca0065',               
      },
      textInput:{
        borderWidth:1,
        borderColor: '#e4d0ff',
        backgroundColor:'#e4d0ff',
        color: '#120438',
        borderRadius:6,
        width:'100%',        
        padding: 16,
      },
      buttonContainer:{
        marginTop: 16,
        flexDirection:'row',        
      },
      button:{
        width: 100,
        marginHorizontal:8,
      },
      image:{
        height: 100,
        width: 100,
        margin:20,
      }
});
