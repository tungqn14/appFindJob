import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favorite from '../screens/Favorite';
const Stack = createNativeStackNavigator();
function FavoriteNavigation(){
    return (
    <Stack.Navigator>
                <Stack.Screen name="Favorite" component={Favorite}  options={
                {
                    header:()=>{null},
                }
                }/>
    </Stack.Navigator>
    )
}
export default FavoriteNavigation;