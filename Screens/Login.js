import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";

const Login = () => {
  return (
    <View style={styles.parentView}>
      {/* Text (Login) */}
      <View style={styles.loginView}>
        {/* <Text style={styles.loginText}>Login and Explore</Text> */}
        <Image style={{height:330, width:380}} source={require('../Images/we.png')} />
      </View>

      {/* TextInput */}
      <View style={styles.TextInputView}>
        <View style={{ top: -10 }}>
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
        </View>
      </View>

      {/* Sign in button and text */}
      <View style={{ flex: 2, backgroundColor: "brown" }}>
        {/* Login Button */}
        <View style={{ flexDirection: "row", alignSelf: "center", top: 10,  }}>
          <TouchableOpacity>
            <View style={styles.signInVew}>
              <Text style={styles.signInText}>Login</Text>
            </View>
          </TouchableOpacity>

          {/* Phone and Google button */}
          {/* Phone button */}
          <TouchableOpacity>
            <View
              style={{
                height: 60,
                width: 80,
                backgroundColor: "white",
                borderRadius: 10,
                // marginLeft:10
                
              }}
            >
              <Image style={{height:60, width:80, alignSelf:"center", bottom:1}} source={require('../Images/Untitled-1.png')}/>
            </View>
          </TouchableOpacity>
          {/* Google button */}
          <TouchableOpacity>
            <View
              style={{
                height: 60,
                width: 80,
                backgroundColor: "white",
                borderRadius: 10,
                marginLeft:10,
                // shadowOpacity:9,
              }}
            >
              <Image style={{height:30, width:30, alignSelf:"center", top:15}} source={require('../Images/google.png')}/>
            </View>
          </TouchableOpacity>
        </View>
        {/* Already have an account? */}
        <View style={{marginTop:30, alignSelf:"center", flexDirection:"row"}}>
          <Text style={{color:"white"}}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={{left:5, color:"white"}}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = {
  parentView: {
    flex: 10,
  },
  // Login View and text
  loginView: {
    flex: 4,
    backgroundColor: "green",
  },

  loginText: {
    marginLeft: 20,
    paddingTop: 114,
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },

  // TextInputs
  TextInputView: {
    flex: 4,
    backgroundColor: "violet",
  },

  emailView: {
    top: 20,
    margin: 20,
  },

  emailTextInput: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },

  passwordView: {
    top: 5,
    margin: 20,
  },

  passwordTextInput: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },

  // Forgot password text button
  forgotPasswordbtnView: {
    marginLeft: 238,
    bottom: 10,
  },

  forgotPasswordText: {
    color: "white",
  },

  signInVew: {
    height: 60,
    width: 150,
    backgroundColor: "#00FFF0",
    // backgroundColor: "#00FFF0",
    justifyContent: "center",
    borderRadius: 10,
    alignItems: "center",
    marginRight:10
    
  },

  signInText: {
    color: "#000",
    // fontWeight:"bold",
    fontSize:15
  },
};
