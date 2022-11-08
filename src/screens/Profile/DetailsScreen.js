import { StyleSheet, Text, View , TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import cake4 from './Pics/cake4.jpg'


const DetailsScreen = ({navigation}) => {

    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if(counter<=0) {
      decrementCounter = () => setCounter(1);
    }



  return (
    <View style = {{
        justifyContent:'flex-start',
        padding:15,
        backgroundColor : '#FFFFFF',
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
                                }}>Details</Text>
                    </View>
                    <TouchableOpacity
                   
                    >
                    <View>
                                <Icon name="cart-plus" size={35} color="#000000" />
                    </View>
                    </TouchableOpacity>

        </View>

        <View style = {{
            alignContent : 'center',
            alignItems : 'center'
        }}>
                      {/* Card View */}
          <View style = {{
                                        backgroundColor : '#FDDED4',
                                        width : 350,
                                        height : 300,
                                        marginTop : 20,
                                        borderRadius : 15,
                                        
                                    }}> 

                                    <View style = {{
                                        flexDirection : 'row',
                                        marginLeft : 10,
                                        alignItems : 'baseline',
                                    }}>
                                                            <Icon name="fire" size={18} color="#FF6C44" />
                                                            <View style = {{
                                                                marginLeft : 10,
                                                                marginTop : 10
                                                            }}>
                                                                
                                                            <Text style = {{
                                                                            fontSize : 17,
                                                                            fontWeight : '600',
                                                                            color : '#000000',
                                                                }}>78 Calories
                                                                
                                                                </Text>

                                                            </View>


                                    </View>

                                    {/* view for image */}

                                    <TouchableOpacity 
                                  
                                    >
                                    <View style = {{
                                        justifyContent : 'center',
                                        alignItems : 'center',
                                        marginTop : 20
                                    }}>
                                    <Image source={cake4} style={{
                                                                    width:200,
                                                                    height:200,
                                                                    borderRadius: 100,
                                                                    justifyContent : 'center'
                                                                    }}
                                      ></Image>
                                    </View>
                                    </TouchableOpacity>
                                    </View>
        </View>

        {/* end of the card View */}

        <View style = {{
            justifyContent : 'center',
            alignContent : 'center',
            alignItems : 'center',
            paddingTop : 20
        }}>
            <Text style = {{
                fontSize : 35,
                color : '#000000',
                fontWeight : '600'
            }}>Chocoberry Cupcake</Text>
        </View>

        <View style = {{
            justifyContent : 'center',
            alignContent : 'flex-start',
            alignItems : 'center',
            paddingLeft : 20,
            paddingRight : 20,
            paddingTop : 20
        }}>
            <Text style = {{
                fontSize : 21,
                fontWeight : '350',
                color : '#000000',
            }}>This finest cupcake combines with chocolate ganache frosting, hand crafted milk chocolate and fresh strawberry decoration create a dreamy indulgence.</Text>
        </View>

        {/* sizes list */}

        <View style = {{
            flexDirection : 'row',
            justifyContent : 'center',
            alignItems : 'center',
            alignContent : 'center',
            marginTop : 30
        }}>
                      {/* size text */}
                      <View style ={{
                        marginRight : 20
                      }}>
                                  <Text  style = {{
                                    fontSize : 28,
                                    color : "#000000",
                                    fontWeight : '500'
                                  }}>Sizes  :</Text>
                      </View>

                      {/* number size */}
                      <TouchableOpacity style = {{
                        backgroundColor : '#DDDDDD',
                        borderRadius : 10,
                        padding : "4%",
                        marginRight : 10
                      }}>
                        <View>
                            <Text style = {{
                                                                    fontSize : 28,
                                                                    color : "#000000",
                                                                    fontWeight : '500'
                            }}>12"</Text>
                        </View>
                      </TouchableOpacity>

                                            {/* number size */}
                                            <TouchableOpacity style = {{
                        backgroundColor : '#DDDDDD',
                        borderRadius : 10,
                        padding : "4%",
                        marginRight : 10
                      }}>
                        <View>
                            <Text style = {{
                                                                    fontSize : 28,
                                                                    color : "#000000",
                                                                    fontWeight : '500'
                            }}>13"</Text>
                        </View>
                      </TouchableOpacity>

                                            {/* number size */}
                                            <TouchableOpacity style = {{
                        backgroundColor : '#DDDDDD',
                        borderRadius : 10,
                        padding : "4%",
                        marginRight : 10
                      }}>
                        <View>
                            <Text style = {{
                                                                    fontSize : 28,
                                                                    color : "#000000",
                                                                    fontWeight : '500'
                            }}>14"</Text>
                        </View>
                      </TouchableOpacity>
        </View>

                      {/* Button bar */}

                      <View style = {{
                        flexDirection : 'row',
                        justifyContent : 'center',
                        alignItems : 'center',
                        alignContent : 'center'
                       
                      }}>
                                    {/* number incerse bar */}
                                    <View style = {{
                                         flexDirection : 'row',
                                         justifyContent : 'center',
                                         alignContent : 'center',
                                         alignItems : 'center',
                                         backgroundColor : '#DDDDDD',
                                         paddingLeft : 30,
                                         paddingRight : 30,
                                         marginTop : 20,
                                         marginBottom : 20,
                                         borderRadius : 15,
                                         marginRight : 25                             
                                    }}>

                                                <TouchableOpacity
                                                onPress={decrementCounter}>
                                                    <Text style = {{
                                                        fontSize : 50
                                                    }}> - </Text>
                                                </TouchableOpacity>

                                                <Text style = {{
                                                    fontSize : 40
                                                }}>{counter}</Text>

                                                <TouchableOpacity
                                                onPress={incrementCounter}
                                                >
                                                    <Text style = {{
                                                          fontSize : 40
                                                    }}> + </Text>
                                                </TouchableOpacity>

                                    </View>

                                    <TouchableOpacity 
                                    onPress={() => navigation.navigate('MyCart')}
                                    >
                                    <View style = {{
                                         flexDirection : 'row',
                                         justifyContent : 'center',
                                         alignContent : 'center',
                                         alignItems : 'center',
                                         backgroundColor : '#FF6C44',
                                         paddingLeft : 30,
                                         paddingRight : 30,
                                         marginTop : 20,
                                         marginBottom : 20,
                                         borderRadius : 15,
                                        padding : '8%'  
                                    }}>

                                        <Text style = {{
                                            fontSize : 30,
                                            fontWeight : '600',
                                            color : '#FFFFFF'
                                        }}>Buy Now</Text>



                                    </View>
                                    </TouchableOpacity>


                                   
                      </View>




    
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({})