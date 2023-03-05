import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={styles.parentView}>
      {/* Text (Login) */}
      <View style={styles.loginView}>
        <Text style={styles.loginText}>Login</Text>
      </View>

      {/* TextInput */}
      <View style={{flex:5, backgroundColor:"violet"}}>
      <View style={{top:-10}}>
        {/* Email */}
      <View style={{top: 20, margin:20, }}>
            <TextInput
              keyboardType="email-address"
              placeholder="Email"
              style={{
                backgroundColor: "white",
                padding: 20,
                borderRadius: 10,
              }}
            />
          </View>

          {/* Password */}
          <View style={{top:5, margin:20,}}>
            <TextInput
            placeholder="Password"
            style={{
              backgroundColor:"white",
              padding:20,
              borderRadius:10,
              }}
            />
          </View>
          <TouchableOpacity>
          <View style={{marginLeft:238, bottom:10}}>
            <Text style={{color:"white"}}>Forgot Password?</Text>
          </View>
          </TouchableOpacity>
          <View style={{height:55, width:250, backgroundColor:"#00FFF0", justifyContent:"center", borderRadius:10, alignItems:"center", alignSelf:"center"}}>
                <Text style={{color:"#000",}}>Sign in</Text>
              </View>
          </View>
      </View>
      <View style={{flex:3, backgroundColor:"brown"}}></View>
    </View>
  )
}

export default Login

const styles = {
  parentView :{
    flex:10
  },

  loginView: {
    flex:2, 
    backgroundColor:"green"
  },

  loginText: {
    marginLeft:20, 
    paddingTop:114,
    fontSize:25, 
    fontWeight:"bold", 
    color:"white"
  },
}