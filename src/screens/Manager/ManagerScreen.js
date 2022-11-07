import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

import cakeImg from '../../assets/images/profile.png'
import cake1 from '../../assets/images/cake1.jpg'
import cake2 from '../../assets/images/cake2.jpg'
import complainImg from '../../assets/images/complainImg.jpg'
import FeedbackImg from '../../assets/images/feedback.jpg'

import logo from '../../assets/images/cake_icon.png'
import BackIcon from '../../assets/images/backIcon.png'

import {COLORS,FONTS,SIZES,icons,dummyData} from '../../constants';
import Header from './Header'



const ManagerScreen = ({navigation}) => {
  return (
    <View style={{
        flex:1,
        alignItems:'center',
        backgroundColor:"#fff"
    }}>
      

{/* Header Section start*/}

      <View style={styles.Headercontainer}>
      <TouchableOpacity 
      onPress={() => navigation.goBack()}
      style={styles.Headericon}>
        <Image source={BackIcon} style={styles.menuIcn}/>
      </TouchableOpacity>
      <View style={styles.logoView}>
        <Image source={logo} style={styles.logoImg}/>
        <Text style={styles.logoTxt}>EatMe</Text>
      </View>
    </View>

{/* Header section End */}





      <Text style={{
        fontSize:25,
        fontFamily:'Poppins-Bold',
        fontWeight:'bold',
        marginTop:10,
        marginBottom:50
      }}>Manager Dashboard</Text>

      <View style={styles.Cardgrid}>
        <TouchableOpacity 
        onPress={() => navigation.navigate('AddCake')}
        style={styles.cakeCard}>
            {/* Image */}
            <Image
              source={cake1}
              style={styles.cardImg}
            />
            <Text style={styles.cardTxt}>
              ADD CAKE
            </Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => navigation.navigate('UpdateCake')}
        style={styles.cakeCard}>
            {/* Image */}
            <Image
              source={cake2}
              style={styles.cardImg}
            />
            <Text style={styles.cardTxt}>
              UPDATE CAKE
            </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Cardgrid}>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Complain')}
        style={styles.cakeCard}>
            {/* Image */}
            <Image
              source={complainImg}
              style={styles.cardImg}
            />
            <Text style={styles.cardTxt}>
              CHECK COMPLAIN
            </Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => navigation.navigate('Feedback')}
        style={styles.cakeCard}>
            {/* Image */}
            <Image
              source={FeedbackImg}
              style={styles.cardImg}
            />
            <Text style={styles.cardTxt}>
              CHECK FEEDBACK
            </Text>
        </TouchableOpacity>
      </View>

      
    </View>
    
  )
}

const styles = StyleSheet.create({

  // header style
  Headercontainer:{
    backgroundColor:COLORS.white,
      width:'100%',
      height:'10%',
      flexDirection:'row',
      justifyContent:'center',
      padding:20
  },
  Headericon:{
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
  },



  cakeCard:{
    backgroundColor: COLORS.lightGray2,
    width:150,
    height:150,
    borderRadius:10,
    alignItems:'center',
    margin:10
  },
  cardImg:{
    width:80,
    height:80,
    borderRadius:500,
    marginBottom:10,
    marginTop:10
  },
  cardTxt:{
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center'
  },
  Cardgrid:{
    display:'flex',
    flexDirection:'row'
  }
})


export default ManagerScreen