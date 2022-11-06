import { StyleSheet, Text, View, TextInput, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'

import {COLORS,FONTS,SIZES,icons,dummyData} from '../../constants';
import Header from './Header';

export default function UpdateCakeScreen() {
  return (
    <View>
        <Header/>
    <ScrollView>
        <View style={styles.main}>
        <Text style={styles.Title}>Update Cake Item</Text>

            <View style={styles.container}>
                <View style={styles.inputView}>
                    <Text style={styles.label}>Add Image</Text>
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.label}>Cake Name</Text>
                    <TextInput  style={styles.textInput}></TextInput>
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.label}>Description</Text>
                    <TextInput  style={styles.textInput}></TextInput>
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.label}>Ingredients</Text>
                    <TextInput  style={styles.textInput}></TextInput>
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.label}>Price</Text>
                    <TextInput  style={styles.textInput}></TextInput>
                </View> 
            
            </View>
            <View style={styles.btnView}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}>Update Cake</Text>
            </TouchableOpacity>
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
        marginBottom:20
    },
    container:{
        backgroundColor:COLORS.lightGray2,
        width:'80%',
        borderRadius:15,
        padding:15
    },
    inputView:{
        width:'100%',
        marginTop:20,
    },
    textInput:{
        height:45,
        borderRadius:5,
        backgroundColor:'white',
        marginTop:10
    },
    label:{
        color:'#BCC6CC',
        fontWeight:'bold'
    },
    button:{
        alignSelf:'stretch',
        alignItems:'center',
        padding:10,
        backgroundColor: '#FF6700',
        marginTop: 20,
        width:'100%',
        borderRadius:12,
      },
      btnText:{
        fontSize:17,
        fontWeight:'bold',
        color:'white'
      },
      btnView:{
        width:'80%',
        padding:15
      }
})