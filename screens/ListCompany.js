import React from 'react';
import {ScrollView, StyleSheet,View,Text,Image} from 'react-native';
import BlockPost from '../component/BlockPost';
import ItemCompany from '../component/ItemCompany';
import SearchBar from '../component/SearchBar';

export default function ListCompany({navigation}) {
    const PressDetailPost = ()=>{
        navigation.navigate("DetailPost");
    }
    return (
         <ScrollView
      
        style={styles.container}>
        <Text style={{textAlign:"center",marginVertical:20,fontSize:22,fontWeight:"bold"}}>Danh sách công ty tuyển dụng</Text>
            <ItemCompany  titlePost="công ty cái gì đó" address="Hà nội" quantity="100-200"/>
            <ItemCompany  titlePost="công ty cái gì đó" address="Hà nội" quantity="100-200"/>
            <ItemCompany  titlePost="công ty cái gì đó" address="Hà nội" quantity="100-200"/>
            <ItemCompany  titlePost="công ty cái gì đó" address="Hà nội" quantity="100-200"/>
            <ItemCompany  titlePost="công ty cái gì đó" address="Hà nội" quantity="100-200"/>
            <ItemCompany  titlePost="công ty cái gì đó" address="Hà nội" quantity="100-200"/>
            <ItemCompany  titlePost="công ty cái gì đó" address="Hà nội" quantity="100-200"/>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20
    },
    listPostVip:{
      
    },
    titleListPost:{
        fontWeight:"bold",
        fontSize:20,
        marginVertical:15,
    }
  });