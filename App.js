import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./src/screens/HomeScreen";
import MainScreen from "./src/screens/MainScreen";
import ManagerScreen from './src/screens/Manager/ManagerScreen';
import CheffScreen from './src/screens/Cheff/CheffScreen';
import DeliveryScreen from './src/screens/Delivery/DeliveryScreen';
import ProfileScreen from './src/screens/Profile/ProfileScreen';
import AddCakeScreen from './src/screens/Manager/AddCakeScreen';
import CakeItemList from './src/screens/Manager/CakeItemList';
import Header from './src/screens/Manager/Header';
import UpdateCakeScreen from './src/screens/Manager/UpdateCakeScreen';
import ComplaintScreen from './src/screens/Manager/ComplaintScreen';
import FeedbackScreen from './src/screens/Manager/FeedbackScreen';

const Stack = createNativeStackNavigator();



const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Main" component={MainScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Manager" component={ManagerScreen}/>
        <Stack.Screen name="Cheff" component={CheffScreen}/>
        <Stack.Screen name="Delivery" component={DeliveryScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="AddCake" component={AddCakeScreen}/>
        <Stack.Screen name="UpdateCake" component={CakeItemList}/>
        <Stack.Screen name="Update" component={UpdateCakeScreen}/>
        <Stack.Screen name="Complain" component={ComplaintScreen}/>
        <Stack.Screen name="Feedback" component={FeedbackScreen}/>
        <Stack.Screen name="Header" component={Header}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
