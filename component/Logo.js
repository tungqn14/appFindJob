import React,{useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Dimensions,
    Image,
    Linking,
    Pressable,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
import SearchBar from '../component/SearchBar';
export default function Logo() {
    return (
        <View style={styles.container}>
               <View style={styles.wrapLogo}>
                  <Text style={{color:"#e24c32",fontSize:60,fontWeight:"bold"}}>
                    Dev
                    </Text>
                    <Text style={{color:"black",fontSize:30,marginTop:30,marginLeft:5}}>IT</Text>
               </View>
               <Text style={{color:"black",fontSize:20,marginTop:20}}>Công nghệ dẫn đầu cuộc chơi</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    wrapLogo:{
        flexDirection:"row",
      }
  });