import React from 'react';
import Home from '../screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailCompany from '../screens/DetailCompany';
import DetailPost from '../screens/DetailPost';
import ListCompany from '../screens/ListCompany';
const Stack = createNativeStackNavigator();
function CompanyNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListCompany"
        component={ListCompany}
        options={{
          header: () => {
            null;
          },
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
export default CompanyNavigation;
