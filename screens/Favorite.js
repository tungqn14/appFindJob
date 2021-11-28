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

function Favorite({onPress,text,titlePost,address,wage}) {

    return (
        <ScrollView style={{flex:1,height:"100%"}}>
            <View style={styles.container}>
                <Text>Hello favourite</Text>
            
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
export default Favorite;