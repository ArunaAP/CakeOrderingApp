import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ref, set,onValue } from "firebase/database";  //import firebase configuration file 
import { db } from "../../components/config";

export default function MyProfile({navigation}) {

    const [Name , setName] = React.useState("Namal Tharindu");
    const [Phone , setPhone] = React.useState("");
    const [Email , setEmail] = React.useState("");
    const [Address , setAddress] = React.useState("");

    function read(){
        const starCountRef = ref(db, 'users/' + Name );
        onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        
        setName(data.Name)
        setPhone(data.Phone)
        setEmail(data.Email)
        setAddress(data.Address)

        });
     }
     useEffect(()=>{
        read();
    },[])

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
                    }}>{Name}</Text>
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
                    }}>EM1203654</Text>
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
                    }}>{Phone}</Text>
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
                    }}>{Email}</Text>
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
                    }}>{Address}</Text>
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