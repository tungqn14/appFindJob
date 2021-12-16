import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import BlockCompany from '../component/BlockCompany';
import SearchBar from '../component/SearchBar';
import {getTypeRank, getScale, getTypeTime} from '../provider/Helper';
import css from '../css';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {server} from '../config';

function ListCompany({navigation, companys, dispatch, locations}) {
  const [dataListCompany, setDataListCompany] = useState(companys || []);
  const [search, setSearch] = useState(false);
  const [valSearch, setValSearch] = useState('');
  const [cacheDom, setCacheDom] = useState(true);
  const [dataSearch, setDataSearch] = useState(companys || []);
  const [dataLocation, setDataLocation] = useState(locations || []);
  const [valSearchLocation, setValSearchLocation] = useState('');
  const [modalLocation, setModalLocation] = useState(false);
  const [location, setLocation] = useState({});
  useEffect(() => {
    fetchDataCompany();
  }, []);
  const fetchDataCompany = async () => {
    await fetch(server + '/list-company')
      .then(res => res.json())
      .then(result => {
        let data = (result.data && result.data.listCompany) || [];
        setDataListCompany(data);
        setDataSearch(data);
        let dataCache = data.slice(0, 15);
        AsyncStorage.setItem('companys', JSON.stringify(dataCache));
        dispatch({type: 'update_companys', data: data});
      })
      .catch(err => console.log(err));
  };
  const startSearchLocation = val => {
    setValSearchLocation(val);
    clearTimeout(cacheDom);
    let setCache = setTimeout(() => {
      if (val && val !== '') {
        let valLow = val.toLowerCase();
        let datas = locations.filter(
          item => item.name && item.name.toLowerCase().indexOf(valLow) !== -1,
        );
        setDataLocation(datas);
      } else {
        setDataLocation(locations);
      }
    }, 300);
    setCacheDom(setCache);
  };
  const suLySearch = (search, valLocation) => {
    clearTimeout(cacheDom);
    let setCache = setTimeout(() => {
      if (search && search !== '' && valLocation && valLocation.codename) {
        let nameLow = search && search.toLowerCase();
        let datas = dataListCompany.filter(
          item =>
            item.nameCompany &&
            item.nameCompany.toLowerCase().indexOf(nameLow) !== -1 &&
            item.location &&
            item.location.codename &&
            item.location.codename === valLocation.codename,
        );
        setDataSearch(datas);
      } else if (search && search !== '') {
        let nameLow = search && search.toLowerCase();
        let datas = dataListCompany.filter(
          item =>
            item.nameCompany &&
            item.nameCompany.toLowerCase().indexOf(nameLow) !== -1,
        );
        setDataSearch(datas);
      } else if (valLocation && valLocation.codename) {
        let datas = dataListCompany.filter(
          item =>
            item.location &&
            item.location.codename &&
            item.location.codename === valLocation.codename,
        );
        setDataSearch(datas);
      } else {
        setDataSearch(dataListCompany);
      }
    }, 300);
    setCacheDom(setCache);
  };
  const startSearch = val => {
    setValSearch(val);
    suLySearch(val, location);
  };
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            textAlign: 'center',
            marginVertical: 20,
            fontSize: 22,
            fontWeight: 'bold',
          }}>
          Danh sách công ty tuyển dụng
        </Text>
        <TouchableOpacity onPress={() => setSearch(true)}>
          <Icon style={styles.icon} size={23} name="search" />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, paddingHorizontal: 10}}>
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
              logo={item.logo}
              quantity={getScale(item.scale)}
            />
          ))}
      </View>
      <Modal animationType="slide" transparent={true} visible={search}>
        <View style={css.model_container}>
          <View style={css.model_style}>
            <View style={css.v_row_between}>
              <Text style={css.title}>Tìm kiếm bài viết</Text>
              <TouchableOpacity onPress={() => setSearch(false)}>
                <Text>Hủy</Text>
              </TouchableOpacity>
            </View>
            <View style={css.model_contain}>
              <SearchBar
                placeholder="Tìm kiếm"
                txtSearch={valSearch}
                onChangeText={startSearch}
              />
              <View style={css.v_row_between}>
                <Text style={[css.title, {paddingVertical: 10}]}>Bộ lọc</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TouchableOpacity onPress={() => setModalLocation(true)}>
                    <Text>{location.code ? location.name : 'Địa chỉ'}</Text>
                  </TouchableOpacity>
                  {location.code ? (
                    <>
                      <TouchableOpacity
                        style={{marginLeft: 10}}
                        onPress={() => {
                          setLocation({});
                          suLySearch(valSearch, {});
                        }}>
                        <Icon
                          style={styles.icon}
                          size={20}
                          color="red"
                          name="close"
                        />
                      </TouchableOpacity>
                    </>
                  ) : (
                    <>
                      <Icon
                        style={{marginLeft: 10}}
                        size={20}
                        name="angle-down"
                      />
                    </>
                  )}
                </View>
              </View>
              <ScrollView>
                <View style={styles.listPostVip}>
                  {dataSearch &&
                    dataSearch.map((item, index) => (
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
                        logo={item.logo}
                        address={item.location.name}
                        quantity={getScale(item.scale)}
                      />
                    ))}
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>
      <Modal animationType="slide" transparent={true} visible={modalLocation}>
        <View style={css.model_container}>
          <View style={css.model_style}>
            <View style={css.v_row_between}>
              <Text style={css.title}>Chọn địa chỉ</Text>
              <TouchableOpacity onPress={() => setModalLocation(false)}>
                <Text>Hủy</Text>
              </TouchableOpacity>
            </View>
            <View style={css.model_contain}>
              <SearchBar
                placeholder="Nhập tên địa chỉ"
                txtSearch={valSearchLocation}
                onChangeText={startSearchLocation}
              />
              <ScrollView style={{marginTop: 10}}>
                <View>
                  {dataLocation.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        setLocation(item);
                        setModalLocation(false);
                        suLySearch(valSearch, item);
                      }}>
                      <View style={{paddingVertical: 5}}>
                        <Text style={{color: '#000', fontSize: 16}}>
                          {item.name}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>
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
function mapState(state) {
  return {
    companys: state.Home.companys,
    locations: state.locations.locations,
  };
}
export default connect(mapState)(ListCompany);
