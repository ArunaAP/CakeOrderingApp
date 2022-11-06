import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import {COLORS,FONTS,SIZES,icons,dummyData} from '../../constants';

import Header from './Header';

export default function CakeItemList({navigation}) {

  const [cakes, setCakes] = useState([
    {name: 'Choco Strawberry Cake', desc:'description',price:'1000', image:require("../../assets/images/cake1.jpg"), key: '1'},
    {name: 'Yellow Butter Cake', desc:'description',price:'1250', image:require("../../assets/images/cake2.jpg"), key: '2'},
    {name: 'Chocolate Cake', desc:'description',price:'2000', image:require("../../assets/images/cake3.jpg"), key: '3'},
    {name: 'Lava Cake', desc:'description',price:'1500', image:require("../../assets/images/cake4.jpg"), key: '4'},
    {name: 'Yellow Strawberry Cake', desc:'description',price:'3000', image:require("../../assets/images/cake5.jpg"), key: '5'},
    {name: 'Cup Cake', desc:'description',price:'550', image:require("../../assets/images/cake6.jpg"), key: '6'},
  ])
  return (
    <View>

      <Header/>
    <ScrollView>
      
        <View style={styles.main}>
            <Text style={styles.Title}>Cake Item List</Text>
            <View style={styles.container}>
              {cakes.map((item) => {
                return(
                  <View  style={styles.item} key={item.key}>
                    <Image source={item.image} style={styles.imgItem}/>
                    <View>
                      <Text style={styles.name}>{item.name}</Text>
                      <Text>{item.desc}</Text>
                    </View>
                      <Text style={styles.price}>Rs.{item.price}</Text>

                      <View style={styles.buttonView}>
                        <TouchableOpacity 
                        onPress={() => navigation.navigate('Update')}
                        style={styles.button}>
                          <Text style={styles.btnText}>Update</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button1}>
                          <Text style={styles.btnText1}>Delete</Text>
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
    marginTop:5,
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
    color:COLORS.primary
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
    width:'110%',
    alignItems:'center',
    marginRight:20
  },
  button1:{
    backgroundColor:COLORS.lightOrange2,
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
  btnText1:{
    fontWeight:'bold',
    color:COLORS.orange
  }
})