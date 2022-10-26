import { View, Text, SafeAreaView, Image, TouchableOpacity, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import profile from '../assets/images/profile.png'
import menu from '../assets/images/menu.png'
import close from '../assets/images/close.png'

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

            <Text style={{
                    fontSize:30,
                    fontWeight:'bold',
                    color:'black',
                    paddingTop:20
                }}>{currentTab}</Text>

                <Image source={profile} style={{
                    width:'100%',
                    height:300,
                    borderRadius:15,
                    marginTop:20
                }}></Image>
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold',
                    paddingTop:15,
                    paddingBottom:5,
                    color:'#eb5406'
                }}>Amecia de Rune</Text>

                <Text style={{
    
                }}>Amicia de Rune is the older sister of Hugo de Rune, compelled to flee for their lives through the pestilent countryside of France when the Inquisition raids ...</Text>

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