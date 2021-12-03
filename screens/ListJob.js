import React,{useState,useEffect} from 'react';
import {ScrollView, StyleSheet,View,Text,Image} from 'react-native';
import BlockPost from '../component/BlockPost';
import SearchBar from '../component/SearchBar';
import { getTypeRank,getScale,getTypeTime } from '../provider/Helper';
import ItemPost from '../component/ItemPost';
export default function ListJob({navigation}) {
  const [dataListPost, setDataListPost] = useState([]);
  useEffect(() => {
    fetchDataPost()
  }, [dataListPost]);

  fetchDataPost = async() => {
    const response = await fetch('https://tungfindjob.herokuapp.com/api/list-post-all')
    .then(res => res.json())
    .then(result => { 
        setDataListPost(result.datas.data)
     })   
    .catch(err => console.log(err))  
  }
    
    return (
         <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        <Text style={{textAlign:"center",marginVertical:20,fontSize:22,fontWeight:"bold"}}>Danh sách bài tuyển dụng</Text>
        {
            dataListPost.map((item, index) => (
                    <ItemPost key={index} onPress={()=>{
                       navigation.navigate('DetailPost', {
                        idPost: item.id_post
                       
          })
                    }} titlePost={item.titlePost} address={item.users.company.location.name} wage={item.wage}/>
                  )
               )
        }
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