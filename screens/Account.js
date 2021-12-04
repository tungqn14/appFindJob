import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ScrollView, StyleSheet,View,Text,Image, FlatList, TouchableOpacity} from 'react-native';
import BlockPost from '../component/BlockPost';
import ItemCompany from '../component/ItemCompany';
import ItemPost from '../component/ItemPost';
import SearchBar from '../component/SearchBar';
function Account({navigation}) {
    return (
        
            <View style={styles.container}>
            <ScrollView style={{flex:1}}>  
                <View style={styles.topCompany}>
                    <View style={styles.wrapAvatar}>
                        <Image
                    style={styles.imageAvatar}
                    resizeMode="cover"
                    source={require('../assets/images/avatar.png')}/>
                    </View>             
                </View>
                <View style={styles.midCompany}>
                <Text style={styles.nameCompany}>Phạm Văn Tèo</Text>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={{marginBottom:10,fontSize:20,fontWeight:"bold",color:"#e24c32"}}>Thông tin cá nhân</Text>
                <TouchableOpacity>
                    <Text style={{fontSize:19,color:"blue"}}>Cập nhật</Text>
                </TouchableOpacity>
                </View>
                    <View style={styles.inforDetail}>
                        <View style={styles.wrapLine}>
                            <Text style={{color:"gray",fontWeight:"bold",fontSize:16,textTransform:"capitalize"}}>Giới tính:</Text>
                            <Text style={{color:"black",fontSize:16,textTransform:"capitalize"}}>Nam</Text>
                        </View>
                        <View style={styles.wrapLine}>
                            <Text style={{color:"gray",fontWeight:"bold",fontSize:16,textTransform:"capitalize"}}>Địa chỉ:</Text>
                            <Text style={{color:"black",fontSize:16,textTransform:"capitalize"}}>
                        360 hàng mã hà nội
                            </Text>
                        </View>
                        <View style={styles.wrapLine}>
                            <Text style={{color:"gray",fontWeight:"bold",fontSize:16,textTransform:"capitalize"}}>Email:</Text>
                            <Text style={{color:"black",fontSize:16,textTransform:"capitalize"}}>abc@gmail.com</Text>
                        </View>
                        <View style={styles.wrapLine}>
                            <Text style={{color:"gray",fontWeight:"bold",fontSize:16,textTransform:"capitalize"}}>Vị trí:</Text>
                            <Text style={{color:"black",fontSize:16,textTransform:"capitalize"}}>Frontend developer</Text>
                        </View>
                        <View style={styles.wrapLine}>
                            <Text style={{color:"gray",fontWeight:"bold",fontSize:16,textTransform:"capitalize"}}>Kĩ năng:</Text>
                            <Text style={{color:"black",fontSize:16,textTransform:"capitalize"}}>React native,Php</Text>
                        </View>
                        <View style={styles.wrapLine}>
                            <Text style={{color:"gray",fontWeight:"bold",fontSize:16,textTransform:"capitalize"}}>Tiền lương mong muốn:</Text>
                            <Text style={{color:"black",fontSize:16,textTransform:"capitalize"}}>10.000.000 VNĐ</Text>
                        </View>
                        <View style={styles.wrapLine}>
                            <Text style={{color:"gray",fontWeight:"bold",fontSize:16,textTransform:"capitalize"}}>Số điện thoại:</Text>
                            <Text style={{color:"black",fontSize:16,textTransform:"capitalize"}}>02154236987</Text>
                        </View>
                        <View style={styles.wrapLine}>
                            <Text style={{color:"gray",fontWeight:"bold",fontSize:16,textTransform:"capitalize"}}>Giới thiệu bản thân:</Text>
                            <Text style={{color:"black",fontSize:16,textTransform:"capitalize"}}>ko có gì  </Text>
                        </View>      
                            
                    </View>  
            
                </View>
                
           </ScrollView> 
            </View>
        
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        
       },
       topCompany:{ 
        height:50,
        position:"relative"
       },
       midCompany:{
        borderTopColor:"gray",
        padding:15,
        flex:3,
        marginTop:"23%"
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
            bottom:-80,
            left:120,
            alignItems:"center",
            width:120,
            height:120,
            zIndex:999,
            justifyContent:"center",          
            marginHorizontal:"auto"
        },
        nameCompany:{
            
            fontWeight:"bold",
            textTransform:"uppercase",
            textAlign:"center",
           borderBottomWidth:1,
           marginBottom:10,
            fontSize:16,
            paddingBottom:10,
        },
        inforDetail:{
            
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
  export default Account;