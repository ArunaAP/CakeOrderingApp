import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';


const MainScreen = ({navigation}) => {
  return (
    <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }}>
      <Text>MainScreen</Text>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Home')}
        style={{
            backgroundColor:'#A74AC7',
            padding:10,
            width:'80%',
            borderRadius:30,
            justifyContent:'space-between',
            alignItems:'center',
            flexDirection:'row',
            marginTop:20

        }}>
            <Text style={{
                fontSize:20,
                fontWeight:'bold',
                color:'white'
            }}>Let's Start</Text>
            <Text style={{
                fontSize:20,
                fontWeight:'bold',
                color:'white'
            }}> - </Text>
        </TouchableOpacity>

    </View>
    
  )
}

export default MainScreen;