import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Linking,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function ManageAccount({navigation}) {
  let user = {};
  AsyncStorage.getItem('user').then(res => {
    if (res) {
      console.log(res);
      user = JSON.parse(res);
    }
  });
  const logout = () => {
    axios
      .post('https://tungfindjob.herokuapp.com/api/logout', {
        token: user.auth_token,
      })
      .then(function (response) {
        let res = response && response.data;
        if (res.status === 200) {
          AsyncStorage.clear();
          navigation.navigate('Login');
        } else {
          console.warn(res.message);
        }
      })
      .catch(function (error) {
        console.warn('lỗi : ' + error);
      });
  };
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Account')}
          style={[
            styles.itemAccount,
            {borderTopWidth: 1, borderTopColor: 'gray'},
          ]}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="user" style={{marginTop: 3}} size={15} />
            <Text style={{fontSize: 16, marginLeft: 10}}>Hồ sơ của tôi </Text>
          </View>
          <Icon name="chevron-right" style={{marginTop: 3}} size={15} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemAccount, {}]}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="heart" style={{marginTop: 3}} size={15} />
            <Text style={{fontSize: 16, marginLeft: 10}}>Yêu thích </Text>
          </View>
          <Icon name="chevron-right" style={{marginTop: 3}} size={15} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemAccount, {}]} onPress={logout}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="sign-out-alt" style={{marginTop: 3}} size={15} />
            <Text style={{fontSize: 16, marginLeft: 10}}>Đăng xuất </Text>
          </View>
          <Icon name="chevron-right" style={{marginTop: 3}} size={15} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  itemAccount: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    justifyContent: 'space-between',
  },
});
export default ManageAccount;
