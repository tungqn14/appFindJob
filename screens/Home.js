import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import ItemCompany from '../component/ItemCompany';
import ItemPost from '../component/ItemPost';
import {getTypeRank, getScale, getTypeTime} from '../provider/Helper';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { server } from "../config";

function Home({navigation, dispatch}) {
  const [dataCompany, setDataCompany] = useState([]);
  const [dataPost, setDataPost] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem('companysHome').then(res => {
      if (res) {
        setDataCompany(JSON.parse(res));
      }
    });
    fetchDataCompany();
  }, []);
  useEffect(() => {
    AsyncStorage.getItem('jobsHome').then(res => {
      if (res) {
        setDataPost(JSON.parse(res));
      }
    });
    fetchDataPost();
  }, []);
  const fetchDataCompany = async () => {
    await fetch(server + '/home')
      .then(res => res.json())
      .then(result => {
        let data = (result && result.data && result.data.data) || [];
        setDataCompany(data);
        let dataCache = data.slice(0, 5);
        AsyncStorage.setItem('companysHome', JSON.stringify(dataCache));
      })
      .catch(err => console.log(err));
  };
  const fetchDataPost = async () => {
    await fetch(server + '/list-post-home')
      .then(res => res.json())
      .then(result => {
        let data = (result && result.datas && result.datas.data) || [];
        setDataPost(data);
        let dataCache = data.slice(0, 5);
        AsyncStorage.setItem('jobsHome', JSON.stringify(dataCache));
      })
      .catch(err => console.log(err));
  };
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#e24c32', fontSize: 30, fontWeight: 'bold'}}>
            Dev
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              marginTop: 10,
              marginLeft: 5,
            }}>
            IT
          </Text>
        </View>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            marginTop: 10,
            textAlign: 'center',
          }}>
          Công nghệ dẫn đầu cuộc chơi
        </Text>
      </View>
      {/*<SearchBar placeholder="Tìm kiếm " />*/}
      <View style={styles.listPostVip}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.titleListPost}>Công ty tuyển dụng</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('CompanyNavigation')}>
            <Text>Xem tất cả</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator
          style={{paddingVertical: 5}}>
          {dataCompany.map((item, index) => (
            <ItemCompany
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('DetailCompany', {
                  idCompany: item.id,
                  address: item.location.name,
                  street: item.users[0].address,
                  phone: item.users[0].phone,
                });
              }}
              key={index}
              titlePost={item.nameCompany}
              address={item.location.name}
              logo={item.logo}
              quantity={getScale(item.scale)}
            />
          ))}
        </ScrollView>
      </View>
      <View style={{width: '100%', flex: 1, height: 120, marginVertical: 30}}>
        <Image
          style={{width: '100%', height: '100%'}}
          resizeMode="cover"
          source={require('../assets/images/banner.png')}
        />
      </View>
      <View style={styles.listPostVip}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.titleListPost}>Công ty tuyển dụng</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('ListJobNavigation')}>
            <Text>Xem tất cả</Text>
          </TouchableOpacity>
        </View>
        {dataPost.map((item, index) => (
          <ItemPost
            key={index}
            onPress={() => {
              navigation.navigate('DetailPost', {
                idPost: item.id_post,
              });
            }}
            titlePost={item.titlePost}
            address={item.users.company.location.name}
            wage={item.wage}
            logo={item.users.company.logo}
          />
        ))}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  listPostVip: {},
  titleListPost: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 15,
  },
  header: {},
});
export default connect()(Home);
