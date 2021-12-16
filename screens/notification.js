import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';

import {connect} from 'react-redux';

function notification({navigation, route, dispatch}) {
  const user = route.params;
  const [exp, setExp] = useState((user && user.exp) || '');

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View>
        <Text>đây nè {exp}</Text>
      </View>
    </ScrollView>
  );
}
export default connect()(notification);
