import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import {COLORS,FONTS,SIZES,icons,dummyData} from '../../constants';

import logo from '../../assets/images/cake_icon.png'
import menu from '../../assets/images/menu.png'
import BackIcon from '../../assets/images/backIcon.png'

export default function Header({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
      onClick={() => navigation.navigate('Home')}
      style={styles.icon}>
        <Image source={BackIcon} style={styles.menuIcn}/>
      </TouchableOpacity>
      <View style={styles.logoView}>
        <Image source={logo} style={styles.logoImg}/>
        <Text style={styles.logoTxt}>EatMe</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      backgroundColor:COLORS.white,
        width:'100%',
        height:'10%',
        flexDirection:'row',
        justifyContent:'center',
        padding:20
    },
    icon:{
        width:10,
        height:10,
        position:'absolute',
        top:0,
        left:0,
        margin:20
    },
    menuIcn:{
        width:25,
        height:25,
        tintColor:COLORS.primary
    },
    logoView:{
        flexDirection:'row'
    },
    logoTxt:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        color:COLORS.primary
    },
    logoImg:{
      width:30,
      height:30,
      tintColor:COLORS.primary
    }
})