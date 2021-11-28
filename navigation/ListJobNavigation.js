import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DetailPost from '../screens/DetailPost';
import ListJob from '../screens/ListJob';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

 function ListJobNavigation() {
    const Stack = createNativeStackNavigator();
    return (
    <Stack.Navigator>
                <Stack.Screen name="ListJob" component={ListJob}  options={{
                  header:()=>{null},  
                }}/>
                
                <Stack.Screen name="DetailPost" component={DetailPost}  options={
                {
                    headerTitle:"Chi tiết bài viết",
                   
                }
                }/>
                 
    </Stack.Navigator>
    )
}
export default ListJobNavigation;