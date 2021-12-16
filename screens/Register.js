import React, {useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CustomInput from '../component/CustomInput';
import CustomButton from '../component/CustomButton';
import Logo from '../component/Logo';
const axios = require('axios');
const width = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import {connect} from 'react-redux';
import {server} from "../config";

function Register({navigation, dispatch}) {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const onFormLogin = () => {
    navigation.navigate('Login');
  };
  const onRegisterPressed = () => {
    let isError = false;
    let FunCheck = (check, mgs) => {
      if (check) {
        if (!isError) {
          alert(mgs);
        }
        isError = true;
      }
    };
    FunCheck(email === '', 'Vui lòng nhập email');
    FunCheck(phone === '', 'Vui lòng nhập SĐT');
    FunCheck(userName === '', 'Vui lòng nhập tên hiển thị');
    FunCheck(password === '', 'Vui lòng nhập mật khẩu');
    if (!isError) {
      axios
        .post(server + '/register', {
          email: email,
          phone: phone,
          fullName: userName,
          password: password,
        })
        .then(function (response) {
          let res = response && response.data;
          if (res.success) {
            dispatch({type: 'update_user', data: res.data});
            navigation.navigate('ManageAccount');
          } else {
            Alert.alert('Thông báo', res.message);
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
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.topImage}>
          <Logo />
        </View>
        <View style={styles.midForm}>
          <CustomInput
            icon="user"
            value={userName}
            setValue={setUserName}
            placeholder="Full name"
          />
          <CustomInput
            keyBoardText="email-address"
            icon="envelope"
            value={email}
            setValue={setEmail}
            placeholder="Email"
          />
          <CustomInput
            keyBoardText="numeric"
            icon="phone"
            value={phone}
            setValue={setPhone}
            placeholder="Telephone"
          />
          <CustomInput
            icon="lock"
            secureTextEntry={true}
            value={password}
            setValue={setPassword}
            placeholder="Password"
          />
          {/*<CustomInput icon="location-arrow" value={userName} setValue={setUserName} placeholder="Địa chỉ "/>*/}
          {/*<CustomInput icon="atom" value={userName} setValue={setUserName} placeholder="Kĩ năng công nghệ "/>*/}
          {/*<CustomInput icon="money-bill-wave" value={userName} setValue={setUserName} placeholder="Tiền lương mong muốn"/>*/}
          {/*<CustomInput icon="id-card" value={userName} setValue={setUserName} placeholder="Chức vụ"/>*/}
          {/*<CustomInput numberOfLines={4} multiline  value={userName} setValue={setUserName} placeholder="Giới thiệu bản thân"/>*/}
          <CustomButton onPress={onRegisterPressed} text="Đăng Ký" />
        </View>
        <View style={styles.botBtn}>
          <Text style={{fontSize: 18}}>Bạn đã có tài khoản ?</Text>
          <Pressable onPress={onFormLogin}>
            <Text style={{fontSize: 18, color: '#3B71F3'}}>Đăng Nhập</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  midForm: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 30,
  },
  botBtn: {
    flex: 1,
    marginTop: 30,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    fontSize: 18,
  },
});
export default connect()(Register);
