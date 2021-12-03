import React,{useEffect, useState} from 'react';
import {ScrollView, StyleSheet,View,Text,Image, FlatList} from 'react-native';
import BlockPost from '../component/BlockPost';
import ItemCompany from '../component/ItemCompany';
import ItemPost from '../component/ItemPost';
import SearchBar from '../component/SearchBar';
import { getTypeRank,getScale,getTypeTime } from '../provider/Helper';

function Home({navigation}) {
  const [dataCompany, setDataCompany] = useState([]);
  const [dataPost, setDataPost] = useState([]);
  useEffect(() => {
      fetchDataCompany()
  }, [dataCompany]);
  useEffect(() => {
    fetchDataPost()
  }, [dataPost]);
  fetchDataCompany = async() => {
    const response = await fetch('https://tungfindjob.herokuapp.com/api/home')
    .then(res => res.json())
    .then(result => { 
      setDataCompany(result.data.data);
     })   
    .catch(err => console.log(err))  
  }
  fetchDataPost = async() => {
    const response = await fetch('https://tungfindjob.herokuapp.com/api/list-post-home')
    .then(res => res.json())
    .then(result => { 
      setDataPost(result.datas.data)
     })   
    .catch(err => console.log(err))  
  }
  
      const linkDetailCompany = () =>{
        navigation.navigate("DetailCompany");
      }
      const linkDetailPost = () =>{
        navigation.navigate("DetailPost");
      }
       console.log(dataPost);
    return (
         <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        <View style={styles.header}>
               <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                  <Text style={{color:"#e24c32",fontSize:30,fontWeight:"bold"}}>
                    Dev
                    </Text>
                    <Text style={{color:"black",fontSize:15,marginTop:10,marginLeft:5}}>IT</Text>
               </View>
               <Text style={{color:"black",fontSize:20,marginTop:10,textAlign:"center"}}>Công nghệ dẫn đầu cuộc chơi</Text>
        </View>
            <SearchBar placeholder="Tìm kiếm "/>
           
            <View style={styles.listPostVip}>
                <Text style={styles.titleListPost}>Công ty tuyển dụng</Text>
                <ScrollView  
            horizontal
            showsHorizontalScrollIndicator
            style={{paddingVertical:5}}>
                  {
                    dataCompany.map((item, index) => (
                    <ItemCompany onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('DetailCompany', {
            idCompany: item.id,
            address:item.location.name,
            street:item.users[0].address,
            phone:item.users[0].phone,
           
          })

        }} key={index}  titlePost={item.nameCompany} address={item.location.name} quantity={ getScale(item.scale)}/>
                  ))
                  }
                </ScrollView> 
                
            </View>
            <View style={{width:"100%",flex:1,height:120,marginVertical:30}}>
                <Image
                style={{width:"100%",height:"100%"}}
                resizeMode="cover"
                source={require('../assets/images/banner.png')}
                />
            </View>
            <View style={styles.listPostVip}>
                <Text style={styles.titleListPost}>Tin tuyển dụng</Text>
               {
                dataPost.map((item, index) => (
                    <ItemPost key={index} onPress={()=>{
                       navigation.navigate('DetailPost', {
                        idPost: item.id_post,
          })
                    }} titlePost={item.titlePost} address={item.users.company.location.name} wage={item.wage}/>
                  )
               )
               }
               
            </View>
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
    },
    header:{

    }
  });
  export default Home;