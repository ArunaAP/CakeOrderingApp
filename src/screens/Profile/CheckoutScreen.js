import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import RadioButtonRN from 'radio-buttons-react-native';

export default function CheckoutScreen({navigation}) {

    const data = [
        {
          label: 'Visa'   
         },
         {
          label: 'Master Card'
         },
         {
            label: 'Cash On Delivery'
           }
        ];

  return (
    <View style ={{
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
                     onPress={() => navigation.navigate('MyCart')}
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
                                }}>Checkout</Text>
                    </View>
                    <TouchableOpacity
                   
                    >
                    <View>
                                <Icon name="cart-plus" size={35} color="#000000" />
                    </View>
                    </TouchableOpacity>

        </View>

        {/* radio button group */}

<RadioButtonRN
  data={data}
//   selectedBtn={(e) => console.log(e)}
//   initial={1}
  animationTypes={['zoomIn']}
  circleSize={25}
  style = {{
      paddingTop : 10,
  }}
  textStyle = {{
      fontSize : 23,
      fontWeight : '600',
      Color : '#000000'
  }}
  boxStyle = {{
    marginTop : 15,
    paddingTop : 30,
    paddingBottom : 30,
    borderRadius : 20,
    backgroundColor : '#DDDDDD',

}}
  icon={
                    <Icon
                    name="check-circle"
                    size={30}
                    color="#000000"
                    />
  }
  />     

           {/* Delivery address */}
           <View style = {{
            paddingTop : 20
           }}>
            <Text style = {{
                 fontSize : 23,
                 fontWeight : '600',
                 color : '#000000'
            }}>Delivery Address  :</Text>
           </View>
           <View style = {{
            paddingTop : 20,
            paddingBottom : 10
           }}>
            <Text style = {{
                fontSize : 20,
                fontWeight : '600',
                color : '#000000'
            }}>
                NO 64/1  {'\n'} 
                Kegalle Road {'\n'} 
                Alawathura
            </Text>
           </View>

          {/* footer Component */}

          <View style = {{
              backgroundColor : '#DDDDDD',
              paddingLeft : 20,
             marginTop : "1%",
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
            <View style={styles.separator} />
        </View>

        {/* btn Component in footer */}
        
        <View style = {{
            paddingTop : 10,
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

                <TouchableOpacity
                 onPress={() => navigation.navigate('AddCardScreen')}
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

const styles = StyleSheet.create({
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginRight : 20,
      },
})