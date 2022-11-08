import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./src/screens/HomeScreen";
import MainScreen from "./src/screens/MainScreen";
import ManagerScreen from './src/screens/Manager/ManagerScreen';
import CheffScreen from './src/screens/Cheff/CheffScreen';
import DeliveryScreen from './src/screens/Delivery/DeliveryScreen';
import ProfileScreen from './src/screens/Profile/ProfileScreen';
import LoginScreen from './src/screens/Profile/LoginScreen';
import DetailsScreen from './src/screens/Profile/DetailsScreen';
import MyCart from './src/screens/Profile/MyCart';
import CheckoutScreen from './src/screens/Profile/CheckoutScreen';
import AddCardScreen from './src/screens/Profile/AddCardScreen';
import SignInScreen from './src/screens/Profile/SignInScreen';
import Payment from './src/screens/Profile/Payment';
import Notification from './src/screens/Profile/Notification';
import MyProfile from './src/screens/Profile/MyProfile';
import AddProfile from './src/screens/Profile/AddProfile';

const Stack = createNativeStackNavigator();



const App = () => {
  return(
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Main" component={MainScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Details" component={DetailsScreen}/>
        <Stack.Screen name="MyCart" component={MyCart}/>
        <Stack.Screen name="CheckoutScreen" component={CheckoutScreen}/>
        <Stack.Screen name="AddCardScreen" component={AddCardScreen}/>
        <Stack.Screen name="Payment" component={Payment}/>
        <Stack.Screen name="Notification" component={Notification}/>
        <Stack.Screen name="MyProfile" component={MyProfile}/>
        <Stack.Screen name="SignInScreen" component={SignInScreen}/>
        <Stack.Screen name="AddProfile" component={AddProfile}/>
        <Stack.Screen name="Manager" component={ManagerScreen}/>
        <Stack.Screen name="Cheff" component={CheffScreen}/>
        <Stack.Screen name="Delivery" component={DeliveryScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
