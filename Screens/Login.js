import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={{flex:10}}>
      {/* Text (Login) */}
      <View style={{flex:2, backgroundColor:"green"}}>
        <Text style={{marginLeft:20, paddingTop:114,fontSize:25, fontWeight:"bold", color:"white"}}>Login</Text>
      </View>
      {/* TextInput */}
      <View style={{flex:5, backgroundColor:"yellow"}}></View>
      <View style={{flex:3, backgroundColor:"brown"}}></View>
    </View>
  )
}

export default Login