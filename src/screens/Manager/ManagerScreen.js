import { View, Text } from 'react-native'
import React from 'react'

const ManagerScreen = () => {
  return (
    <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }}>
      <Text style={{
        fontSize:20,
        fontWeight:'bold'
      }}>ManagerScreen</Text>
    </View>
  )
}

export default ManagerScreen