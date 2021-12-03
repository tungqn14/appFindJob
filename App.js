import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from './navigation/HomeNavigation';
import ListJobNavigation from './navigation/ListJobNavigation';
import Home from './screens/Home';
import DetailPost from './screens/DetailPost';
import ListJob from './screens/ListJob';
import AccountNavigation from './navigation/AcountNavigation';
import FavoriteNavigation from './navigation/FavoriteNavigation';
import CompanyNavigation from './navigation/CompanyNavigation';
const Tab = createBottomTabNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <Tab.Navigator
            screenOptions={{
          backgroundColor: "#9AC4F8",
        tabBarActiveTintColor: '#F4446B',
        tabBarLabelStyle:{fontSize:14}
      }} >
       <Tab.Screen name="HomeNavigation" component={HomeNavigation} 
            options={ {header:()=>{null},
            tabBarLabel:"Trang Chủ",
            tabBarIcon:({color})=><Icon name="home" size={20} color="black" color={color}/>
              }}
          />
       <Tab.Screen name="ListJobNavigation" component={ListJobNavigation}
                    options={ {
                    tabBarLabel:"Bài Viết",
                    header:()=>{null},
                    tabBarIcon:({color})=><Icon name="newspaper" size={20} color="black" color={color} />
                }}/>
                 <Tab.Screen name="CompanyNavigation" component={CompanyNavigation}
                    options={ {
                    tabBarLabel:"Công ty",
                    header:()=>{null},
                    tabBarIcon:({color})=><Icon name="industry" size={20} color="black" color={color} />
                }}/>
                <Tab.Screen name="AccountNavigation" component={AccountNavigation}
                    options={ {
                    tabBarLabel:"Tài khoản",
                    headerTitleAlign:"center",
                    headerTitle:"Tài Khoản",
                    tabBarIcon:({color})=><Icon name="user" size={20} color="black" color={color} />
                }}/>
              
      </Tab.Navigator>
  </NavigationContainer>
        
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  
  },
});

export default App;
