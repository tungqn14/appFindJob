import React from 'react';
import Home from '../screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailCompany from '../screens/DetailCompany';
import DetailPost from '../screens/DetailPost';
const Stack = createNativeStackNavigator();

function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => {
            null;
          },
          // headerTitle:"Tài Khoản",
          // headerTitleAlign:"center"
        }}
      />
      <Stack.Screen
        name="DetailCompany"
        component={DetailCompany}
        options={{
          headerTitle: 'Chi tiết công ty',
        }}
      />
      <Stack.Screen
        name="DetailPost"
        component={DetailPost}
        options={{
          headerTitle: 'Chi tiết bài viết',
        }}
      />
    </Stack.Navigator>
  );
}
export default HomeNavigation;
