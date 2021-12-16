import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import BlockPost from '../component/BlockPost';
import ItemPost from '../component/ItemPost';
import RenderHtml from 'react-native-render-html';
import {
  getTypeRank,
  getScale,
  getTypeTime,
  formatMoney,
} from '../provider/Helper';
import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
const widthContentHTML = Dimensions.get('screen').width;
import {server} from '../config';

function DetailCompany({navigation, route}) {
  const {idCompany, address, street, phone} = route.params;
  const [detailCompany, setDetailCompany] = useState({});
  const {user, setUser} = useState({});
  const {userPost, setuserPost} = useState({});
  const {location, setLocation} = useState({});
  const [company, setCompany] = useState({});
  const [welfares, setWelfares] = useState([]);
  const [careers, setSareers] = useState([]);
  useEffect(() => {
    fetchDetailCompany();
  }, []);

  const fetchDetailCompany = async () => {
    await fetch(`${server}/detail-company-${idCompany}`)
      .then(res => res.json())
      .then(result => {
        setDetailCompany(result.data);
        setSareers(result.data.carrer);
        setWelfares(result.data.welfare);
        setCompany(result.data.company);
      })
      .catch(err => console.log(err));
  };
  const sourceAboutCompany = {
    html: `<div style='width:100%;'>${company.aboutCompany}</div>`,
  };
  const arrPost = company.user_post;

  let objCareer = {};
  careers &&
    careers.forEach(item => {
      objCareer[item.id] = item;
    });
  let careerID =
    (company && company.career_id && JSON.parse(company.career_id)) || [];
  let careerLable = '';
  careerID.forEach(item => {
    if (objCareer[item]) {
      careerLable += objCareer[item].name_career + ' , ';
    }
  });

  let objWelfare = {};
  welfares &&
    welfares.forEach(item => {
      objWelfare[item.id] = item;
    });
  let welfareID =
    (company && company.welfare_id && JSON.parse(company.welfare_id)) || [];
  let welfareLable = '';
  welfareID.forEach(item => {
    if (objWelfare[item]) {
      welfareLable += objWelfare[item].name_welfare + ' , ';
    }
  });

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.topCompany}>
          <ImageBackground
            source={require('../assets/images/bg.jpg')}
            style={{width: '100%', height: '100%'}}
            resizeMode="cover"
          />
          <View style={styles.wrapAvatar}>
            <Image
              style={styles.imageAvatar}
              resizeMode="cover"
              source={
                company.logo
                  ? {uri: company.logo}
                  : require('../assets/images/istockphoto.jpg')
              }
            />
          </View>
          <Text style={styles.nameCompany}>{company.nameCompany}</Text>
        </View>
        <View style={styles.midCompany}>
          <Text
            style={{
              paddingLeft: 10,
              marginBottom: 10,
              fontSize: 20,
              fontWeight: 'bold',
              color: '#e24c32',
            }}>
            Thông tin của công ty
          </Text>
          <View style={styles.inforDetail}>
            <View style={styles.wrapLine}>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 16,
                  textTransform: 'capitalize',
                }}>
                Quy mô:
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 16,
                  textTransform: 'capitalize',
                }}>
                {getScale(company.scale)}
              </Text>
            </View>
            <View style={styles.wrapLine}>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 16,
                  textTransform: 'capitalize',
                }}>
                Địa chỉ:
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 16,
                  textTransform: 'capitalize',
                }}>
                {street}
              </Text>
            </View>
            <View style={styles.wrapLine}>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 16,
                  textTransform: 'capitalize',
                }}>
                Lĩnh vực hoạt động:
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 16,
                  textTransform: 'capitalize',
                }}>
                {careerLable}
              </Text>
            </View>
            <View style={styles.wrapLine}>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 16,
                  textTransform: 'capitalize',
                }}>
                Phúc lợi:
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 16,
                  textTransform: 'capitalize',
                }}>
                {welfareLable}
              </Text>
            </View>
            <View style={styles.wrapLine}>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 16,
                  textTransform: 'capitalize',
                }}>
                Tỉnh Thành Phố:
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 16,
                  textTransform: 'capitalize',
                }}>
                {address}
              </Text>
            </View>
            <View style={styles.wrapLine}>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 16,
                  textTransform: 'capitalize',
                }}>
                Website:
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 16,
                  textTransform: 'capitalize',
                }}>
                {company.website}
              </Text>
            </View>
            <View style={styles.wrapLine}>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 16,
                  textTransform: 'capitalize',
                }}>
                Số điện thoại:
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 16,
                  textTransform: 'capitalize',
                }}>
                {phone}
              </Text>
            </View>
            <View style={styles.wrapLine}>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 16,
                  textTransform: 'capitalize',
                }}>
                Giới thiệu về công ty:
              </Text>
              <View
                style={{
                  width: '100%',
                  paddingHorizontal: 10,
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 16,
                  textTransform: 'capitalize',
                }}>
                {
                  <RenderHtml
                    contentWidth={widthContentHTML}
                    source={sourceAboutCompany}
                  />
                }
              </View>
            </View>
          </View>
        </View>
        <View style={styles.botCompany}>
          <Text
            style={{
              paddingLeft: 10,
              marginBottom: 20,
              fontSize: 20,
              fontWeight: 'bold',
              color: '#e24c32',
            }}>
            Việc làm của công ty
          </Text>
          <View style={{paddingHorizontal: 10, backgroundColor: 'white'}}>
            {arrPost &&
              arrPost.map((item, index) => (
                <ItemPost
                  key={index}
                  onPress={() => {
                    navigation.navigate('DetailPost', {
                      idPost: item.id_post,
                    });
                  }}
                  titlePost={item.titlePost}
                  address={company && company.location.name}
                  logo={company && company.logo}
                  wage={item.wage}
                />
              ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9e9e9e29',
  },
  topCompany: {
    height: 170,
    position: 'relative',
  },
  midCompany: {
    //backgroundColor:"orange",
    borderTopWidth: 1,
    borderTopColor: 'gray',
    padding: 15,
    flex: 3,
    marginTop: '37%',
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
    bottom: -50,
    left: 120,
    alignItems: 'center',
    width: 120,
    height: 120,
    zIndex: 999,
    justifyContent: 'center',
    borderWidth: 1,
    marginHorizontal: 'auto',
  },
  nameCompany: {
    marginTop: 60,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 19,
  },
  inforDetail: {
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 1.0,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'gray',
  },
  wrapLine: {
    paddingHorizontal: 10,
    width: '80%',
    marginVertical: 10,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: '#80808024',
    marginBottom: 10,
  },
});
export default DetailCompany;
