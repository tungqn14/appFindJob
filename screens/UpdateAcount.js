import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Dimensions,
  Image,
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomInput from '../component/CustomInput';
import CustomButton from '../component/CustomButton';
import Logo from '../component/Logo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-crop-picker';
import {getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage';
import DocumentPicker from 'react-native-document-picker';
import {initializeApp} from 'firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyDQmc3eNGNE-0ZUUaXRnAaLRSuwnjXrnsw',
  authDomain: 'searchjob-f2a8d.firebaseapp.com',
  projectId: 'searchjob-f2a8d',
  storageBucket: 'searchjob-f2a8d.appspot.com',
  messagingSenderId: '468637862865',
  appId: '1:468637862865:web:a80d80cb5fe0cb5386aef0',
  measurementId: 'G-FC47WF0V6Q',
};
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

const axios = require('axios');
const width = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function UpdateAcount({navigation, route}) {
  const user = route.params;
  const [avatarShow, setAvatarShow] = useState(
    (user && user.avatar) ||
      'https://static.thenounproject.com/png/17241-200.png',
  );
  const [namePDF, setNamePDF] = useState('Chọn file pdf');
  const [avatar, setAvatar] = useState((user && user.avatar) || '');
  const [cv, setCV] = useState((user && user.cv) || '');
  const [birthDay, setBirthDay] = useState((user && user.birthDay) || '');
  const [userName, setUserName] = useState((user && user.fullName) || '');
  const [phone, setPhone] = useState((user && user.phone) || '');
  const [address, setAddress] = useState((user && user.address) || '');
  const [exp, setExp] = useState((user && user.exp) || '');
  const [desiredMoney, setDesiredMoney] = useState(
    (user && user.desiredMoney) || '',
  );
  const [position, setPosition] = useState((user && user.position) || '');
  const [descripYourself, setDescripYourself] = useState(
    (user && user.descripYourself) || '',
  );
  const onFormLogin = () => {
    navigation.navigate('Login');
  };
  const validate = () => {

  };
  const chooseImg = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setAvatarShow(image.path);
      fetch(image.path)
        .then(res => res.blob())
        .then(myBlob => {
          const storageRef = ref(storage, 'avatar' + user.id + '.jpg');
          uploadBytes(storageRef, myBlob).then(snapshot => {
            getDownloadURL(ref(storage, 'avatar' + user.id + '.jpg'))
              .then(url => {
                setAvatar(url);
              })
              .catch(error => {
                console.warn('lỗi :' + error);
              });
          });
        });
    });
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
            const storageRef = ref(storage, 'cv' + user.id + '.pdf');
            uploadBytes(storageRef, myBlob).then(snapshot => {
              getDownloadURL(ref(storage, 'cv' + user.id + '.pdf'))
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
  const onUpdatePressed = () => {
    let isError = false;
    let FunCheck = (check, mgs) => {
      if (check) {
        if (!isError) {
          alert(mgs);
        }
        isError = true;
      }
    };
    FunCheck(avatar === '', 'Vui lòng chọn ảnh đại diện');
    FunCheck(phone === '', 'Vui lòng nhập SĐT');
    FunCheck(userName === '', 'Vui lòng nhập tên hiển thị');
    FunCheck(address === '', 'Vui lòng nhập địa chỉ');
    FunCheck(desiredMoney === '', 'Vui lòng nhập số tiền mong muốn');
    FunCheck(exp === '', 'Vui lòng nhập kinh nghiệm');
    FunCheck(position === '', 'Vui lòng nhập vị trí');
    FunCheck(descripYourself === '', 'Vui lòng nhập mô tả');
    FunCheck(birthDay === '', 'Vui lòng nhập ngày sinh');
    FunCheck(cv === '', 'Vui lòng chọn file CV');
    if (!isError) {
      let data = {
        avatar: avatar,
        email: user.email,
        phone: phone,
        fullName: userName,
        address: address,
        exp: exp,
        desiredMoney: desiredMoney,
        position: position,
        descripYourself: descripYourself,
        birthDay: birthDay,
        cv: cv,
        token: user.auth_token,
      };
      axios
        .post('https://tungfindjob.herokuapp.com/api/update-user', data)
        .then(function (response) {
          let res = response && response.data;
          if (res.status === 200) {
            data.auth_token = data.token;
            data.id = user.id;
            AsyncStorage.setItem('user', JSON.stringify(data));
            navigation.navigate('ManageAccount');
          } else {
            console.warn(res.message);
          }
        })
        .catch(function (error) {
          console.warn('lỗi : ' + error);
        });
    }
  };
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.midForm}>
          <TouchableOpacity onPress={chooseImg}>
            <View>
              <View style={styles.wrapAvatar}>
                <Image
                  style={styles.imageAvatar}
                  resizeMode="cover"
                  source={{uri: avatarShow}}
                />
              </View>
            </View>
          </TouchableOpacity>
          <CustomInput
            icon="user"
            value={userName}
            setValue={setUserName}
            placeholder="Full name"
          />
          <CustomInput
            keyBoardText="numeric"
            icon="phone"
            value={phone}
            setValue={setPhone}
            placeholder="Telephone"
          />
          <CustomInput
            icon="location-arrow"
            value={address}
            setValue={setAddress}
            placeholder="Địa chỉ "
          />
          <CustomInput
            icon="location-arrow"
            value={birthDay}
            setValue={setBirthDay}
            placeholder="Ngày sinh "
          />
          <CustomInput
            icon="atom"
            value={exp}
            setValue={setExp}
            placeholder="Kinh nghiệm "
          />
          <CustomInput
            keyBoardText="numeric"
            icon="money-bill-wave"
            value={desiredMoney}
            setValue={setDesiredMoney}
            placeholder="Tiền lương mong muốn"
          />
          <CustomInput
            icon="id-card"
            value={position}
            setValue={setPosition}
            placeholder="Vị trí hiện tại"
          />
          <CustomInput
            numberOfLines={4}
            multiline
            value={descripYourself}
            setValue={setDescripYourself}
            placeholder="Giới thiệu bản thân"
          />
          <TouchableOpacity
            style={{
              width: width - 60,
              paddingVertical: 20,
              marginVertical: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderWidth: 1,
              borderColor: 'gray',
              paddingHorizontal: 20,
            }}
            onPress={choosePDF}>
            <Text>CV</Text>
            <Text>{namePDF}</Text>
          </TouchableOpacity>
          <CustomButton onPress={onUpdatePressed} text="Cập nhật" />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  midForm: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 30,
  },
  wrapAvatar: {
    alignItems: 'center',
    width: 120,
    marginTop: 10,
    height: 120,
    zIndex: 999,
    justifyContent: 'center',
    marginHorizontal: 'auto',
  },
  imageAvatar: {
    width: '100%',
    height: '100%',
  },
  botBtn: {
    flex: 1,
    marginTop: 30,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    fontSize: 18,
  },
});
