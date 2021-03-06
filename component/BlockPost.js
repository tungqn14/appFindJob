import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Dimensions,
    Image,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';

export default function BlockPost({onPress,text,titlePost,address,wage}) {
    
    return (
        <TouchableOpacity onPress={onPress} style={styles.blockPost}>
          
          {/* <View style={{width:"30%",height:90,backgroundColor:"green"}}>
            <Image
            style={styles.imagePost}
            resizeMode="cover"
            source={require('../assets/images/istockphoto.jpg')}
        />
          </View>  */}
            <View style={styles.inforPost}>
                <Text style={styles.titilePost}>{titlePost}</Text>
                <View >
                    <View style={{flexDirection:"row",width:"100%"}}>
                     <Icon style={{marginRight:10}} size={15} name="map-marker" />
                        <Text style={{color:"gray",fontSize:15,fontWeight:"600",textTransform:"capitalize"}}>Địa chỉ:</Text>
                        <Text style={{color:"#e24c32",fontSize:15,marginLeft:5,textTransform:"capitalize"}}>{address}</Text>
                    </View>
                    <View style={{flexDirection:"row",width:"100%",paddingVertical:5}}>
                    <Icon style={{marginRight:10}} size={15} name="dollar"/>
                        <Text style={{color:"gray",fontSize:15,fontWeight:"600",textTransform:"capitalize"}}>Lương:</Text>
                        <Text style={{color:"#e24c32",fontSize:15,marginLeft:5,textTransform:"capitalize"}}>{wage}</Text>
                    </View>
                </View>
            
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
  
    blockPost:{
        width:"100%",
        flexDirection:"row",
        marginVertical:5,
        width:"100%",
        padding: 10,
        borderBottomWidth:1,
        borderBottomColor:"gray"
    },
    inforPost:{
        width:"100%",
        marginLeft:"2%"
    },
    titilePost:{
        fontSize:16,
        fontWeight:"bold",
        width:"100%",
       textTransform:"uppercase",
       marginVertical:5,
    },
    imagePost:{
        width:"100%",
        height:"100%",
    }
    });