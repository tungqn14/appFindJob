import React from 'react';
import {ScrollView, StyleSheet,View,Text,Image, FlatList} from 'react-native';
import BlockPost from '../component/BlockPost';
import ItemCompany from '../component/ItemCompany';
import ItemPost from '../component/ItemPost';
import SearchBar from '../component/SearchBar';
function Account({navigation}) {
    return (
         <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        <View style={styles.header}>
               <Text style={{color:"black",fontSize:20,marginTop:10,textAlign:"center"}}>This is account</Text>
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
  export default Account;