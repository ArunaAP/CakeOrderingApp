import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import cake_icon from './Profile/Pics/cake_icon.png'


const MainScreen = ({navigation}) => {
  return (
    <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor : '#FDDED4'
    }}>

                                               <Image source={cake_icon} style={{
                                                    width:300,
                                                    height:300,
                                                    borderRadius: 100,
                                                  
                                                    }}
                                                ></Image>

        
        <Text style = {{
          fontSize : 50,
          fontWeight : '600',
          color : '#000000'
        }}>Eat Me</Text>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Login')}
        style={{
            backgroundColor:'#FF6C44',
            padding:10,
            width:'80%',
            borderRadius:20,
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