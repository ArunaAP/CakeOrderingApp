import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

import {COLORS,FONTS,SIZES,icons,dummyData} from '../../constants';

import logo from '../../assets/images/cake_icon.png'
import BackIcon from '../../assets/images/backIcon.png'
import { onValue, ref } from 'firebase/database';
import { db } from "../../components/config";

export default function CakeItemList({navigation}) {

  const [CakeName , setCakeName] = React.useState("Cake1");
  const [CakeDesc , setCakeDesc] = React.useState("");
  const [Ingredients , setIngredients] = React.useState("");
  const [Price , setPrice] = React.useState("");
  

  // read cake details
  function read(){
      const starCountRef = ref(db, 'cakes/' + CakeName );
      onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      
      setCakeName(data.CakeName)
      setCakeDesc(data.CakeDesc)
      setIngredients(data.Ingredients)
      setPrice(data.Price)

      });
   }
   useEffect(()=>{
      read();
  },[])



  const [cakes, setCakes] = useState([
    {name: CakeName, desc: CakeDesc, price: Price, image:require("../../assets/images/cake1.jpg"), key: '1'},
    {name: 'Yellow Butter Cake', desc:'description',price:'1250', image:require("../../assets/images/cake2.jpg"), key: '2'},
    {name: 'Chocolate Cake', desc:'description',price:'2000', image:require("../../assets/images/cake3.jpg"), key: '3'},
    {name: 'Lava Cake', desc:'description',price:'1500', image:require("../../assets/images/cake4.jpg"), key: '4'},
    {name: 'Yellow Strawberry Cake', desc:'description',price:'3000', image:require("../../assets/images/cake5.jpg"), key: '5'},
    {name: 'Cup Cake', desc:'description',price:'550', image:require("../../assets/images/cake6.jpg"), key: '6'},
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