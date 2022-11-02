import { StyleSheet, Text, View ,TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react'
import success from './Pics/success.png'

export default function Payment({navigation}) {
  return (
    <View style = {{
        justifyContent:'flex-start',
        padding:15,
        backgroundColor : '#FFA133',
        flex : 1
    }}>

         
         {/* text view */}
         <View style ={{
            justifyContent : 'center',
            alignContent : 'center',
            alignItems : 'center',
            marginTop : "20%"
         }}>
         <View style ={{
          
         }}>
            <Text style = {{
                  fontSize : 45,
                  fontWeight : '600',
                  color : '#000000'
            }}>Congratulation</Text>
         </View>

         <View>
            <Text style = {{
                fontSize : 25,
                fontWeight : '500',
                color : '#000000'
            }}>Payment Success</Text>
         </View>
         </View>




        {/* photo view */}
        <View style ={{
            alignContent : 'center',
            alignItems : 'center'
        }}>
        <Image source={success} style={{
                                                                    width:300,
                                                                    height:300,
                                                                    borderRadius: 10,
                                                                    justifyContent : 'center'
                                                                    }}
                                      ></Image>
        </View>

                                  {/* done btn */}

                                  <TouchableOpacity
                 onPress={() => navigation.navigate('Home')}
                style = {{
                    marginTop : "58%"
                }}
                >
                <View style = {{
                backgroundColor : "#FF6C44",
                padding : "2%",
                paddingLeft : 100,
                paddingRight : 100,
                borderRadius : 15
            }}
            >
                
                 <View style = {{
                 justifyContent : 'center',
                 alignContent : 'center',
                 alignItems : 'center'
                 }}>
                 <Text style = {{
                       color : '#FFFFFF',
                       fontSize : 25,
                       fontWeight : '800'
                 }}>Done</Text>
                 </View>
                
            </View>
                </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})