import React from "react";
import { Text, StyleSheet, View , Image , TextInput, TouchableOpacity, Button } from 'react-native'
import cake_icon from './Pics/cake_icon.png'
import { ref, set } from "firebase/database";  //import firebase configuration file 
import { db } from "../../components/config";


const LoginScreen = ({navigation}) => {

    const [Email, onChangeEmail] = React.useState("");
    const [Name, onChangeName] = React.useState("");
    const [Password, onChangePassword] = React.useState("");

       function create ()  {
         set(ref(db, 'users/' + Name), {
             Email: Email,
             Name: Name,
             Password : Password
           });
     }


  return (
    <View style = {styles.container}>
    <View style = {{
          flexDirection : 'row',
          alignItems : 'baseline',
          alignItems : 'center',
          justifyContent : 'center'
      }}>
    
  <Image source={cake_icon} style={{
      width:90,
      height:90,
      borderRadius:10,
      marginTop:8
      }}
    ></Image>
   <Text style = {{
      fontSize : 35,
      fontWeight : '600',
      color : 'black'
   }}>Eat Me</Text>
  </View>

  {/* line 2 text */}

  <View style = {{
      justifyContent : 'center',
      alignItems : 'center'
  }}>
      <Text style = {{
          fontSize : 20,
          fontWeight : '600',
          color : '#000000'
      }}>Getting Started</Text>
  </View>

  {/* line 3 text */}

  <View style = {{
      justifyContent : 'center',
      alignItems : 'center',
      paddingTop : 2 
  }}>
      <Text style = {{
          fontSize : 22,
          fontWeight : '400',
          color : '#000000'
      }}>Create an Account to Continue</Text>
  </View>

  {/* Form */}

                        <View style = {{
                            marginTop : 80
                        }}>  

                            {/* Email */}
                                                <View style = {{
                                                marginLeft : 12,
                                             
                                            }}>
                                                <Text style = {{
                                                    fontSize : 23,
                                                    fontWeight : '600',
                                                    color : '#000000'
                                                }}>Email</Text>
                                            </View>

                                            <TextInput
                                                    style={styles.input}
                                                    onChangeText={(Email)  => {onChangeEmail(Email)} }
                                                    value={Email}
                                                />

                            {/* user name */}

                                                   <View style = {{
                                                        marginLeft : 12,
                                                        marginTop : 20
                                                    }}>
                                                        <Text style = {{
                                                            fontSize : 23,
                                                            fontWeight : '600',
                                                            color : '#000000'
                                                        }}>User Name</Text>
                                                    </View>

                                                    <TextInput
                                                            style={styles.input}
                                                            onChangeText={(Name) => {onChangeName(Name)}}
                                                            value={Name}
                                                        />

                                        {/* password                 */}

                                        <View style = {{
                                                        marginLeft : 12,
                                                        marginTop : 20
                                                    }}>
                                                        <Text style = {{
                                                            fontSize : 23,
                                                            fontWeight : '600',
                                                            color : '#000000'
                                                        }}>Password</Text>
                                                    </View>

                                                    <TextInput
                                                            cureTextEntry={true}
                                                            style={styles.input}
                                                            onChangeText={(Password) => {onChangePassword(Password)}}
                                                            value={Password}
                                                        />

                          </View>

                          {/* sign up btn */}

                          <View style = {{
                                justifyContent : 'center',
                                alignItems : 'center',
                                alignContent : 'center',
                                paddingTop : 70
                          }}>
                                    <TouchableOpacity style = {{
                                        backgroundColor : '#FF6C44',
                                        height : 50,
                                        width : "95%",
                                        alignItems : 'center',
                                        justifyContent : 'center',
                                        borderRadius : 15,

                                    }}
                                     onPress={() => navigation.navigate('Home')}
                                    //  onPress = {create}
                                    >
                                        <Text style = {{
                                            color : "#FFFFFF",
                                            fontSize : 25,
                                            fontWeight : '600'
                                        }}>Sign Up</Text>
                                    </TouchableOpacity>
                          </View>

                          {/* last line */}

                          <View style = {{
                            flexDirection : 'row',
                            marginTop : 15,
                            marginLeft : 13,
                            marginBottom : 50,
                            alignContent : 'center',

                          }}>
                            <View style = {{
                                marginRight : 30
                            }}>
                                <Text style = {{
                                    fontSize : 20,
                                    fontWeight : '600',
                                    color : '#000000'
                                }}>Already Have An Account ?</Text>
                            </View>
                            <View>
                                <TouchableOpacity    
                                >
                                <Text style = {{
                                                             fontSize : 20,
                                                             fontWeight : '600',
                                                             color : '#FF6C44'
                                }}>Sign in</Text>
                                </TouchableOpacity>
                            </View>
                          </View>









{/* End of the main View        */}
</View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container : {
        justifyContent:'flex-start',
        padding:15,
        backgroundColor : '#FFFFFF'
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderRadius : 15,
        backgroundColor : '#CFD0D7'
      },
})