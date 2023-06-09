import {StyleSheet} from 'react-native'
import { View, Text, Pressable } from 'react-native';

function GoalItem(props){        
    
    return(
        <View style={styles.goalItem} >
            <Pressable android_ripple={{color:'#31044bcc'}} onPress={props.onDeleteItem.bind(this, props.id)}>            
                <Text style={styles.goalText}>{props.text}</Text>            
            </Pressable>
        </View>
    )
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem:{
        
        margin:8,        
        borderRadius:6,
        backgroundColor:'#5a038dcc'    
    },
    goalText:{
        color:'white',
        padding:8,
    }
});