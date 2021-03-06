import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import BlockPost from '../component/BlockPost';
import RenderHtml from 'react-native-render-html';
import {server} from '../config';

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
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  FlatList,
} from 'react-native';
import axios from 'axios';
const widthContentHTML = Dimensions.get('screen').width;
import CustomInput from '../component/CustomInput';
import {getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage';
import DocumentPicker from 'react-native-document-picker';
import {initializeApp} from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyDs5GNJVK0SHBzFBEV7EBcEuSRsUIpxdRo",
  authDomain: "managefile-5efc5.firebaseapp.com",
  projectId: "managefile-5efc5",
  storageBucket: "managefile-5efc5.appspot.com",
  messagingSenderId: "360539089372",
  appId: "1:360539089372:web:fb94699028428317798719",
  measurementId: "G-6TRY8WLKW6"
};
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

import {connect} from 'react-redux';

function DetailPost({route, navigation, user}) {
  const {idPost} = route.params;
  const [detailPost, setDetailPost] = useState({});
  const [skill, setSkill] = useState([]);
  const [welfare, setWelfare] = useState([]);
  const [careers, setCareers] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [cv, setCV] = useState('');
  const [namePDF, setNamePDF] = useState('Chọn file pdf');
  const [modalSelect, setModalSelect] = useState(false);
  const [modalApply, setModalApply] = useState(false);
  const [modalNotify, setModalNotify] = useState(false);
  const [isSave, setIsSave] = useState(false);

  useEffect(() => {
    fetchDetailPost();
  }, []);
  useEffect(() => {
    checkSave();
  }, []);

  const fetchDetailPost = async () => {
    await fetch(`${server}/detail-post-${idPost}`)
      .then(res => res.json())
      .then(result => {
        setDetailPost(result.data.listPost);
        setSkill(result.data.skills);
        setWelfare(result.data.welfares);
        setCareers(result.data.careers);
      })
      .catch(err => console.log(err));
  };

  const checkSave = async () => {
    if (user && user.auth_token) {
      axios
        .post(server + '/check-save-post', {
          postId: idPost,
          token: user.auth_token,
        })
        .then(function (response) {
          let res = response && response.data;
          setIsSave(res.code);
        })
        .catch(function (error) {
          console.error('lỗi : ' + error);
        });
    } else {
    }
  };
  const sourceDes = {
    html: `<div style='width:100%;'>${detailPost.desPost}</div>`,
  };
  const sourceReq = {
    html: `<div style='width:100%;'>${detailPost.reqPost}</div>`,
  };
  const savePost = () => {
    if (user && user.auth_token) {
      axios
        .post(server + '/save-post', {
          idPost: idPost,
          token: user.auth_token,
        })
        .then(function (response) {
          let res = response && response.data;
          setIsSave(res.code === 1);
          Alert.alert('Thông báo', res.message);
        })
        .catch(function (error) {
          console.error('lỗi : ' + error);
        });
    } else {
      // show model thông báo cần đăng nhập
      setModalNotify(true);
    }
  };
  const choosePDF = () => {
    DocumentPicker.pick({
      type: [DocumentPicker.types.pdf],
    }).then(res => {
      if (res && res[0]) {
        setNamePDF('Đang tải file lên');
        fetch(res[0].uri)
          .then(res => res.blob())
          .then(myBlob => {
            const storageRef = ref(storage, 'cvaply' + user.id + '.pdf');
            uploadBytes(storageRef, myBlob).then(snapshot => {
              getDownloadURL(ref(storage, 'cvaply' + user.id + '.pdf'))
                .then(url => {
                  setNamePDF(res[0].name);
                  setCV(url);
                })
                .catch(error => {
                  console.warn('lỗi :' + error);
                });
            });
          });
      }
    });
  };
  const checkCV = () => {
    // check isLogin
    if (user && user.auth_token) {
      if (user.cv && user.fullName && user.phone) {
        setModalSelect(true);
      } else {
        setModalApply(true);
      }
    } else {
      // show model thông báo cần đăng nhập
      setModalNotify(true);
    }
  };
  const applyPost = (cv, name, phone) => {
    let isError = false;
    let FunCheck = (check, mgs) => {
      if (check) {
        if (!isError) {
          alert(mgs);
        }
        isError = true;
      }
    };
    FunCheck(name === '', 'Vui lòng nhập tên hiển thị');
    FunCheck(phone === '', 'Vui lòng nhập SĐT');
    FunCheck(cv === '', 'Vui lòng chọn file CV');
    if (!isError) {
      axios
        .post(server + '/apply-post', {
          cvSubmit: cv,
          nameSubmit: name,
          phoneSubmit: phone,
          postId: idPost,
          emailSubmit: user.email,
          token: user.auth_token,
        })
        .then(function (response) {
          let res = response && response.data;
          if (res.status === 200) {
            setModalApply(false);
            setModalSelect(false);
            alert('Ứng tuyền thành công');
          } else {
            alert(res.message);
          }
        })
        .catch(function (error) {
          console.log('lỗi : ' + error);
        });
    }
  };
  let objSkill = {};
  skill &&
    skill.forEach(item => {
      objSkill[item.id] = item;
    });
  let techs =
    (detailPost && detailPost.tech_id && JSON.parse(detailPost.tech_id)) || [];
  let tech = '';
  techs.forEach(item => {
    if (objSkill[item]) {
      tech += objSkill[item].nameSkill + ' , ';
    }
  });

  let objWelfare = {};
  welfare &&
    welfare.forEach(item => {
      objWelfare[item.id] = item;
    });
  let welfares =
    (detailPost &&
      detailPost.welfare_id &&
      JSON.parse(detailPost.welfare_id)) ||
    [];
  let welfareLable = '';
  welfares.forEach(item => {
    if (objWelfare[item]) {
      welfareLable += objWelfare[item].name_welfare + ' , ';
    }
  });

  return (
    <ScrollView style={{flex: 1, height: '100%'}}>
      <View style={styles.container}>
        <View style={styles.topDetailPost}>
          <Text style={styles.titleDetailPost}>{detailPost.titlePost}</Text>
          <View
            style={{
              width: '100%',
              borderBottomWidth: 1,
              borderBottomColor: '#80808024',
              marginVertical: 7,
              paddingBottom: 10,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>Tên Công Ty:</Text>
            <Text style={{paddingVertical: 5, fontSize: 16}}>
              {detailPost.nameCompany}
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              borderBottomWidth: 1,
              borderBottomColor: '#80808024',
              marginVertical: 7,
              paddingBottom: 10,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>Mức Lương:</Text>
            <Text style={{paddingVertical: 5, fontSize: 16}}>
              {detailPost.wage === 'Thỏa thuận'
                ? detailPost.wage
                : formatMoney(detailPost.wage)}
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              borderBottomWidth: 1,
              borderBottomColor: '#80808024',
              marginVertical: 7,
              paddingBottom: 10,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              Nơi làm việc:
            </Text>
            <Text style={{paddingVertical: 5, fontSize: 16}}>
              {detailPost.address}
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              borderBottomWidth: 1,
              borderBottomColor: '#80808024',
              marginVertical: 7,
              paddingBottom: 10,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>Hạn tuyển:</Text>
            <Text style={{paddingVertical: 5, fontSize: 16}}>
              {detailPost.deadline}
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              borderBottomWidth: 1,
              borderBottomColor: '#80808024',
              marginVertical: 7,
              paddingBottom: 10,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>Công nghệ:</Text>
            <Text style={{paddingVertical: 5, fontSize: 16}}>{tech}</Text>
          </View>
          <View
            style={{
              width: '100%',
              borderBottomWidth: 1,
              borderBottomColor: '#80808024',
              marginVertical: 7,
              paddingBottom: 10,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>Phúc lợi:</Text>
            <Text style={{paddingVertical: 5, fontSize: 16}}>
              {welfareLable}
            </Text>
          </View>
          <View
            style={{
              width: '80%',
              borderBottomWidth: 1,
              borderBottomColor: '#80808024',
              marginVertical: 7,
              paddingBottom: 10,
              paddingRight: 20,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>Yêu cầu:</Text>
            <View style={{width: '100%', paddingVertical: 5, fontSize: 16}}>
              {
                <RenderHtml
                  contentWidth={widthContentHTML}
                  source={sourceReq}
                />
              }
            </View>
          </View>
          <View
            style={{
              width: '100%',
              borderBottomWidth: 1,
              borderBottomColor: '#80808024',
              marginVertical: 7,
              paddingBottom: 10,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>Mô tả:</Text>
            <View style={{paddingVertical: 5, fontSize: 16}}>
              {
                <RenderHtml
                  contentWidth={widthContentHTML}
                  source={sourceDes}
                />
              }
            </View>
          </View>
        </View>
        <View style={styles.botDetailPost}>
          <TouchableOpacity
            onPress={() => {
              savePost();
            }}
            style={[
              styles.btnApply,
              {backgroundColor: 'white', borderColor: 'blue'},
            ]}>
            <Text
              style={{color: 'blue', fontSize: 15, textTransform: 'uppercase'}}>
              {isSave ? 'Hủy' : 'Lưu'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              checkCV();
            }}
            style={[styles.btnApply, {backgroundColor: '#e24c32'}]}>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                textTransform: 'uppercase',
              }}>
              Ứng tuyển
            </Text>
          </TouchableOpacity>
        </View>
        <Modal animationType="slide" transparent={true} visible={modalNotify}>
          <View style={styles.modal}>
            <View style={styles.modal_confirm}>
              <View style={styles.v_row_between_modal}>
                <Text style={styles.title}>Thông báo</Text>
                <Text onPress={() => setModalNotify(false)}>Hủy</Text>
              </View>
              <View style={styles.modal_container}>
                <Text>
                  Bạn chưa đăng nhập, vui lòng đăng nhập để sử dụng tính năng
                  này
                </Text>
              </View>
              <View style={styles.v_row_end}>
                <TouchableOpacity
                  onPress={() => {
                    setModalNotify(false);
                    navigation.navigate('AccountNavigation');
                  }}
                  style={[
                    styles.btnApply,
                    {backgroundColor: 'white', borderColor: 'blue', width: 110},
                  ]}>
                  <Text
                    style={{
                      color: 'blue',
                      fontSize: 15,
                      textTransform: 'uppercase',
                    }}>
                    Đăng nhập
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Modal animationType="slide" transparent={true} visible={modalSelect}>
          <View style={styles.modal}>
            <View style={styles.modal_confirm}>
              <View style={styles.v_row_between_modal}>
                <Text style={styles.title}>Thông báo</Text>
                <Text onPress={() => setModalSelect(false)}>Hủy</Text>
              </View>
              <View style={styles.modal_container}>
                <Text>Bạn có muốn lấy thông tin từ tài khoản này không</Text>
              </View>
              <View style={styles.v_row_end}>
                <TouchableOpacity
                  onPress={() => {
                    setModalSelect(false);
                    setModalApply(true);
                  }}
                  style={[
                    styles.btnApply,
                    {backgroundColor: '#e24c32', width: 110},
                  ]}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 15,
                      textTransform: 'uppercase',
                    }}>
                    CV mới
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    applyPost(user.cv, user.fullName, user.phone);
                  }}
                  style={[
                    styles.btnApply,
                    {backgroundColor: '#e24c32', width: 110},
                  ]}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 15,
                      textTransform: 'uppercase',
                    }}>
                    Đồng ý
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Modal animationType="slide" transparent={true} visible={modalApply}>
          <View style={styles.model_container}>
            <View style={styles.model_style}>
              <View style={styles.v_row_between}>
                <Text style={styles.title}>Thông tin cá nhân</Text>
                <TouchableOpacity onPress={() => setModalApply(false)}>
                  {/*<Image*/}
                  {/*  source={require('../assets/close.png')}*/}
                  {/*  style={styles.icon}*/}
                  {/*/>*/}
                  <Text>Hủy</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.model_contain}>
                <CustomInput
                  icon="user"
                  value={name}
                  setValue={setName}
                  placeholder="Full name"
                />
                <CustomInput
                  keyBoardText="numeric"
                  icon="phone"
                  value={phone}
                  setValue={setPhone}
                  placeholder="Telephone"
                />
                <TouchableOpacity
                  style={{
                    width: '100%',
                    paddingVertical: 20,
                    marginVertical: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderWidth: 1,
                    borderColor: 'gray',
                    paddingHorizontal: 20,
                  }}
                  onPress={() => {
                    choosePDF();
                  }}>
                  <Text>CV</Text>
                  <Text>{namePDF}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    applyPost(cv, name, phone);
                  }}>
                  <View style={styles.box_style}>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>
                      Ứng tuyển
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
    // backgroundColor:"#9e9e9e29",
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  topDetailPost: {
    borderTopColor: 'gray',
    padding: 15,
    height: '70%',
    width: '100%',

    flexBasis: '70%',
  },
  model_container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  model_contain: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  v_row_between: {
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  model_style: {
    width: widthContentHTML,
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: '50%',
    backgroundColor: '#fff',
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  v_row_between_modal: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: '#5cd5c5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  modal_container: {
    padding: 10,
    backgroundColor: '#fff',
  },
  v_row_end: {
    padding: 5,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#fff',
  },
  box_style: {
    backgroundColor: '#5cd5c5',
    shadowColor: '#5cd5c5',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 3,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnApply: {
    borderColor: 'gray',
    borderWidth: 1,
    width: 150,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  botDetailPost: {
    padding: 15,
    flexDirection: 'row',
    height: '25%',
    width: '100%',
    flexBasis: '25%',
  },
  titleDetailPost: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modal_confirm: {
    width: '85%',
  },
  // inforDetail:{
  //     shadowOffset:{  width: 10,  height: 10,  },
  //     shadowColor: 'black',
  //     shadowOpacity: 1.0,
  //     borderWidth:1,
  //     backgroundColor:"white",
  //     borderColor:"gray"
  // },
  // wrapLine:{
  //    paddingHorizontal:10,
  //     width:"100%",
  //     marginVertical:10,
  //     borderBottomWidth:1,
  //     paddingBottom:10,
  //     borderColor:"#80808024",
  //     marginBottom:10
  // }
});
function mapState(state) {
  return {
    user: state.Home.user,
  };
}
export default connect(mapState)(DetailPost);
