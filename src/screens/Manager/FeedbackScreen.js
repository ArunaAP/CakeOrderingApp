import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import {COLORS,FONTS,SIZES,icons,dummyData} from '../../constants';
import logo from '../../assets/images/cake_icon.png'
import BackIcon from '../../assets/images/backIcon.png'

export default function FeedbackScreen({navigation}) {

  const [cakes, setCakes] = useState([
    {name: 'Yellow Butter Cake', desc:'Feedback message',status:'Posotive', key: '1'},
    {name: 'Yellow Butter Cake1', desc:'Feedback message',status:'Negetive', key: '2'},
    {name: 'Yellow Butter Cake2', desc:'Feedback message',status:'Posotive', key: '3'},
    {name: 'Yellow Butter Cake3', desc:'Feedback message',status:'Posotive', key: '4'},
    {name: 'Yellow Butter Cake4', desc:'Feedback message',status:'Posotive', key: '5'},
    {name: 'Yellow Butter Cake5', desc:'Feedback message',status:'Posotive', key: '6'},
  ])
  return (
    <View>
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
    <ScrollView>
        <View style={styles.main}>
            <Text style={styles.Title}>Customer Feedback</Text>
            <View style={styles.container}>
              {cakes.map((item) => {
                return(
                  <View  style={styles.item} key={item.key}>
                    {/* <Image source={cake1} style={styles.imgItem}/> */}
                    <View>
                      <Text style={styles.name}>{item.name}</Text>
                      <Text>{item.desc}</Text>
                    </View>
                      <Text style={styles.price}>{item.status}</Text>

                      <View style={styles.buttonView}>
                        <TouchableOpacity 
                        onPress={() => navigation.navigate('Update')}
                        style={styles.button}>
                          <Text style={styles.btnText}>Add to Top List</Text>
                        </TouchableOpacity>
                      </View>
                  </View>
                )
              })}
            </View>
        </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    alignItems:'center',
    backgroundColor:COLORS.white
},
  Title:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:10,
},
  container:{
    width:'100%',
    padding:40,
    paddingHorizontal:20
  },
  item:{
    marginTop:24,
    padding:20,
    // backgroundColor:'#E5E4E2',
    backgroundColor:COLORS.lightGray2,
    fontSize:24,
    borderRadius:SIZES.radius,
    flexDirection:'row',
    justifyContent:'space-around',
    height:150
  },
  imgItem:{
    width:80,
    height:80,
    borderRadius:12,
    marginRight:15
  },
  name:{
    fontSize:15,
    fontWeight:'bold'
  },
  price:{
    fontSize:15,
    fontWeight:'bold',
    color:'green'
  },
  buttonView:{
    position:'absolute',
    bottom:0,
    flexDirection:'row',
    padding:10,
    marginLeft:10

  },
  button:{
    backgroundColor:COLORS.primary,
    padding:5,
    borderRadius:8,
    width:'100%',
    alignItems:'center',
    marginRight:20
  },

  btnText:{
    fontWeight:'bold',
    color:'white'
  },

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

})