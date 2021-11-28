import React from 'react';
import {ScrollView, StyleSheet,View,Text,Image, FlatList} from 'react-native';
import BlockPost from '../component/BlockPost';
import ItemCompany from '../component/ItemCompany';
import ItemPost from '../component/ItemPost';
import SearchBar from '../component/SearchBar';
function Home({navigation}) {
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          titlePost: 'Công ty TNHH một thành viên long thành',
          address: 'Ha nội',
          quantity: '200-300',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          titlePost: 'Công ty TNHH sữa rau câu long hải',
          address: 'Hà Giang',
          quantity: '100-300',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          titlePost: 'Công ty TNHH thuốc lá thăng long',
          address: 'Hải phòng',
          quantity: '50-100',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            titlePost: 'Công ty TNHH một thành viên long thành',
            address: 'Ha nội',
            quantity: '200-300',
          },
          {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            titlePost: 'Công ty TNHH sữa rau câu long hải',
            address: 'Hà Giang',
            quantity: '100-300',
          },
          {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            titlePost: 'Công ty TNHH thuốc lá thăng long',
            address: 'Hải phòng',
            quantity: '50-100',
          },
      ];
      const linkDetailCompany = () =>{
        navigation.navigate("DetailCompany");
      }
      const linkDetailPost = () =>{
        navigation.navigate("DetailPost");
      }
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
                      DATA.map((item, index) => (
                    <ItemCompany onPress={linkDetailCompany} key={index}  titlePost={item.titlePost} address={item.address} quantity={item.quantity}/>
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
                <ItemPost onPress={linkDetailPost} titlePost="Tuyển dụng lập trình viên" address="Hà Nội" wage="Thỏa thuận"/>
                <ItemPost onPress={linkDetailPost} titlePost="Tuyển dụng lập trình viên và đây là đoạn text dài dụng lập trình viên và đây" address="Hà Nội" wage="Thỏa thuận"/>
                <ItemPost onPress={linkDetailPost} titlePost="Tuyển dụng lập trình viên và đây là đoạn text dài" address="Hà Nội" wage="Thỏa thuận"/>
                <ItemPost onPress={linkDetailPost} titlePost="Tuyển dụng lập trình viên và đây là đoạn text dài" address="Hà Nội" wage="Thỏa thuận"/>
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