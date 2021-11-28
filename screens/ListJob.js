import React from 'react';
import {ScrollView, StyleSheet,View,Text,Image} from 'react-native';
import BlockPost from '../component/BlockPost';
import SearchBar from '../component/SearchBar';

export default function ListJob({navigation}) {
    const PressDetailPost = ()=>{
        navigation.navigate("DetailPost");
    }
    return (
         <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        <Text style={{textAlign:"center",marginVertical:20,fontSize:22,fontWeight:"bold"}}>Danh sách bài tuyển dụng</Text>
            <BlockPost onPress={PressDetailPost} titlePost="Tuyển dụng lập trình viên" address="Hà Nội" wage="Thỏa thuận"/>
            <BlockPost titlePost="Tuyển dụng lập trình viên php và react native" address="Hà Nội" wage="Thỏa thuận"/>
            <BlockPost titlePost="Tuyển dụng lập trình viên" address="Hà Nội" wage="Thỏa thuận"/>
            <BlockPost titlePost="Tuyển dụng lập trình viên" address="Hà Nội" wage="Thỏa thuận"/>
            <BlockPost titlePost="Tuyển dụng lập trình viên" address="Hà Nội" wage="Thỏa thuận"/>
            <BlockPost titlePost="Tuyển dụng lập trình viên php và react native" address="Hà Nội" wage="Thỏa thuận"/>
            <BlockPost titlePost="Tuyển dụng lập trình viên" address="Hà Nội" wage="Thỏa thuận"/>
            <BlockPost titlePost="Tuyển dụng lập trình viên" address="Hà Nội" wage="Thỏa thuận"/>
            <BlockPost titlePost="Tuyển dụng lập trình viên" address="Hà Nội" wage="Thỏa thuận"/>
            <BlockPost titlePost="Tuyển dụng lập trình viên php và react native" address="Hà Nội" wage="Thỏa thuận"/>
            <BlockPost titlePost="Tuyển dụng lập trình viên" address="Hà Nội" wage="Thỏa thuận"/>
            <BlockPost titlePost="Tuyển dụng lập trình viên" address="Hà Nội" wage="Thỏa thuận"/>
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