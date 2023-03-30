import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";

const Login = () => {
  return (
    <View style={styles.parentView}>
      {/* Text (Login) */}
      <View style={styles.loginView}>
        <Text style={styles.loginText}>Login and Explore</Text>
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
        <View style={{ flexDirection: "row", alignSelf: "center", top: 20,  }}>
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
                height: 70,
                width: 80,
                backgroundColor: "yellow",
                borderRadius: 10,
                marginLeft:10
              }}
            >
              <Text>Image</Text>
            </View>
          </TouchableOpacity>
          {/* Google button */}
          <TouchableOpacity>
            <View
              style={{
                height: 70,
                width: 80,
                backgroundColor: "green",
                borderRadius: 10,
                marginLeft:6
              }}
            >
              <Text>Image</Text>
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
    flex: 2,
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
    flex: 6,
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
    height: 70,
    width: 140,
    backgroundColor: "#00FFF0",
    justifyContent: "center",
    borderRadius: 10,
    alignItems: "center",
    marginRight:15
    // alignSelf: "center",
  },

  signInText: {
    color: "#000",
  },
};
