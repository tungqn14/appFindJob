import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import BlockPost from '../component/BlockPost';
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

function DetailCompany({navigation}) {
    return (
        <ScrollView style={{flex:1}}>
 <View style={styles.container}>
            <View style={styles.topCompany}>
                <ImageBackground source={require("../assets/images/bg.jpg")} style={{width:"100%",height:"100%"}} resizeMode="cover"/>
                <View style={styles.wrapAvatar}>
                    <Image
                style={styles.imageAvatar}
                resizeMode="cover"
                source={require('../assets/images/istockphoto.jpg')}/>
                </View>
                <Text style={styles.nameCompany}>CÔng ty TNHH một thành viên thăng long</Text>
            </View>
            <View style={styles.midCompany}>
            <Text style={{paddingLeft:10,marginBottom:10,fontSize:20,fontWeight:"bold",color:"#e24c32"}}>Thông tin của công ty</Text>
                <View style={styles.inforDetail}>
                    <View style={styles.wrapLine}>
                        <Text style={{color:"gray",fontSize:16,textTransform:"capitalize"}}>Quy mô:</Text>
                        <Text style={{color:"black",fontWeight:"bold",fontSize:16,textTransform:"capitalize"}}>100-200</Text>
                    </View>
                    <View style={styles.wrapLine}>
                        <Text style={{color:"gray",fontSize:16,textTransform:"capitalize"}}>Địa chỉ:</Text>
                        <Text style={{color:"black",fontWeight:"bold",fontSize:16,textTransform:"capitalize"}}>Hoàng hoa thám đóng đa</Text>
                    </View>
                    <View style={styles.wrapLine}>
                        <Text style={{color:"gray",fontSize:16,textTransform:"capitalize"}}>Tỉnh Thành Phố:</Text>
                        <Text style={{color:"black",fontWeight:"bold",fontSize:16,textTransform:"capitalize"}}>Thp hà Nội</Text>
                    </View>
                    <View style={styles.wrapLine}>
                        <Text style={{color:"gray",fontSize:16,textTransform:"capitalize"}}>Số điện thoại:</Text>
                        <Text style={{color:"black",fontWeight:"bold",fontSize:16,textTransform:"capitalize"}}>01254785412</Text>
                    </View>
                    <View style={styles.wrapLine}>
                        <Text style={{color:"gray",fontSize:16,textTransform:"capitalize"}}>Giới thiệu về công ty:</Text>
                        <Text style={{color:"black",fontWeight:"bold",fontSize:16,textTransform:"capitalize"}}>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Text>
                    </View>      
                        
                </View>  
        
            </View>
            <View style={styles.botCompany}>
                <Text style={{paddingLeft:10,marginBottom:20,fontSize:20,fontWeight:"bold",color:"#e24c32"}}>Việc làm của công ty</Text>
                <View style={{paddingHorizontal:10,backgroundColor:"white"}}>
                <BlockPost titlePost="Tuyển dụng lập trình viên" address="Hà Nội" wage="Thỏa thuận"/>
            <BlockPost titlePost="Tuyển dụng lập trình viên php và react native" address="Hà Nội" wage="Thỏa thuận"/>
            <BlockPost titlePost="Tuyển dụng lập trình viên" address="Hà Nội" wage="Thỏa thuận"/>
                </View>
            </View>
           
        </View>
        </ScrollView>
       
    )
}
const styles = StyleSheet.create({
  
   container:{
    flex:1,
    backgroundColor:"#9e9e9e29"
   },
   topCompany:{
    height:170,
    position:"relative"
   },
   midCompany:{
    //backgroundColor:"orange",
    borderTopWidth:1,
    borderTopColor:"gray",
    padding:15,
    flex:3,
    marginTop:"37%"
},
    botCompany:{
        padding:15,
        flex:1,
    },
    imageAvatar:{
    width:"100%",
    height:"100%"
    },
    wrapAvatar:{
        position:"absolute",
        bottom:-50,
        left:120,
        alignItems:"center",
        width:120,
        height:120,
        zIndex:999,
        justifyContent:"center",
        borderWidth:1,
        marginHorizontal:"auto"
    },
    nameCompany:{
        marginTop:60,
        fontWeight:"bold",
        textTransform:"uppercase",
        textAlign:"center",
        marginBottom:30,
        fontSize:19
    },
    inforDetail:{
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,
        borderWidth:1,
        backgroundColor:"white",
        borderColor:"gray"
    },
    wrapLine:{
       paddingHorizontal:10,
        width:"100%",
        marginVertical:10,
        borderBottomWidth:1,
        paddingBottom:10,
        borderColor:"#80808024",
        marginBottom:10
    }
    });
export default DetailCompany;