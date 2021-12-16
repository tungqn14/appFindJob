import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View, Text, Image} from 'react-native';
import ItemPost from '../component/ItemPost';
import axios from 'axios';
import {server} from '../config';

export default function Favorite({navigation, route}) {
  const user = route.params;
  const [dataListPost, setDataListPost] = useState([]);
  useEffect(() => {
    fetchDataPost();
  }, []);

  const fetchDataPost = async () => {
    axios
      .get(server + '/list-save-post?token=' + user.auth_token)
      .then(function (response) {
        let res = response && response.data;
        if (res.status === 200) {
          setDataListPost(res.data.data);
        } else {
          console.warn(res.message);
        }
      })
      .catch(function (error) {
        console.log('lỗi : ' + error);
      });
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}>
      <Text
        style={{
          textAlign: 'center',
          marginVertical: 20,
          fontSize: 22,
          fontWeight: 'bold',
        }}>
        Danh sách bài tuyển dụng
      </Text>
      {dataListPost &&
        dataListPost.map((item, index) => (
          <ItemPost
            key={index}
            onPress={() => null}
            titlePost={item.titlePost}
            address={item.users.company.location.name}
            wage={item.wage}
          />
        ))}
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
