import React,{useState,useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    Dimensions,
    Image,
    Linking,
    Pressable,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
import CustomInput from '../component/CustomInput';
import CustomButton from '../component/CustomButton';
import Logo from '../component/Logo';
  const WIDTH = Dimensions.get("window").width;
  const HEIGHT = Dimensions.get("window").height;
  const baseURL = "http://192.168.1.9:80/api/home";
export default function Login({navigation}) {
    const [email, setEmail] = useState("");
    const [errEmail, setErrEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errPassword, setErrPassword] = useState("");
    const loginApp = ()=>{
      if(email =="" && password == ""){
        alert("Email hoặc mật khẩu không được để trống !!");
      }else{
        // axios.get('/user?ID=12345')
        // .then(function (response) {
        //   console.log(response);
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });
      }
       // console.warn("Sign In");
        //alert(email+"--"+password);
    }
    const onFormRegister = ()=>{
       navigation.navigate("Register");
    }
    // useEffect(() => {
    //   const res = await fetch("")
      
    // }, [])
    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
<View style={styles.container}>
            <View style={styles.topImage}>
            <Logo/>
            </View>
            <View  style={styles.midForm}>
                    <CustomInput icon="envelope" keyBoardText="email-address" 
                    value={email} onChangeText={(anything)=>{setEmail(anything)}} 
                    setValue={setEmail} placeholder="Email"/>
                   {{errEmail} && <Text style={{marginVertical:10,color:"red"}}>{errEmail}</Text>}
                    <CustomInput icon="lock" secureTextEntry={true} value={password} 
                    onChangeText={(anything)=>{setPassword(anything)}} 
                    setValue={setPassword}  placeholder="Password"/>
                  {{errPassword} && <Text style={{marginVertical:10,color:"red"}}>{errPassword}</Text>}
                    <CustomButton onPress={loginApp} text="Đăng Nhập"/>
            </View>
            <View  style={styles.botBtn}>
                <Text style={{fontSize:18}}>Bạn chưa có tài khoản ?</Text>
                <Pressable onPress={onFormRegister}>
                    <Text style={{fontSize:18,color:"#3B71F3"}}>Đăng Ký</Text>
                </Pressable>
            </View>
        </View>
        </ScrollView>
        
    )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  topImage:{
        flex:1,
        height:0.3*HEIGHT,
  },
  midForm:{
    flex:1,
    height:0.5*HEIGHT,
    alignItems:"center",
    justifyContent:"center",
    width:"100%",
    paddingHorizontal:30,
    },
  botBtn:{
    flex:1,
    height:0.2*HEIGHT,
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
    fontSize:18
    },
  
  });