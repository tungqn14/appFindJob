import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Linking
} from 'react-native';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: require('../assets/images/avatar.png'),
      user: {},
    };
  }
  componentDidMount() {
    AsyncStorage.getItem('user').then(res => {
      let user = JSON.parse(res);
      let img = user.avatar
        ? {uri: user.avatar}
        : require('../assets/images/avatar.png');
      this.setState({user: user, img: img});
    });
  }

  render() {
    const {img, user} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <ScrollView style={{flex: 1}}>
          <View style={styles.topCompany}>
            <View style={styles.wrapAvatar}>
              <Image
                style={styles.imageAvatar}
                resizeMode="cover"
                source={img}
              />
            </View>
          </View>
          <View style={styles.midCompany}>
            <Text style={styles.nameCompany}>{user && user.fullName}</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  marginBottom: 10,
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#e24c32',
                }}>
                Thông tin cá nhân
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('UpdateAcount', user)}>
                <Text style={{fontSize: 19, color: 'blue'}}>Cập nhật</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inforDetail}>
              <View style={styles.wrapLine}>
                <Text
                  style={{
                    color: 'gray',
                    fontWeight: 'bold',
                    fontSize: 16,
                    textTransform: 'capitalize',
                  }}>
                  Ngày sinh:
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 16,
                    textTransform: 'capitalize',
                  }}>
                  {user && user.birthDay}
                </Text>
              </View>
              <View style={styles.wrapLine}>
                <Text
                  style={{
                    color: 'gray',
                    fontWeight: 'bold',
                    fontSize: 16,
                    textTransform: 'capitalize',
                  }}>
                  Địa chỉ:
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 16,
                    textTransform: 'capitalize',
                  }}>
                  {user && user.address}
                </Text>
              </View>
              <View style={styles.wrapLine}>
                <Text
                  style={{
                    color: 'gray',
                    fontWeight: 'bold',
                    fontSize: 16,
                    textTransform: 'capitalize',
                  }}>
                  Email:
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 16,
                    textTransform: 'capitalize',
                  }}>
                  {user && user.email}
                </Text>
              </View>
              <View style={styles.wrapLine}>
                <Text
                  style={{
                    color: 'gray',
                    fontWeight: 'bold',
                    fontSize: 16,
                    textTransform: 'capitalize',
                  }}>
                  Vị trí:
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 16,
                    textTransform: 'capitalize',
                  }}>
                  {user && user.position}
                </Text>
              </View>
              <View style={styles.wrapLine}>
                <Text
                  style={{
                    color: 'gray',
                    fontWeight: 'bold',
                    fontSize: 16,
                    textTransform: 'capitalize',
                  }}>
                  Kinh nghiệm:
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 16,
                    textTransform: 'capitalize',
                  }}>
                  {user && user.exp}
                </Text>
              </View>
              <View style={styles.wrapLine}>
                <Text
                  style={{
                    color: 'gray',
                    fontWeight: 'bold',
                    fontSize: 16,
                    textTransform: 'capitalize',
                  }}>
                  Tiền lương mong muốn:
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 16,
                    textTransform: 'capitalize',
                  }}>
                  {user && user.desiredMoney}
                </Text>
              </View>
              <View style={styles.wrapLine}>
                <Text
                  style={{
                    color: 'gray',
                    fontWeight: 'bold',
                    fontSize: 16,
                    textTransform: 'capitalize',
                  }}>
                  Số điện thoại:
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 16,
                    textTransform: 'capitalize',
                  }}>
                  {user && user.phone}
                </Text>
              </View>
              <View style={styles.wrapLine}>
                <Text
                  style={{
                    color: 'gray',
                    fontWeight: 'bold',
                    fontSize: 16,
                    textTransform: 'capitalize',
                  }}>
                  Giới thiệu bản thân:
                </Text>
                <Text
                  style={{
                    color: 'gray',
                    fontWeight: 'bold',
                    fontSize: 16,
                    textTransform: 'capitalize',
                  }}>
                  {user && user.descripYourself}
                </Text>
              </View>
              <View style={styles.wrapLine}>
                <Text
                  style={{
                    color: 'gray',
                    fontWeight: 'bold',
                    fontSize: 16,
                    textTransform: 'capitalize',
                  }}>
                  CV:
                </Text>
                <Text
                  onPress={() => Linking.openURL(user && user.cv)}
                  style={{
                    color: 'gray',
                    fontWeight: 'bold',
                    fontSize: 16,
                    textTransform: 'capitalize',
                  }}>
                  {user && user.cv}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topCompany: {
    height: 50,
    position: 'relative',
  },
  midCompany: {
    borderTopColor: 'gray',
    padding: 15,
    flex: 3,
    marginTop: '23%',
  },
  botCompany: {
    padding: 15,
    flex: 1,
  },
  imageAvatar: {
    width: '100%',
    height: '100%',
  },
  wrapAvatar: {
    position: 'absolute',
    bottom: -80,
    left: 120,
    alignItems: 'center',
    width: 120,
    height: 120,
    zIndex: 999,
    justifyContent: 'center',
    marginHorizontal: 'auto',
  },
  nameCompany: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    borderBottomWidth: 1,
    marginBottom: 10,
    fontSize: 16,
    paddingBottom: 10,
  },
  inforDetail: {},
  wrapLine: {
    paddingHorizontal: 10,
    width: '100%',
    marginVertical: 10,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: '#80808024',
    marginBottom: 10,
  },
});
export default Account;
