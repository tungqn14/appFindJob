import React,{useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
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
export default function Login({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onSignInPressed = ()=>{
        console.warn("Sign In");
    }
    const onFormRegister = ()=>{
       navigation.navigate("Register");
    }
    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
<View style={styles.container}>
            <View style={styles.topImage}>
            <Logo/>
            </View>
            <View  style={styles.midForm}>
                    <CustomInput icon="envelope" keyBoardText="email-address" value={email} setValue={setEmail} placeholder="Email"/>
                    <CustomInput icon="lock" secureTextEntry={true} value={password} setValue={setPassword} placeholder="Password"/>
                    <CustomButton onPress={onSignInPressed} text="Đăng Nhập"/>
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