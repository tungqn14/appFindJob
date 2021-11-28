import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Dimensions,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
  } from 'react-native';
  const width = Dimensions.get("window").width;
  const HEIGHT = Dimensions.get("window").height;
export default function CustomInput({value,placeholder,setValue,secureTextEntry,icon,keyBoardText}) {
    
    return (
        <View style={styles.container}>
         <Icon style={styles.icon} size={25} name={icon} />
            <TextInput
            style={styles.inputText}
                placeholder={placeholder}
                value={value}
                onChangeText={setValue}
                secureTextEntry={secureTextEntry}
                keyboardType={keyBoardText}
            />
        </View>
    )
}
const styles = StyleSheet.create({
  container:{
    width:"100%",
    borderWidth:1,
    borderColor:"gray",
    paddingHorizontal:30,
    flexDirection:"row",
    fontSize:20,
    marginVertical:10
  },
  inputText:{
    marginLeft:10,
    fontSize:18,
    width:"100%"
  },
  icon:{
      paddingTop:10
  }
  });