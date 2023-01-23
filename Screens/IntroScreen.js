import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const IntroScreen = () => {
  return (
    <SafeAreaView>
    <View>
      {/* Image */}
      <Image style={{width:400, height:822}} source={require('../Images/2.png')} />

      {/* Text */}
      <Text style={{color:"white", fontSize:50, position:"absolute", top:500, left:25, fontWeight:"bold", shadowOpacity:1}}>Piclancer</Text>
      <Text style={{color:"#00FFF0", position:"absolute", fontSize:70, left:235,top:480, shadowOpacity:1}}>.</Text>

      {/* Short Description */}
      <Text style={{position:"absolute", top:560, left:25, color:"white",  fontSize:25, fontWeight:"bold", shadowOpacity:1}}>Your Copyright free Images {'\n'} App </Text>
    </View>
    </SafeAreaView>
  )
}

export default IntroScreen;