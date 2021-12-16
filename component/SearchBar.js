import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
const width = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
export default function SearchBar({txtSearch, placeholder, onChangeText}) {
  return (
    <View style={styles.container}>
      <Icon style={styles.icon} size={23} name="search" />
      <TextInput
        style={styles.inputText}
        placeholder={placeholder}
        value={txtSearch}
        onChangeText={onChangeText}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 15,
    flexDirection: 'row',
    fontSize: 20,
    marginTop: 20,
  },
  inputText: {
    marginLeft: 10,
    fontSize: 18,
    width: '100%',
  },
  icon: {
    paddingTop: 10,
    paddingRight: 0,
  },
});
