import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ScrollView, StyleSheet,View,Text,Image, FlatList, TouchableOpacity} from 'react-native';
import BlockPost from '../component/BlockPost';
import ItemCompany from '../component/ItemCompany';
import ItemPost from '../component/ItemPost';
import SearchBar from '../component/SearchBar';
function ManageAccount({navigation}) {
    return (
         <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        <View style={styles.header}>
              <TouchableOpacity style={[styles.itemAccount,{ borderTopWidth:1,borderTopColor:"gray",}]}>
              <View style={{flexDirection:"row"}}>
                <Icon name="user" style={{marginTop:3}} size={15}></Icon>
                <Text style={{ fontSize:16,marginLeft:10}}>Hồ sơ của tôi </Text>  
              </View>
                <Icon name="chevron-right" style={{marginTop:3}} size={15}></Icon>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.itemAccount,{}]}>
              <View style={{flexDirection:"row"}}>
                <Icon name="heart" style={{marginTop:3}} size={15}></Icon>
                <Text style={{ fontSize:16,marginLeft:10}}>Yêu thích </Text>  
              </View>
                <Icon name="chevron-right" style={{marginTop:3}} size={15}></Icon>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.itemAccount,{}]}>
              <View style={{flexDirection:"row"}}>
                <Icon name="sign-out-alt" style={{marginTop:3}} size={15}></Icon>
                <Text style={{ fontSize:16,marginLeft:10}}>Đăng xuất </Text>  
              </View>
                <Icon name="chevron-right" style={{marginTop:3}} size={15}></Icon>
              </TouchableOpacity>
        </View>
        
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    
    itemAccount:{
        flexDirection:"row",
        padding:10,
      borderBottomWidth:1,
      borderBottomColor:"gray",
      justifyContent:"space-between",
    },
    
  });
  export default ManageAccount.js;