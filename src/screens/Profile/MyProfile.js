import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function MyProfile({navigation}) {

    const Separator = () => (
        <View style={styles.separator} />
      );

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
                                }}>My Account</Text>
                    </View>
                    <TouchableOpacity
                   
                    >
                    <View>
                        <TouchableOpacity
                         onPress={() => navigation.navigate('AddProfile')}
                        >
                        <Text style = {{
                                                                        fontSize : 25,
                                                                        fontWeight : '600',
                                                                        color : '#FF6C44'
                                }}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    </TouchableOpacity>
        </View>

        {/* Details Component */}
        <View style = {{
            backgroundColor : '#DDDDDD',
            flex : 1,
            margin : 20,
            borderRadius : 15,
        }}>

            <View style = {{
                flexDirection : 'row',
                padding : 20,
                justifyContent : 'space-between'
            }}>
                <View>
                    <Text style = {{
                        fontSize : 20,
                        fontWeight : '600',
                        color : '#000000',
                    }}>Full Name</Text>
                </View>

                <View style = {{

                }}>
                    <Text style = {{
                                                fontSize : 20,
                                                fontWeight : '600',
                                                color : '#000000',
                    }}>Namal</Text>
                </View>
            </View>
            <Separator />
            {/* end of one line */}

            <View style = {{
                flexDirection : 'row',
                padding : 20,
                justifyContent : 'space-between'
            }}>
                <View>
                    <Text style = {{
                        fontSize : 20,
                        fontWeight : '600',
                        color : '#000000',
                    }}>User ID</Text>
                </View>

                <View style = {{

                }}>
                    <Text style = {{
                                                fontSize : 20,
                                                fontWeight : '600',
                                                color : '#000000',
                    }}>12365</Text>
                </View>
            </View>
            <Separator />
            {/* end of one line */}

            <View style = {{
                flexDirection : 'row',
                padding : 20,
                justifyContent : 'space-between'
            }}>
                <View>
                    <Text style = {{
                        fontSize : 20,
                        fontWeight : '600',
                        color : '#000000',
                    }}>Phone Number</Text>
                </View>

                <View style = {{

                }}>
                    <Text style = {{
                                                fontSize : 20,
                                                fontWeight : '600',
                                                color : '#000000',
                    }}>0772417049</Text>
                </View>
            </View>
            <Separator />
            {/* end of one line */}

            <View style = {{
                flexDirection : 'row',
                padding : 20,
                justifyContent : 'space-between'
            }}>
                <View>
                    <Text style = {{
                        fontSize : 20,
                        fontWeight : '600',
                        color : '#000000',
                    }}>Email</Text>
                </View>

                <View style = {{

                }}>
                    <Text style = {{
                                                fontSize : 20,
                                                fontWeight : '600',
                                                color : '#000000',
                    }}>Namal@gmail.com</Text>
                </View>
            </View>
            <Separator />
            {/* end of one line */}

            <View style = {{
                flexDirection : 'row',
                padding : 20,
                justifyContent : 'space-between'
            }}>
                <View>
                    <Text style = {{
                        fontSize : 20,
                        fontWeight : '600',
                        color : '#000000',
                    }}>Adress</Text>
                </View>

                <View style = {{

                }}>
                    <Text style = {{
                                                fontSize : 20,
                                                fontWeight : '600',
                                                color : '#000000',
                    }}>Kegalle</Text>
                </View>
            </View>
            <Separator />
            {/* end of one line */}

            <View style = {{
                marginTop : "65%",
                alignItems : 'center'
            }}>
                <Text style = {{
                                            fontSize : 20,
                                            fontWeight : '600',
                                            color : '#000000',
                                            justifyContent : 'center',
                                            alignItems : 'center'
                }}>Eat_Me {'\n'}
                        237/22 Vijayakumaratunga Mawatha,{'\n'}
                        Colombo 5 {'\n'}
                        (Hotline: +94-11-7551111 )         {'\n'}       
                </Text>
            </View>

           
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    separator: {
        marginLeft : 20,
        marginRight : 20 ,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
})