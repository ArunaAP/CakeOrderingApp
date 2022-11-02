import { View, Text, SafeAreaView, Image, TouchableOpacity, Animated , ScrollView, FlatList} from 'react-native'
import React, { useRef, useState } from 'react'
import profile from '../assets/images/profile.png'
import menu from '../assets/images/menu.png'
import close from '../assets/images/close.png'
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import cake1 from '../assets/images/cake1.jpg'
import cake2 from '../assets/images/cake2.jpg'
import cake3 from '../assets/images/cake3.jpg'
import cake4 from '../assets/images/cake4.jpg'
import cake5 from '../assets/images/cake5.png'
import cake6 from '../assets/images/cake6.png'


const HomeScreen = ({navigation}) => {
    const [currentTab, setCurruntTab] = useState("Home");
    //To get the current status of the menu
    const [showMenu, setShowMenu] = useState(false);

    //Animated properties..
    const offsetValue = useRef(new Animated.Value(0)).current;
    //scale must be One..
    const scalValue = useRef(new Animated.Value(1)).current;
    const closeButtonOffset = useRef(new Animated.Value(0)).current;


  return (
    <SafeAreaView style={{
        flex:1,
        backgroundColor:'#eb5406',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        paddingLeft:10
        }}
    >
        <View style={{
            justifyContent:'flex-start',
            padding:15
            }}
        >
            <Image source={profile} style={{
                width:60,
                height:60,
                borderRadius:10,
                marginTop:8
                }}
            ></Image>

            <Text style={{
                fontSize:20,
                fontWeight:'bold',
                color:'white',
                marginTop:20
            }}>Amicia de Rune</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Text style={{
                    marginTop:6,
                    color:'white'
                }}>View Profile</Text>
            </TouchableOpacity>

            <View style={{flexGrow:1, marginTop:50}}>
                {
                    //Tab bar Buttons...
                }
                {TabButton(currentTab, setCurruntTab, "Home")}
                {TabButton(currentTab, setCurruntTab, "Search")}
                {TabButton(currentTab, setCurruntTab, "Notification")}
                {TabButton(currentTab, setCurruntTab, "Settings")}
            </View>
            
            <View
                style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                }}
            />
            <View style={{
                paddingVertical:8,
                paddingLeft:20,
                paddingRight:30,
                borderRadius:8,
                marginTop:15,
                
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('Manager')}>
                <Text style={{
                            fontSize:15,
                            fontWeight:'bold',
                            paddingLeft:15,
                            color:  "white",
                            marginTop:10,
                        }}>Manager</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Cheff')}>
                <Text style={{
                            fontSize:15,
                            fontWeight:'bold',
                            paddingLeft:15,
                            color:  "white",
                            marginTop:10
                        }}>Cheff</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Delivery')}>
                <Text style={{
                            fontSize:15,
                            fontWeight:'bold',
                            paddingLeft:15,
                            color:  "white",
                            marginTop:10
                        }}>Delivery Person</Text>
                </TouchableOpacity>
            </View> 
             <View>   
                {TabButton(currentTab, setCurruntTab, "Logout")}
            </View>
  
        </View>

        {
            //over lay view..
        }

        <Animated.View style={{
            flexGrow:1,
            backgroundColor:'white',
            position:'absolute',
            top:0,
            bottom:0,
            left:0,
            right:0,
            paddingHorizontal:30,
            paddingVertical:20,
            borderRadius: showMenu ? 15 : 0,
            //tranformation view..
            transform:[
                {scale: scalValue},
                {translateX: offsetValue}
            ]
        }}>
            {
                //Menu Button
            }
            
            <Animated.View style={{
                transform: [{
                    translateY: closeButtonOffset
                }]
            }}>
            <TouchableOpacity onPress={()=>{
                //Do actions here..
                //Scaling the view...
                Animated.timing(scalValue, {
                    toValue: showMenu ? 1: 0.88,
                    duration: 300,
                    useNativeDriver: true
                })
                .start()

                Animated.timing(offsetValue, {
                    toValue: showMenu ? 0 : 280,
                    duration: 300,
                    useNativeDriver: true
                })
                .start()

                Animated.timing(closeButtonOffset, {
                    toValue: !showMenu ? -30 : 0,
                    duration: 300,
                    useNativeDriver: true
                })
                .start()

                setShowMenu(!showMenu)
            }}>
                <Image source={showMenu ? close : menu} style={{
                    width:20,
                    height:20,
                    tintColor:'black',
                    marginTop:25
                }}></Image>
            </TouchableOpacity>



 {/* -------------------Home page content ---------------------*/}
             

                <View style ={{
                    justifyContent : 'center',
                    alignItems : 'center'
                }}>
                                <Text style={{
                                    fontSize:30,
                                    fontWeight:'bold',
                                    color:'black',
                                    paddingTop:20,
                                    paddingBottom : 10
                                }}>{currentTab}</Text>
                </View>
                
                <View style = {{
                    backgroundColor : '#DDDDDD',
                    padding : "4%",
                    borderRadius : 15
                }}>
                        <View style = {{
                            flexDirection : 'row',
                            alignItems : 'baseline'
                        }}>
                             <Icon name="search" size={22} color="#000000" />
                             <Text style ={{
                                fontWeight : '600',
                                color : '#898B9A',
                                fontSize : 20,
                                paddingLeft : 20,
                                paddingRight : 210
                             }}>Search</Text>
                               <Icon name="filter" size={22} color="#000000" />
                        </View>

    
                </View>

                {/* scroll view div */}

                <View style = {{
                    height : '67%',
                    marginTop : '2%',
                    marginBottom : '2%'
                }}>

                <ScrollView style = {{
                    borderRadius : 15,
                    padding : 10
                }}>
                    <Text style = {{
                        fontSize : 18,
                        fontWeight : '600',
                        color : '#FF6C44'
                    }}>
                        DELIVERY TO 
                    </Text>

                    <View style ={{
                        flexDirection : 'row',
                        alignItems : 'baseline'
                    }}>
                    <Text style = {{
                        fontSize : 17,
                        fontWeight : '600',
                        color : '#000000',
                        paddingRight : 5
                    }}>
                        64/1 Kegalle Road , Alawathura
                    </Text>
                    <Icon name="arrow-down" size={15} color="#000000" />
                    </View>



                    <ScrollView
                        horizontal={true}
                        style = {{
                            marginTop : 10
                        }}
                        >

                  {/* card View  1*/}

                  <TouchableOpacity style = {{
                                        marginTop : 10,
                                        padding : 20,
                                        backgroundColor : "#DDDDDD",
                                        borderRadius : 15,
                                        marginRight : 20,
                                        
                  }}
                  
                  >

                                <View style = {{
                                        flexDirection : 'row',
                                        alignItems : 'baseline',
                                        alignItems : 'center'
                                    }}>
                                                <Text style = {{
                                                    fontSize : 19,
                                                    fontWeight : '600',
                                                    color : '#000000'
                                                    
                                                }}>
                                                    Chocolate Cup Cake
                                                </Text>

                                                <Image source={cake5} style={{
                                                    width:60,
                                                    height:60,
                                                    borderRadius: 50,
                                                    marginLeft : 20,
                                                    backgroundColor : 'white'
                                                    }}
                                                ></Image>
                                    </View>

                  </TouchableOpacity>


                  <TouchableOpacity style = {{
                                        marginTop : 10,
                                        padding : 20,
                                        backgroundColor : "#DDDDDD",
                                        borderRadius : 15,
                                        marginRight : 20,
                  }}>

                                <View style = {{
                                        flexDirection : 'row',
                                        alignItems : 'baseline',
                                        alignItems : 'center'
                                    }}>
                                                <Text style = {{
                                                    fontSize : 19,
                                                    fontWeight : '600',
                                                    color : '#000000'
                                                    
                                                }}>
                                                    Vanilla Cup Cake
                                                </Text>

                                                <Image source={cake6} style={{
                                                    width:60,
                                                    height:60,
                                                    borderRadius: 50,
                                                    marginLeft : 20
                                                    }}
                                                ></Image>
                                    </View>
                                    

                  </TouchableOpacity>

                    </ScrollView>

                    {/* end of the inner horizontal ScrollView */}


                    <View style ={{
                        flexDirection : 'row',
                        alignItems : 'baseline',
                        marginTop : 20
                    }}>
                    <Text style = {{
                        fontSize : 17,
                        fontWeight : '600',
                        color : '#000000',
                        paddingRight : '40%'
                    }}>
                        Popular Near You
                    </Text>

                                  <TouchableOpacity>
                                  <Text style = {{
                                            fontSize : 17,
                                            fontWeight : '600',
                                            color : '#FF6C44',
                                            paddingRight : 5
                                        }}>
                                            Show All
                                        </Text>
                                  </TouchableOpacity>
                    </View>

                    {/* inner horizontal ScrollView 2 */}

                    <View>
                                <ScrollView
                                horizontal={true}
                                >
                                    {/* Card View */}
                                    <View style = {{
                                        backgroundColor : '#DDDDDD',
                                        width : 250,
                                        height : 250,
                                        marginTop : 20,
                                        borderRadius : 15,
                                        marginRight : 20

                                    }}> 

                                    <View style = {{
                                        flexDirection : 'row',
                                        justifyContent : 'center',
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
                                    onPress={() => navigation.navigate('Details')}
                                    >
                                    <View style = {{
                                        justifyContent : 'center',
                                        alignItems : 'center',
                                        marginTop : 20
                                    }}>
                                    <Image source={cake4} style={{
                                                                    width:150,
                                                                    height:120,
                                                                    borderRadius: 10,
                                                                    justifyContent : 'center'
                                                                    }}
                                      ></Image>
                                    </View>
                                    </TouchableOpacity>



                                    {/* view for price */}

                                    <View style = {{
                                        justifyContent : 'center',
                                        alignItems : 'center',
                                        paddingTop : 15
                                    }}>
                                        <View style = {{
                                            marginBottom :2
                                        }}>
                                                        <Text style = {{
                                                            fontSize : 20,
                                                            fontWeight : '600',
                                                            color : '#000000'
                                                        }}>Chocoberry Cupcake</Text>
                                        </View>

                                        <View>
                                                        <Text style = {{
                                                            fontSize : 22,
                                                            fontWeight : '700',
                                                            color : 'black'
                                                        }}>Rs 500.00</Text>
                                        </View>
                                     
                                    </View>



                                    </View>


                                                                        {/* Card View */}
                                                                        <View style = {{
                                        backgroundColor : '#DDDDDD',
                                        width : 250,
                                        height : 250,
                                        marginTop : 20,
                                        borderRadius : 15,
                                        marginRight : 20

                                    }}> 

                                    <View style = {{
                                        flexDirection : 'row',
                                        justifyContent : 'center',
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

                                    <TouchableOpacity>
                                    <View style = {{
                                        justifyContent : 'center',
                                        alignItems : 'center',
                                        marginTop : 20
                                    }}>
                                    <Image source={cake1} style={{
                                                                    width:150,
                                                                    height:120,
                                                                    borderRadius: 10,
                                                                    justifyContent : 'center'
                                                                    }}
                                      ></Image>
                                    </View>
                                    </TouchableOpacity>



                                    {/* view for price */}

                                    <View style = {{
                                        justifyContent : 'center',
                                        alignItems : 'center',
                                        paddingTop : 15
                                    }}>
                                        <View style = {{
                                            marginBottom :2
                                        }}>
                                                        <Text style = {{
                                                            fontSize : 20,
                                                            fontWeight : '600',
                                                            color : 'black'
                                                        }}>Chocolate Drip Cake</Text>
                                        </View>

                                        <View>
                                                        <Text style = {{
                                                            fontSize : 22,
                                                            fontWeight : '700',
                                                            color : 'black'
                                                        }}>Rs 500.00</Text>
                                        </View>
                                     
                                    </View>



                                    </View>




                                </ScrollView>
                     </View>

                     {/* end of the 2nd inner horizontal ScrollView */}


                     <View style ={{
                        flexDirection : 'row',
                        alignItems : 'baseline',
                        marginTop : 20
                    }}>
                    <Text style = {{
                        fontSize : 17,
                        fontWeight : '600',
                        color : '#000000',
                        paddingRight : '40%'
                    }}>
                      Recommended For You
                    </Text>

                                  <TouchableOpacity>
                                  <Text style = {{
                                            fontSize : 17,
                                            fontWeight : '600',
                                            color : '#FF6C44',
                                            paddingRight : 5
                                        }}>
                                            Show All
                                        </Text>
                                  </TouchableOpacity>
                    </View>

                    {/* inner horizontal ScrollView 2 */}

                    <View>
                                <ScrollView
                                horizontal={true}
                                >
                                                                      {/* Card View */}
                                    <View style = {{
                                        backgroundColor : '#DDDDDD',
                                        width : 250,
                                        height : 250,
                                        marginTop : 20,
                                        borderRadius : 15,
                                        marginRight : 20,
                                        marginBottom : 50

                                    }}> 

                                    <View style = {{
                                        flexDirection : 'row',
                                        justifyContent : 'center',
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
                                                                }}>84 Calories
                                                                
                                                                </Text>

                                                            </View>


                                    </View>

                                    {/* view for image */}

                                    <TouchableOpacity>
                                    <View style = {{
                                        justifyContent : 'center',
                                        alignItems : 'center',
                                        marginTop : 20
                                    }}>
                                    <Image source={cake3} style={{
                                                                    width:150,
                                                                    height:120,
                                                                    borderRadius: 10,
                                                                    justifyContent : 'center'
                                                                    }}
                                      ></Image>
                                    </View>
                                    </TouchableOpacity>



                                    {/* view for price */}

                                    <View style = {{
                                        justifyContent : 'center',
                                        alignItems : 'center',
                                        paddingTop : 15
                                    }}>
                                        <View style = {{
                                            marginBottom :2
                                        }}>
                                                        <Text style = {{
                                                            fontSize : 20,
                                                            fontWeight : '600',
                                                            color : 'black'
                                                        }}>Fruits & Cream Cake</Text>
                                        </View>

                                        <View>
                                                        <Text style = {{
                                                            fontSize : 22,
                                                            fontWeight : '700',
                                                            color : 'black'
                                                        }}>Rs 500.00</Text>
                                        </View>
                                     
                                    </View>



                                    </View>


                                                                        {/* Card View */}
                                                                        <View style = {{
                                        backgroundColor : '#DDDDDD',
                                        width : 250,
                                        height : 250,
                                        marginTop : 20,
                                        borderRadius : 15,
                                        marginRight : 20

                                    }}> 

                                    <View style = {{
                                        flexDirection : 'row',
                                        justifyContent : 'center',
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
                                                                }}>92 Calories
                                                                
                                                                </Text>

                                                            </View>


                                    </View>

                                    {/* view for image */}

                                    <TouchableOpacity>
                                    <View style = {{
                                        justifyContent : 'center',
                                        alignItems : 'center',
                                        marginTop : 20
                                    }}>
                                    <Image source={cake2} style={{
                                                                    width:150,
                                                                    height:120,
                                                                    borderRadius: 10,
                                                                    justifyContent : 'center'
                                                                    }}
                                      ></Image>
                                    </View>
                                    </TouchableOpacity>



                                    {/* view for price */}

                                    <View style = {{
                                        justifyContent : 'center',
                                        alignItems : 'center',
                                        paddingTop : 15
                                    }}>
                                        <View style = {{
                                            marginBottom :2
                                        }}>
                                                        <Text style = {{
                                                            fontSize : 20,
                                                            fontWeight : '600',
                                                            color : 'black'
                                                        }}>Chocolate Chip Cake</Text>
                                        </View>

                                        <View>
                                                        <Text style = {{
                                                            fontSize : 22,
                                                            fontWeight : '700',
                                                            color : 'black'
                                                        }}>Rs 500.00</Text>
                                        </View>
                                     
                                    </View>



                                    </View>


                                </ScrollView>
                     </View>






                </ScrollView>

                </View>



                
                {/* Footer */}
                <View>

                <View style = {{
                    backgroundColor : '#DDDDDD',
                    padding : "3%",
                    borderRadius : 15,
                }}>

                    <View style = {{
                        flexDirection : 'row',
                        alignItems : 'baseline'
                    }}>
                        <TouchableOpacity>
                                               {/* home component */}
                    <View style = {{
                                    color : "#FBFBFB",
                                    padding : 10,
                                    backgroundColor : '#FF6C44',
                                    borderRadius : 15,
                                    marginRight : '2%',
                                    flexDirection : 'row'
                    }}>
                        <Icon name="home" size={22} color="#FFFFFF" />
                                 <Text style ={{
                                    fontSize : 20,
                                    fontWeight : '600',
                                    color : '#FFFFFF',
                                    marginLeft : 5
                                    
                                 }}>
                                    Home
                                 </Text>

                    </View>
                        </TouchableOpacity>



                    {/* icon component */}

                    <View style = {{
                        flexDirection : 'row'
                    }}>
                        
                        <TouchableOpacity>
                                        <View style = {{
                                            paddingLeft : 30
                                        }}>
                                                <Icon name="search" size={26} color="#000000" />
                                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={() => navigation.navigate('MyProfile')}
                        >
                        <View style = {{
                            paddingLeft : 30
                        }}>
                                 <Icon name="heart" size={26} color="#000000" />
                        </View>
                         </TouchableOpacity>

                         <TouchableOpacity
                         onPress={() => navigation.navigate('MyCart')}>
                        <View style = {{
                            paddingLeft : 30
                        }}>
                                 <Icon name="shopping-cart" size={26} color="#000000" />
                        </View>
                            </TouchableOpacity>

                        <TouchableOpacity
                        onPress={() => navigation.navigate('Notification')}
                        >
                        <View style = {{
                            paddingLeft : 30
                        }}>
                                 <Icon name="bell" size={26} color="#000000" />
                        </View>
                            </TouchableOpacity>
                        


                    </View>

                    </View>


                   

                </View>


                </View>


            </Animated.View>

        </Animated.View>

    </SafeAreaView>
    
   
  )
}



const TabButton = (currentTab, setCurruntTab,title) =>{
    return(
        <TouchableOpacity onPress={() =>{
            if (title == 'Manager') {
               
            }else{
                setCurruntTab(title)
            }
        }}>
                    <View style={{
                        flexDirection:'row',
                        alignItems:'center',
                        paddingVertical:8,
                        backgroundColor: currentTab == title ? 'white' : 'transparent',
                        paddingLeft:20,
                        paddingRight:30,
                        borderRadius:8,
                        marginTop:15
                    }}>

                        <Image></Image>
                        <Text style={{
                            fontSize:15,
                            fontWeight:'bold',
                            paddingLeft:15,
                            color: currentTab == title ? "#eb5406" : "white"
                        }}>{title}</Text>

                    </View>
                </TouchableOpacity>
    );
}



export default HomeScreen;