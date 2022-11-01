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

const Stack = createNativeStackNavigator();



const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Main" component={MainScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Details" component={DetailsScreen}/>
        <Stack.Screen name="Manager" component={ManagerScreen}/>
        <Stack.Screen name="Cheff" component={CheffScreen}/>
        <Stack.Screen name="Delivery" component={DeliveryScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
