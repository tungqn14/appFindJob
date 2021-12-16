import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Account from '../screens/Account';
import Favorite from '../screens/Favorite';
import ManageAccount from '../screens/ManageAccount';
import UpdateAcount from '../screens/UpdateAcount';
import notifications from '../screens/notifications';
import notification from '../screens/notification';

export default function AccountNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => {
            null;
          },
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          header: () => {
            null;
          },
        }}
      />
      <Stack.Screen
        name="ManageAccount"
        component={ManageAccount}
        options={{
          title: 'Settings',
          headerBackVisible: false,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerTitleAlign: 'center',
          title: 'Tài khoản',
        }}
      />
      <Stack.Screen
        name="Favorite"
        component={Favorite}
        options={{
          headerTitleAlign: 'center',
          title: 'Yêu thích',
        }}
      />
      <Stack.Screen
        name="UpdateAcount"
        component={UpdateAcount}
        options={{
          headerTitleAlign: 'center',
          title: 'Cập nhật',
        }}
      />
      <Stack.Screen
        name="Notification"
        component={notifications}
        options={{
          headerTitleAlign: 'center',
          title: 'Thông báo',
        }}
      />
      <Stack.Screen
        name="detailNotification"
        component={notification}
        options={{
          headerTitleAlign: 'center',
          title: 'Chi tiết thông báo',
        }}
      />
    </Stack.Navigator>
  );
}
