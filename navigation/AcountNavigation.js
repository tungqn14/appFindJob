import React from 'react';
import Home from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
export default function AccountNavigation(){
    const Stack = createNativeStackNavigator();
    return (
    <Stack.Navigator>
                <Stack.Screen name="Login" component={Login}  options={
                {
                    header:()=>{null},
                }
                }/>
                 <Stack.Screen name="Register" component={Register}  options={
                {
                    header:()=>{null},
                }
                }/>
    </Stack.Navigator>
    )
}