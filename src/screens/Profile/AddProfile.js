import { StyleSheet, Text, View ,TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ref, set,onValue , update} from "firebase/database";  //import firebase configuration file 
import { db } from "../../components/config";


export default function AddProfile({navigation}) {

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

    function updateUser(){
        update(ref(db, 'users/' + Name), {
            Name: Name,
            Phone: Phone,
            Email : Email,
            Address : Address
          });
    }

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

                    <View style = {{
                       
                    }}>
                               <Text style = {{
                                 color : '#FFFFFF'
                               }}>NO</Text>
                    </View>
        </View>

        <View style ={{
                        backgroundColor : '#DDDDDD',
                        margin : 20,
                        paddingBottom : 50,
                        borderRadius : 15,
        }}>
                                        {/* Full Name */}
                                        <View style = {{
                                                marginLeft : 12,
                                                marginTop :20
                                             
                                            }}>
                                                <Text style = {{
                                                    fontSize : 23,
                                                    fontWeight : '600',
                                                    color : '#000000'
                                                }}>Full Name</Text>
                                            </View>

                                            <TextInput
                                                    style={styles.input}
                                                    value={Name}
                                                />
                                         {/* Phone Number */}
                                        <View style = {{
                                                marginLeft : 12,
                                                marginTop :20
                                             
                                            }}>
                                                <Text style = {{
                                                    fontSize : 23,
                                                    fontWeight : '600',
                                                    color : '#000000'
                                                }}>Phone Number</Text>
                                            </View>

                                            <TextInput
                                                    style={styles.input}
                                                    onChangeText={setPhone}
                                                    value={Phone}
                                                />
                                  
                                    {/* Email */}
                                        <View style = {{
                                                marginLeft : 12,
                                                marginTop :20
                                             
                                            }}>
                                                <Text style = {{
                                                    fontSize : 23,
                                                    fontWeight : '600',
                                                    color : '#000000'
                                                }}>Email</Text>
                                            </View>

                                            <TextInput
                                                    style={styles.input}
                                                    onChangeText={setEmail}
                                                    value={Email}
                                                />
                                      {/* Adress */}
                                        <View style = {{
                                                marginLeft : 12,
                                                marginTop :20
                                             
                                            }}>
                                                <Text style = {{
                                                    fontSize : 23,
                                                    fontWeight : '600',
                                                    color : '#000000'
                                                }}>Adress</Text>
                                            </View>

                                            <TextInput
                                                    style={styles.input}
                                                    onChangeText={setAddress}
                                                    value={Address}
                                                />
              </View>


                             {/* done btn */}
                             <View style = {{

}}>
<TouchableOpacity
onPress={() => navigation.navigate('Home')}
onPressIn={updateUser}
 style = {{
   marginTop : "30%"
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

        
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderRadius : 15,
        backgroundColor : '#BBBDC1'
      },
})