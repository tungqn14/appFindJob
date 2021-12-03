import React,{useState,useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import BlockPost from '../component/BlockPost';
import RenderHtml from 'react-native-render-html';
import { getTypeRank,getScale,getTypeTime } from '../provider/Helper';
import {
    Dimensions,
    Image,
    ImageBackground,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
 const  widthContentHTML  = Dimensions.get('screen').width;
export default function DetailPost({route, navigation}) {
    const { idPost} = route.params;
    const [detailPost,setDetailPost] = useState({});
    const [skill,setSkill] = useState({});
    const [welfare,setWelfare] = useState({});
   
  useEffect(() => {
      fetchDetailPost()
  }, [detailPost]);

  fetchDetailPost = async() => {
    const response = await fetch(`https://tungfindjob.herokuapp.com/api/detail-post-${idPost}`)
    .then(res => res.json())
    .then(result => { 
        setDetailPost(result.data.listPost);
        setSkill(result.data.skills);
        setWelfare(result.data.welfares);
     })   
    .catch(err => console.log(err))  
  }
  const sourceDes = {
    html: `<div style='width:100%;'>${detailPost.desPost}</div>`
  };
  const sourceReq = {
    html: `<div style='width:100%;'>${detailPost.reqPost}</div>`
  };

    return (
        <ScrollView style={{flex:1,height:"100%"}}>
        <View style={styles.container}>
        <View style={styles.topDetailPost}>
        
            <Text style={styles.titleDetailPost}>{detailPost.titlePost}</Text>
            <View style={{width:"100%",borderBottomWidth:1,borderBottomColor:"#80808024",marginVertical:7,paddingBottom:10}}>
                <Text style={{fontWeight:"bold",fontSize:16}}>Tên Công Ty:</Text>
                <Text style={{paddingVertical:5,fontSize:16}}>{detailPost.nameCompany}</Text>
            </View>
            <View style={{width:"100%",borderBottomWidth:1,borderBottomColor:"#80808024",marginVertical:7,paddingBottom:10}}>
                <Text style={{fontWeight:"bold",fontSize:16}}>Mức Lương:</Text>
                <Text style={{paddingVertical:5,fontSize:16}}>{detailPost.wage}</Text>
            </View>
            <View style={{width:"100%",borderBottomWidth:1,borderBottomColor:"#80808024",marginVertical:7,paddingBottom:10}}>
                <Text style={{fontWeight:"bold",fontSize:16}}>Nơi làm việc:</Text>
                <Text style={{paddingVertical:5,fontSize:16}}>{detailPost.address}</Text>
            </View>
            <View style={{width:"100%",borderBottomWidth:1,borderBottomColor:"#80808024",marginVertical:7,paddingBottom:10}}>
                <Text style={{fontWeight:"bold",fontSize:16}}>Hạn tuyển:</Text>
                <Text style={{paddingVertical:5,fontSize:16}}>{detailPost.deadline}</Text>
            </View>
            
            <View style={{width:"80%",borderBottomWidth:1,borderBottomColor:"#80808024",marginVertical:7,paddingBottom:10,paddingRight:20}}>
                <Text style={{fontWeight:"bold",fontSize:16}}>Yêu cầu:</Text>
                <View style={{width:"100%",paddingVertical:5,fontSize:16}}>
                { <RenderHtml
                contentWidth={widthContentHTML}
                source={sourceReq}
                /> }
               
                </View>
            </View>
            <View style={{width:"100%",borderBottomWidth:1,borderBottomColor:"#80808024",marginVertical:7,paddingBottom:10}}>
                <Text style={{fontWeight:"bold",fontSize:16}}>Mô tả:</Text>
                <View style={{paddingVertical:5,fontSize:16}}>
                { <RenderHtml
                contentWidth={widthContentHTML}
                source={sourceDes}
                /> }
                </View>
            </View>
         
        </View>
            <View style={styles.botDetailPost}>
            <TouchableOpacity style={[styles.btnApply,{backgroundColor:"white",borderColor:"blue"}]}>
                  <Text style={{color:"blue",fontSize:15,textTransform:"uppercase"}}>Lưu</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btnApply,{backgroundColor:"#e24c32",}]}>
                  <Text style={{color:"white",fontSize:15,textTransform:"uppercase"}}>Ứng tuyển</Text>
              </TouchableOpacity>
            </View>
           
        </View>
        </ScrollView>
       
    )
}
const styles = StyleSheet.create({
  
   container:{
    flex:1,
    height:"100%",
    justifyContent:"space-between",
   // backgroundColor:"#9e9e9e29",
   flexWrap:"wrap",
    flexDirection:"column",
   },
   topDetailPost:{
        borderTopColor:"gray",
        padding:15,
        height:"70%",
        width:"100%",
      
        flexBasis:"70%",
   },
   btnApply:{
        borderColor:"gray",
        borderWidth:1,
        width:150,
        padding: 10,
        alignItems:"center",
        borderRadius:5,
        marginHorizontal:5,
        
   },
    botDetailPost:{
        padding:15,
        flexDirection:"row",
        height:"25%",
        width:"100%",
        flexBasis:"25%",
       
    },
    titleDetailPost:{
        fontSize:18,
        fontWeight:"bold"
    },
    // inforDetail:{
    //     shadowOffset:{  width: 10,  height: 10,  },
    //     shadowColor: 'black',
    //     shadowOpacity: 1.0,
    //     borderWidth:1,
    //     backgroundColor:"white",
    //     borderColor:"gray"
    // },
    // wrapLine:{
    //    paddingHorizontal:10,
    //     width:"100%",
    //     marginVertical:10,
    //     borderBottomWidth:1,
    //     paddingBottom:10,
    //     borderColor:"#80808024",
    //     marginBottom:10
    // }
    });