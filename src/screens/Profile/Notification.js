import { StyleSheet, Text, View , TouchableOpacity , Image , ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import cake4 from './Pics/cake4.jpg'
import cake5 from './Pics/cake5.png'
import cake1 from './Pics/cake1.jpg'
import cake2 from './Pics/cake2.jpg'
import cake3 from './Pics/cake3.jpg'
import cake6 from './Pics/cake6.png'

export default function Notification({navigation}) {
  return (
    <View style = {{
        justifyContent:'flex-start',
        padding:15,
        backgroundColor : '#FFFFFF',
        flex : 1
    }}>
         <View style = {{
            flexDirection : 'row',
            alignItems : 'baseline',
            justifyContent : 'center',
            justifyContent : 'space-between'
        }}>
                    <TouchableOpacity
                     onPress={() => navigation.navigate('Home')}
                    >
                    <View>
                                <Icon name="arrow-circle-left" size={35} color="#000000" />
                    </View>
                    </TouchableOpacity>
                    <View>
                                <Text style = {{
                                    fontSize : 30,
                                    fontWeight : '600',
                                    color : '#000000'
                                }}>Notification</Text>
                    </View>

                    <View>
                    <Text style = {{
                                    fontSize : 30,
                                    fontWeight : '600',
                                    color : '#FFFFFF'
                                }}>ok</Text>
                    </View>
        </View>



        {/* scroll view 1  */}

        <View style = {{
            flex : 1
        }}>
        <ScrollView style = {{
            backgroundColor : '#FFFFFF'
        }}>
            {/* tab */}

            <View style = {{
            marginTop : 30,
            paddingLeft : 10,
        }}>
            <Text style = {{
                fontSize : 22,
                fontWeight : '500',
                color : '#000000'
            }}>To Day</Text>
        </View>

        <View style = {{
            backgroundColor : '#FFD9AD',
            flexDirection : 'row',
            justifyContent : 'center',
            alignContent : 'center',
            alignItems : 'center',
            justifyContent : 'space-between',
            padding : 20,
            borderRadius : 15,
            marginTop : 20,
            marginLeft : 20,
            marginRight : 20
        }}>                      
                                {/* image */}
                                   <View style = {{
                                        justifyContent : 'center',
                                    }}>
                                    <Image source={cake4} style={{
                                                                    width:100,
                                                                    height:100,
                                                                    borderRadius: 100,
                                                                    justifyContent : 'center'
                                                                    }}
                                      ></Image>
                                    </View>

                                    {/* text */}
                                    <View style = {{
                                    
                                    }}>
                                        <Text style = {{
                                            fontSize : 22,
                                            color : '#000000',
                                            fontWeight : '500'
                                        }}>Chocoberry Cupcake</Text>
                                          {/* price */}
                                        <Text style = {{
                                            fontSize : 18,
                                            color : '#FF1717',
                                            fontWeight : '500'
                                        }}>1 Hour ago</Text>
                                        
                                    </View>



        </View>

        <View style = {{
            backgroundColor : '#FFD9AD',
            flexDirection : 'row',
            justifyContent : 'center',
            alignContent : 'center',
            alignItems : 'center',
            justifyContent : 'space-between',
            padding : 20,
            borderRadius : 15,
            marginTop : 20,
            marginLeft : 20,
            marginRight : 20
        }}>                      
                                {/* image */}
                                   <View style = {{
                                        justifyContent : 'center',
                                    }}>
                                    <Image source={cake5} style={{
                                                                    width:100,
                                                                    height:100,
                                                                    borderRadius: 100,
                                                                    justifyContent : 'center',
                                                                    backgroundColor : "#FFFFFF"
                                                                    }}
                                      ></Image>
                                    </View>

                                    {/* text */}
                                    <View style = {{
                                    
                                    }}>
                                        <Text style = {{
                                            fontSize : 22,
                                            color : '#000000',
                                            fontWeight : '500'
                                        }}>Vanilla Cupcake</Text>
                                        {/* price */}
                                         <Text style = {{
                                            fontSize : 18,
                                            color : '#FF1717',
                                            fontWeight : '500'
                                        }}>50 Sec ago</Text>
                                    </View>


        </View>
        <View style = {{
            marginTop : 30,
            paddingLeft : 10,
        }}>
            <Text style = {{
                fontSize : 22,
                fontWeight : '500',
                color : '#000000'
            }}>Yesterday</Text>
        </View>

        {/* tab bar 2 */}

        <View style = {{
            backgroundColor : '#FDDED4',
            flexDirection : 'row',
            justifyContent : 'center',
            alignContent : 'center',
            alignItems : 'center',
            justifyContent : 'space-between',
            padding : 20,
            borderRadius : 15,
            marginTop : 20,
            marginLeft : 20,
            marginRight : 20
        }}>                      
                                {/* image */}
                                   <View style = {{
                                        justifyContent : 'center',
                                    }}>
                                    <Image source={cake1} style={{
                                                                    width:100,
                                                                    height:100,
                                                                    borderRadius: 100,
                                                                    justifyContent : 'center'
                                                                    }}
                                      ></Image>
                                    </View>

                                    {/* text */}
                                    <View style = {{
                                    
                                    }}>
                                        <Text style = {{
                                            fontSize : 22,
                                            color : '#000000',
                                            fontWeight : '500'
                                        }}>Chocolate Lava Cake</Text>
                                          {/* price */}
                                        <Text style = {{
                                            fontSize : 18,
                                            color : '#FF1717',
                                            fontWeight : '500'
                                        }}>Rs 850.00</Text>
                                    </View>



        </View>

        <View style = {{
            backgroundColor : '#FDDED4',
            flexDirection : 'row',
            justifyContent : 'center',
            alignContent : 'center',
            alignItems : 'center',
            justifyContent : 'space-between',
            padding : 20,
            borderRadius : 15,
            marginTop : 20,
            marginLeft : 20,
            marginRight : 20
        }}>                      
                                {/* image */}
                                   <View style = {{
                                        justifyContent : 'center',
                                    }}>
                                    <Image source={cake3} style={{
                                                                    width:100,
                                                                    height:100,
                                                                    borderRadius: 100,
                                                                    justifyContent : 'center'
                                                                    }}
                                      ></Image>
                                    </View>

                                    {/* text */}
                                    <View style = {{
                                    
                                    }}>
                                        <Text style = {{
                                            fontSize : 22,
                                            color : '#000000',
                                            fontWeight : '500'
                                        }}>Fruitcake Cake</Text>
                                          {/* price */}
                                        <Text style = {{
                                            fontSize : 18,
                                            color : '#FF1717',
                                            fontWeight : '500'
                                        }}>Rs 950.00</Text>
                                    </View>



        </View>

        <View style = {{
            backgroundColor : '#FDDED4',
            flexDirection : 'row',
            justifyContent : 'center',
            alignContent : 'center',
            alignItems : 'center',
            justifyContent : 'space-between',
            padding : 20,
            borderRadius : 15,
            marginTop : 20,
            marginLeft : 20,
            marginRight : 20
        }}>                      
                                {/* image */}
                                   <View style = {{
                                        justifyContent : 'center',
                                    }}>
                                    <Image source={cake6} style={{
                                                                    width:100,
                                                                    height:100,
                                                                    borderRadius: 100,
                                                                    justifyContent : 'center'
                                                                    }}
                                      ></Image>
                                    </View>

                                    {/* text */}
                                    <View style = {{
                                    
                                    }}>
                                        <Text style = {{
                                            fontSize : 22,
                                            color : '#000000',
                                            fontWeight : '500'
                                        }}>Vanilla Cupcake</Text>
                                          {/* price */}
                                        <Text style = {{
                                            fontSize : 18,
                                            color : '#FF1717',
                                            fontWeight : '500'
                                        }}>Rs 650.00</Text>
                                    </View>



        </View>

        <View style = {{
            backgroundColor : '#FDDED4',
            flexDirection : 'row',
            justifyContent : 'center',
            alignContent : 'center',
            alignItems : 'center',
            justifyContent : 'space-between',
            padding : 20,
            borderRadius : 15,
            marginTop : 20,
            marginLeft : 20,
            marginRight : 20
        }}>                      
                                {/* image */}
                                   <View style = {{
                                        justifyContent : 'center',
                                    }}>
                                    <Image source={cake2} style={{
                                                                    width:100,
                                                                    height:100,
                                                                    borderRadius: 100,
                                                                    justifyContent : 'center'
                                                                    }}
                                      ></Image>
                                    </View>

                                    {/* text */}
                                    <View style = {{
                                    
                                    }}>
                                        <Text style = {{
                                            fontSize : 22,
                                            color : '#000000',
                                            fontWeight : '500'
                                        }}>Chocoberry Cupcake</Text>
                                          {/* price */}
                                        <Text style = {{
                                            fontSize : 18,
                                            color : '#FF1717',
                                            fontWeight : '500'
                                        }}>Rs 450.00</Text>
                                    </View>



        </View>

        <View style = {{
            backgroundColor : '#FDDED4',
            flexDirection : 'row',
            justifyContent : 'center',
            alignContent : 'center',
            alignItems : 'center',
            justifyContent : 'space-between',
            padding : 20,
            borderRadius : 15,
            marginTop : 20,
            marginLeft : 20,
            marginRight : 20
        }}>                      
                                {/* image */}
                                   <View style = {{
                                        justifyContent : 'center',
                                    }}>
                                    <Image source={cake3} style={{
                                                                    width:100,
                                                                    height:100,
                                                                    borderRadius: 100,
                                                                    justifyContent : 'center'
                                                                    }}
                                      ></Image>
                                    </View>

                                    {/* text */}
                                    <View style = {{
                                    
                                    }}>
                                        <Text style = {{
                                            fontSize : 22,
                                            color : '#000000',
                                            fontWeight : '500'
                                        }}>Chocoberry Cupcake</Text>
                                          {/* price */}
                                        <Text style = {{
                                            fontSize : 18,
                                            color : '#FF1717',
                                            fontWeight : '500'
                                        }}>Rs 750.00</Text>
                                    </View>



        </View>



        </ScrollView>
        </View>

        

        
     
    </View>
  )
}

const styles = StyleSheet.create({})