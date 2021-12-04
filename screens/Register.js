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

  const width = Dimensions.get("window").width;
  const HEIGHT = Dimensions.get("window").height;

export default function Register({navigation}) {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const onFormLogin = ()=>{
      navigation.navigate("Login");
    }
    const onRegisterPressed = ()=>{
        console.warn("Register");
    }
    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
<View style={styles.container}>
            <View style={styles.topImage}>
                <Logo/>
            </View>
            <View  style={styles.midForm}>
                    <CustomInput icon="user" value={userName} setValue={setUserName} placeholder="UserName"/>
                    <CustomInput keyBoardText="email-address" icon="envelope" value={email} setValue={setEmail} placeholder="Email"/>
                    <CustomInput keyBoardText="numeric" icon="phone" value={phone} setValue={setPhone} placeholder="Telephone"/>
                    <CustomInput icon="lock" secureTextEntry={true} value={password} setValue={setPassword} placeholder="Password"/>
                    <CustomInput icon="location-arrow" value={userName} setValue={setUserName} placeholder="Địa chỉ "/>
                    <CustomInput icon="atom" value={userName} setValue={setUserName} placeholder="Kĩ năng công nghệ "/>
                    <CustomInput icon="money-bill-wave" value={userName} setValue={setUserName} placeholder="Tiền lương mong muốn"/>
                    <CustomInput icon="id-card" value={userName} setValue={setUserName} placeholder="Chức vụ"/>
                    <CustomInput numberOfLines={4} multiline  value={userName} setValue={setUserName} placeholder="Giới thiệu bản thân"/>
                    <CustomButton onPress={onRegisterPressed} text="Đăng Ký"/>
            </View>
            <View  style={styles.botBtn}>
                <Text style={{fontSize:18}}>Bạn đã có tài khoản ?</Text>
                <Pressable onPress={onFormLogin}>
                    <Text style={{fontSize:18,color:"#3B71F3"}}>Đăng Nhập</Text>
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
        alignItems:"center",
        justifyContent:"center",
        marginBottom:20,
  },
  midForm:{
    flex:1,
  
    alignItems:"center",
    justifyContent:"center",
    width:"100%",
    paddingHorizontal:30,
    },
  botBtn:{
    flex:1,
    marginTop:30,
  marginBottom:20,
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
    fontSize:18
    },
  });