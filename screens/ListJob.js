import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import SearchBar from '../component/SearchBar';
import ItemPost from '../component/ItemPost';
import Icon from 'react-native-vector-icons/FontAwesome';
import css from '../css';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { server } from "../config";

function ListJob({navigation, jobs, dispatch, locations}) {
  const [dataListPost, setDataListPost] = useState(jobs || []);
  const [search, setSearch] = useState(false);
  const [valSearch, setValSearch] = useState('');
  const [cacheDom, setCacheDom] = useState(true);
  const [dataSearch, setDataSearch] = useState(jobs || []);
  const [dataLocation, setDataLocation] = useState(locations || []);
  const [valSearchLocation, setValSearchLocation] = useState('');
  const [modalLocation, setModalLocation] = useState(false);
  const [location, setLocation] = useState({});
  useEffect(() => {
    fetchDataPost();
  }, []);

  const fetchDataPost = async () => {
    await fetch(server + '/list-post-all')
      .then(res => res.json())
      .then(result => {
        let data = result.datas || [];
        let dataCache = data.slice(0, 15);
        AsyncStorage.setItem('jobs', JSON.stringify(dataCache));
        dispatch({type: 'update_jobs', data: data});
        setDataListPost(data);
        setDataSearch(data);
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
        let datas = dataListPost.filter(
          item =>
            item.titlePost &&
            item.titlePost.toLowerCase().indexOf(nameLow) !== -1 &&
            item.users &&
            item.users.company &&
            item.users.company.location &&
            item.users.company.location.codename &&
            item.users.company.location.codename === valLocation.codename,
        );
        setDataSearch(datas);
      } else if (search && search !== '') {
        let nameLow = search && search.toLowerCase();
        let datas = dataListPost.filter(
          item =>
            item.titlePost &&
            item.titlePost.toLowerCase().indexOf(nameLow) !== -1,
        );
        setDataSearch(datas);
      } else if (valLocation && valLocation.codename) {
        let datas = dataListPost.filter(
          item =>
            item.users &&
            item.users.company &&
            item.users.company.location &&
            item.users.company.location.codename &&
            item.users.company.location.codename === valLocation.codename,
        );
        setDataSearch(datas);
      } else {
        setDataSearch(dataListPost);
      }
    }, 300);
    setCacheDom(setCache);
  };
  const startSearch = val => {
    setValSearch(val);
    suLySearch(val, location);
  };
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}>
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
          Danh sách bài tuyển dụng
        </Text>
        <TouchableOpacity onPress={() => setSearch(true)}>
          <Icon style={styles.icon} size={23} name="search" />
        </TouchableOpacity>
      </View>
      {dataListPost &&
        dataListPost.map((item, index) => (
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
                  {dataSearch.map((item, index) => (
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
    jobs: state.Home.jobs,
    locations: state.locations.locations,
  };
}
export default connect(mapState)(ListJob);
