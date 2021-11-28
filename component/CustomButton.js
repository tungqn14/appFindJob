import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Dimensions,
    Image,
    Pressable,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
  } from 'react-native';

export default function CustomButton({onPress,text}) {
    
    return (
        <Pressable onPress={onPress} style={styles.container}>
         <Text style={styles.textBtn}>{text}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
  container:{
   backgroundColor:"#3B71F3",
   marginVertical:5,
   width:"100%",
   padding: 15,
   alignItems:"center",
   borderRadius:5
  },
 textBtn:{
     fontWeight:"bold",
     color:"white",
     fontSize:18
 }
  });