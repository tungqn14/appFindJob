import React, {useState, useEffect} from 'react';
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
  Alert,
} from 'react-native';
import CustomInput from '../component/CustomInput';
import CustomButton from '../component/CustomButton';
const axios = require('axios');
import Logo from '../component/Logo';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const baseURL = 'http://192.168.1.9:80/api/home';
import {connect} from 'react-redux';
import {server} from "../config";

function Login({navigation, user, dispatch}) {
  useEffect(() => {
    if (user && user.id) {
      navigation.navigate('ManageAccount');
    }
  }, []);
  const [email, setEmail] = useState('');
  const [errEmail, setErrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errPassword, setErrPassword] = useState('');
  const loginApp = () => {
    if (email == '' && password == '') {
      Alert.alert('Thông báo', 'Email hoặc mật khẩu không được để trống !!');
    } else {
      axios
        .post(server + '/login', {
          email: email,
          password: password,
        })
        .then(function (response) {
          let res = response && response.data;
          if (res.success) {
            dispatch({type: 'update_user', data: res.data});
            navigation.navigate('ManageAccount');
          } else {
            Alert.alert('Thông báo', res.data);
          }
        })
        .catch(function (error) {
          Alert.alert(
            'Thông báo',
            'Có lỗi sảy ra vui lòng liên hệ quản trị viên',
          );
        });
    }
  };
  const onFormRegister = () => {
    navigation.navigate('Register');
  };
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.topImage}>
          <Logo />
        </View>
        <View style={styles.midForm}>
          <CustomInput
            icon="envelope"
            keyBoardText="email-address"
            value={email}
            onChangeText={anything => {
              setEmail(anything);
            }}
            setValue={setEmail}
            placeholder="Email"
          />
          {{errEmail} && (
            <Text style={{marginVertical: 10, color: 'red'}}>{errEmail}</Text>
          )}
          <CustomInput
            icon="lock"
            secureTextEntry={true}
            value={password}
            onChangeText={anything => {
              setPassword(anything);
            }}
            setValue={setPassword}
            placeholder="Password"
          />
          {{errPassword} && (
            <Text style={{marginVertical: 10, color: 'red'}}>
              {errPassword}
            </Text>
          )}
          <CustomButton onPress={loginApp} text="Đăng Nhập" />
        </View>
        <View style={styles.botBtn}>
          <Text style={{fontSize: 18}}>Bạn chưa có tài khoản ?</Text>
          <Pressable onPress={onFormRegister}>
            <Text style={{fontSize: 18, color: '#3B71F3'}}>Đăng Ký</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topImage: {
    flex: 1,
    height: 0.3 * HEIGHT,
  },
  midForm: {
    flex: 1,
    height: 0.5 * HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 30,
  },
  botBtn: {
    flex: 1,
    height: 0.2 * HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    fontSize: 18,
  },
});
function mapState(state) {
  return {
    user: state.Home.user,
  };
}
export default connect(mapState)(Login);
