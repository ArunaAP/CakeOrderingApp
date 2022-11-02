import { StyleSheet, Text, View ,TouchableOpacity , TextInput} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Fontisto';
import RadioButtonRN from 'radio-buttons-react-native';

export default function AddCardScreen({navigation} ) {

    const [text, onChangeText] = React.useState("");

    const data = [
        {
          label: 'Remember This Card Details'
         },

        ];

    const TriangleCorner = () => {
        return <View style={styles.triangleCorner} />;
      };
  return (
    <View style = {{
        justifyContent:'flex-start',
        padding:15,
        backgroundColor : '#FFFFFF',
        flex : 1
    }}>
         {/* header */}
         <View style = {{
            flexDirection : 'row',
            alignItems : 'baseline',
            justifyContent : 'center',
            justifyContent : 'space-between',
          
        }}>
                    <TouchableOpacity
                     onPress={() => navigation.navigate('CheckoutScreen')}
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
                                }}>Add New Card</Text>
                    </View>
                    <TouchableOpacity
                   
                    >
                    <View>
                                <Icon name="cart-plus" size={35} color="#000000" />
                    </View>
                    </TouchableOpacity>

        </View>

        {/* card component */}
        <View style = {{
            backgroundColor : "#FF6C44",
            marginTop : 20,
            width : "100%",
            height : 200,
            borderRadius : 10,
        }}>
            <View style = {{
                 padding : 10
            }}>
                <View style ={{
                    flexDirection : 'row',
                    marginTop : 5
                }}>
                   <Icon2 name="radio-btn-active" size={25} color="#000000" />
                   <View style = {{
                    marginLeft : 20
                   }}>
                   <Icon2 name="visa" size={25} color="#000000" />
                   </View>

                   <View style = {{
                marginLeft : 173
            }}>
            <TriangleCorner style={styles.triangleCornerTopRight} />
            </View>

                </View>

            </View>

            <View style = {{
                marginLeft : 10,
                // marginTop : "19%"
            }}>
                <Text style = {{
                    fontSize : 20,
                    color : '#FFFFFF',
                    fontWeight : '500',
                }}>
                    R.A.N.T Bandara {'\n'}
                    1254 6523 9987 5642
                </Text>
            </View>
        </View>

 {/* Form */}

 <View style = {{
                            marginTop : 20,
                        }}>  

                            {/* Card Number */}
                                                <View style = {{
                                                marginLeft : 12,
                                             
                                            }}>
                                                <Text style = {{
                                                    fontSize : 23,
                                                    fontWeight : '600',
                                                    color : '#000000'
                                                }}>Card Number</Text>
                                            </View>

                                            <TextInput
                                                    style={styles.input}
                                                    onChangeText={onChangeText}
                                                    value={text}
                                                    placeholder = '1254 6523 9987 5642'
                                                />

                            {/* Card Holder Name */}

                                                   <View style = {{
                                                        marginLeft : 12,
                                                        marginTop : 20
                                                    }}>
                                                        <Text style = {{
                                                            fontSize : 23,
                                                            fontWeight : '600',
                                                            color : '#000000'
                                                        }}>Card Holder Name</Text>
                                                    </View>

                                                    <TextInput
                                                            style={styles.input}
                                                            onChangeText={onChangeText}
                                                            value={text}
                                                            placeholder = 'R.A.N.T Bandara'
                                                        />

                                    <View style = {{
                                             flexDirection : 'row',
                                             alignContent : 'space-between',
                                             justifyContent : 'space-between',
                                             marginRight : 100
                                      }}>

                                      {/* Expiry Date               */}

                                      <View>
                                      <View style = {{
                                                        marginLeft : 12,
                                                        marginTop : 20
                                                    }}>
                                                        <Text style = {{
                                                            fontSize : 23,
                                                            fontWeight : '600',
                                                            color : '#000000'
                                                        }}>Expiry Date</Text>
                                                    </View>

                                                    <TextInput
                                                            style={styles.input2}
                                                            onChangeText={onChangeText}
                                                            value={text}
                                                            placeholder = '12/23'
                                                        />
                                      </View>



                                         {/* Expiry Date               */}

                                         <View>
                                         <View style = {{
                                                        marginLeft : 12,
                                                        marginTop : 20
                                                    }}>
                                                        <Text style = {{
                                                            fontSize : 23,
                                                            fontWeight : '600',
                                                            color : '#000000'
                                                        }}>CVV</Text>
                                                    </View>

                                                    <TextInput
                                                            style={styles.input2}
                                                            onChangeText={onChangeText}
                                                            value={text}
                                                            placeholder = "137"
                                                        />
                                                        </View>
                                         </View>
                          </View>

                          {/* save details */}

                          <View>
                          <RadioButtonRN
                            data={data}
                            selectedBtn={(e) => console.log(e)}
                            box={false}
                            circleSize={25}
                            animationTypes={['zoomIn']}
                            textStyle = {{
                                fontSize : 18,
                                fontWeight : '500'
                            }}
                            icon={
                                <Icon
                                name="check-circle"
                                size={25}
                                color="#000000"
                                />
                            }
                            />
                          </View>

                          {/* add card btn */}

              <TouchableOpacity
                 onPress={() => navigation.navigate('Payment')}
                style = {{
                    marginTop : "16%"
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
                 }}>Add Card</Text>
                 </View>
                
            </View>
                </TouchableOpacity>




    </View>
  )
}

const styles = StyleSheet.create({
    triangleCorner: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderRightWidth: 150,
        borderTopWidth: 120,
        borderRightColor: "transparent",
        borderTopColor: "#FFA133",
        transform: [{ rotate: "90deg" }],
      },

      input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderRadius : 15,
        backgroundColor : '#DDDDDD',
        fontSize : 18,
        fontWeight : '600'
      },

      input2: {
        height: 40,
        width : 100,
        margin: 12,
        padding: 10,
        borderRadius : 15,
        backgroundColor : '#DDDDDD',
        fontSize : 15,
        fontWeight : '600'
      },

})