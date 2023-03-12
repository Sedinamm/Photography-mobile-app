import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={styles.parentView}>
      {/* Text (Login) */}
      <View style={styles.loginView}>
        <Text style={styles.loginText}>Login and Explore</Text>
      </View>

      {/* TextInput */}
      <View style={styles.TextInputView}>
      <View style={{top:-10}}>
        {/* Email */}
      <View style={styles.emailView}>
            <TextInput
              keyboardType="email-address"
              placeholder="Email"
              style={styles.emailTextInput}
            />
          </View>

          {/* Password */}
          <View style={styles.passwordView}>
            <TextInput
            placeholder="Password"
            style={styles.passwordTextInput}
            />
          </View>
          {/* Forgot password button */}
          <TouchableOpacity>
          <View style={styles.forgotPasswordbtnView}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </View>
          </TouchableOpacity>
          {/* Sign in button and text */}
          <TouchableOpacity>
          <View style={styles.signInVew}>
                <Text style={styles.signInText}>Sign in</Text>
              </View>
              </TouchableOpacity>
          </View>
      </View>
      <View style={{flex:3, backgroundColor:"brown"}}>
        <Text>Next View</Text>
      </View>
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

  TextInputView: {
    flex:5, 
    backgroundColor:"violet"
  },

  emailView:{
    top: 20, 
    margin:20,
   },

   emailTextInput:{
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },

  passwordView:{
    top:5, 
    margin:20,
  },

  passwordTextInput:{
    backgroundColor:"white",
    padding:20,
    borderRadius:10,
    },

    forgotPasswordbtnView:{
      marginLeft:238, 
      bottom:10
    },

    forgotPasswordText:{
      color:"white"
    },

    signInVew:{
      height:55, 
      width:250, 
      backgroundColor:"#00FFF0", 
      justifyContent:"center", 
      borderRadius:10, 
      alignItems:"center", 
      alignSelf:"center"
    },

    signInText:{
      color:"#000",
    },

}