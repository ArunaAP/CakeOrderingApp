import { StyleSheet, Text, View , TouchableOpacity , Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react'
import cake4 from './Pics/cake4.jpg'
import cake5 from './Pics/cake5.png'

export default function MyCart({navigation}) {
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
                     onPress={() => navigation.navigate('Details')}
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
                                }}>My Cart</Text>
                    </View>
                    <TouchableOpacity
                   
                    >
                    <View>
                                <Icon name="cart-plus" size={35} color="#000000" />
                    </View>
                    </TouchableOpacity>

        </View>

        {/* cake tab */}

        <View style = {{
            backgroundColor : '#DDDDDD',
            flexDirection : 'row',
            justifyContent : 'center',
            alignContent : 'center',
            alignItems : 'center',
            justifyContent : 'space-between',
            padding : 20,
            borderRadius : 15,
            marginTop : 20
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
                                    </View>

                                    {/* quantity */}
                                    <View>
                                        <Text style = {{
                                            fontSize : 25,
                                            fontWeight : '600',
                                            color : '#000000'
                                        }}>+1</Text>
                                    </View>

        </View>

        <View style = {{
            backgroundColor : '#DDDDDD',
            flexDirection : 'row',
            justifyContent : 'center',
            alignContent : 'center',
            alignItems : 'center',
            justifyContent : 'space-between',
            padding : 20,
            borderRadius : 15,
            marginTop : 20
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
                                        }}>Chocoberry Cupcake</Text>
                                    </View>

                                    {/* quantity */}
                                    <View>
                                        <Text style = {{
                                            fontSize : 25,
                                            fontWeight : '600',
                                            color : '#000000'
                                        }}>+2</Text>
                                    </View>

        </View>

        {/* footer Component */}

        <View style = {{
              backgroundColor : '#DDDDDD',
              paddingLeft : 20,
             marginTop : "45%",
             paddingTop : 25,
             borderTopLeftRadius : 15,
             borderTopRightRadius : 15
        }}>
            <View >
                <Text style = {{
                     fontSize : 18,
                     fontWeight : '600',
                     color : '#000000'
                }}>Sub Total       :  Rs 1600 . 00</Text>
            </View>
            <View>
                <Text style = {{
                                         fontSize : 18,
                                         fontWeight : '600',
                                         color : '#000000'
                }}>Delivery Fee  : Rs  200 . 00</Text>
            </View>
            {/* add horizontal line here */}
        </View>

        {/* btn Component in footer */}
        
        <View style = {{
            paddingTop : 20,
            justifyContent : 'center',
            alignContent : 'center',
            alignItems : 'center',
            backgroundColor : '#DDDDDD',
            paddingBottom : 20,
            borderBottomEndRadius : 15,
            borderBottomLeftRadius :15
        }}>
            <View style = {{
             
            }}>
                <Text style = {{
                       fontSize : 28,
                       fontWeight : '600',
                       color : '#000000',
                       marginBottom : 20
                }}>Total    :    Rs 1800</Text>
            </View>

                <TouchableOpacity>
                <View style = {{
                backgroundColor : "#FF6C44",
                padding : "2%",
                paddingLeft : 100,
                paddingRight : 100,
                borderRadius : 15
            }}>
                
                 <View style = {{
                 
                 }}>
                 <Text style = {{
                       color : '#FFFFFF',
                       fontSize : 25
                 }}>Place Your Order</Text>
                 </View>
                
            </View>
                </TouchableOpacity>
        </View>




    </View>
  )
}

const styles = StyleSheet.create({})