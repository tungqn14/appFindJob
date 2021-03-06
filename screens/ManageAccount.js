import React, { useEffect, useState } from "react";
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
import {connect} from 'react-redux';
import { server } from "../config";

function ManageAccount({navigation, user, dispatch}) {
  const [notifications, setNotifications] = useState([]);
  const logout = () => {
    axios
      .post(server + '/logout', {
        token: user.auth_token,
      })
      .then(function (response) {
        let res = response && response.data;
        if (res.status === 200) {
          dispatch({type: 'update_user', data: {}});
          navigation.navigate('Login');
        } else {
          console.warn(res.message);
        }
      })
      .catch(function (error) {
        console.warn('lỗi : ' + error);
      });
  };
  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    axios
      .post(server + '/get-data-notification', {
        token: user.auth_token,
      })
      .then(function (response) {
        let res = response && response.data;
        if (res.status === 200) {
          setNotifications(res.data);
        }
      })
      .catch(function (error) {
        console.error('lỗi : ' + error);
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
        <TouchableOpacity
          style={[styles.itemAccount, {}]}
          onPress={() => navigation.navigate('Favorite', user)}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="heart" style={{marginTop: 3}} size={15} />
            <Text style={{fontSize: 16, marginLeft: 10}}>Yêu thích </Text>
          </View>
          <Icon name="chevron-right" style={{marginTop: 3}} size={15} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.itemAccount, {}]}
          onPress={() => navigation.navigate('Notification', notifications)}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="bell" style={{marginTop: 3}} size={15} />
            <Text style={{fontSize: 16, marginLeft: 10}}>Thông báo </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginRight: 20, backgroundColor: 'red', paddingHorizontal: 5, borderRadius: 10}}>
              <Text style={{color: 'white'}}>{notifications.length}</Text>
            </View>
            <Icon name="chevron-right" style={{marginTop: 3}} size={15} />
          </View>
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
function mapState(state) {
  return {
    user: state.Home.user,
  };
}
export default connect(mapState)(ManageAccount);
