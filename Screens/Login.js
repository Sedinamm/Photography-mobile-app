import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
} from "react-native";
import React from "react";

const Login = () => {
  return (
    <View style={styles.parentView}>
      {/* Image and text (Login) */}
      <View style={styles.loginView}>
        <Image style={styles.loginImage} source={require("../Images/7.png")} />
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
      <View style={{ flex: 2, backgroundColor:"black" }}>
        {/* Login Button */}
        <View style={styles.bottomView}>
          <TouchableOpacity>
            <View style={styles.signInVew}>
              <Text style={styles.signInText}>Login</Text>
            </View>
          </TouchableOpacity>

          {/* Phone and Google button */}
          {/* Phone button */}
          <TouchableOpacity>
            <View style={styles.phoneView}>
              <Image
                style={styles.phoneImage}
                source={require("../Images/Untitled-1.png")}
              />
            </View>
          </TouchableOpacity>

          {/* Google button */}
          <TouchableOpacity>
            <View style={styles.googleView}>
              <Image
                style={styles.googleImage}
                source={require("../Images/google.png")}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Dont have an account? */}
        <View style={styles.NoAccount}>
          <Text style={styles.textColor}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.SignUpbutton}>Sign up</Text>
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
    backgroundColor: "black",
  },

  loginImage: {
    height: 321,
    width: 400,
  },

  // TextInputs
  TextInputView: {
    flex: 4,
    backgroundColor: "black",
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
    marginRight: 10,
  },

  signInText: {
    color: "#000",
    // fontWeight:"bold",
    fontSize: 15,
  },

  // Bottom
  bottomView: {
    flexDirection: "row",
    alignSelf: "center",
    top: 10,
  },

  phoneView: {
    height: 60,
    width: 80,
    backgroundColor: "white",
    borderRadius: 10,
  },

  phoneImage: {
    height: 60,
    width: 80,
    alignSelf: "center",
    bottom: 1,
  },

  googleView: {
    height: 60,
    width: 80,
    backgroundColor: "white",
    borderRadius: 10,
    marginLeft: 10,
    // shadowOpacity:9,
  },

  googleImage: {
    height: 30,
    width: 30,
    alignSelf: "center",
    top: 15,
  },

  // Dont have an account
  NoAccount: {
    marginTop: 30,
    alignSelf: "center",
    flexDirection: "row",
  },

  textColor: {
    color: "white",
  },

  SignUpbutton: {
    left: 5,
    color: "white",
  },
};
