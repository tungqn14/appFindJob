import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
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
export default function CustomInput({numberOfLines,multiline,onChange,value,placeholder,setValue,secureTextEntry,icon,keyBoardText}) {
    
    return (
        <View style={styles.container}>
         <Icon style={styles.icon} size={16} name={icon} />
            <TextInput
            style={styles.inputText}
                placeholder={placeholder}
                value={value}
                onChangeText={setValue}
                secureTextEntry={secureTextEntry}
                keyboardType={keyBoardText}
                onChange={onChange}
                multiline={multiline}
                numberOfLines={numberOfLines}
            />
        </View>
    )
}
const styles = StyleSheet.create({
  container:{
    width:"100%",
    borderWidth:1,
    borderColor:"gray",
    paddingHorizontal:20,
    flexDirection:"row",
    fontSize:15,
    marginVertical:10
  },
  inputText:{
    marginLeft:10,
    fontSize:16,
    width:"100%"
  },
  icon:{
      paddingTop:15
  }
  });