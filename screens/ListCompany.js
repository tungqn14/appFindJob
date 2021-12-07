import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View, Text, Image} from 'react-native';
import BlockCompany from '../component/BlockCompany';
import BlockPost from '../component/BlockPost';
import ItemCompany from '../component/ItemCompany';
import SearchBar from '../component/SearchBar';
import {getTypeRank, getScale, getTypeTime} from '../provider/Helper';

export default function ListCompany({navigation}) {
  const PressDetailPost = () => {
    navigation.navigate('DetailPost');
  };
  const [dataListCompany, setDataListCompany] = useState([]);
  useEffect(() => {
    fetchDataCompany();
  }, [dataListCompany]);
  const fetchDataCompany = async () => {
    await fetch('https://tungfindjob.herokuapp.com/api/list-company')
      .then(res => res.json())
      .then(result => {
        setDataListCompany(
          result.data.listCompany && result.data.listCompany.data,
        );
      })
      .catch(err => console.log(err));
  };

  return (
    <ScrollView style={styles.container}>
      <Text
        style={{
          textAlign: 'center',
          marginVertical: 20,
          fontSize: 22,
          fontWeight: 'bold',
        }}>
        Danh sách công ty tuyển dụng
      </Text>
      <View style={{width: '80%', paddingHorizontal: 10}}>
        {dataListCompany &&
          dataListCompany.map((item, index) => (
            <BlockCompany
              onPress={() => {
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
              quantity={getScale(item.scale)}
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
});
