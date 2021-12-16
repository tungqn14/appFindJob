import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const maxWidth = Dimensions.get('screen').width;
import {connect} from 'react-redux';
import axios from 'axios';

function notifications({navigation, route, dispatch}) {
  const notifications = route.params;
  return (
    <View style={{flex: 1}}>
      {notifications.length ? (
        <>
          <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={{marginTop: 10}}>
              {notifications &&
                notifications.map((item, index) => (
                  <View
                    style={{
                      padding: 15,
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: maxWidth,
                      backgroundColor: '#fff',
                      marginTop: 1,
                    }}
                    key={index}>
                    <Icon
                      name="bell"
                      style={{paddingHorizontal: 10}}
                      size={20}
                    />
                    <Text
                      style={{
                        paddingHorizontal: 10,
                        fontWeight: '600',
                        width: maxWidth - 50,
                      }}>
                      {item}
                    </Text>
                  </View>
                ))}
            </View>
          </ScrollView>
        </>
      ) : (
        <>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Không có dữ liệu.</Text>
          </View>
        </>
      )}
    </View>
  );
}
export default connect()(notifications);
