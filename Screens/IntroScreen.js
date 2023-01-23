import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const IntroScreen = () => {
  return (
    <SafeAreaView>
    <View>
      {/* <Text style={{color:"white"}}>IntroScreen</Text> */}
      <Image style={{width:400, height:822}} source={require('../Images/2.png')} />
    </View>
    </SafeAreaView>
  )
}

export default IntroScreen;