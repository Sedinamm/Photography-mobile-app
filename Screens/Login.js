import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={{flex:10}}>
      {/* Text (Login) */}
      <View style={{flex:2, backgroundColor:"green"}}>
        <Text style={{marginLeft:20,}}>Login</Text>
      </View>
      {/* TextInput */}
      <View style={{flex:2, backgroundColor:"yellow"}}></View>
    </View>
  )
}

export default Login