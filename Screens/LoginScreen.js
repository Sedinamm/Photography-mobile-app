import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.logo}>PicLancer</Text> */}
      <View style={styles.imageContainer}>
        {/* Images */}
        <Image source={require("../Images/1.png")} style={styles.image} />
      </View>
      {/* Text */}
      <Text style={styles.bottomText}>Welcome back</Text>

      {/* Email and Password Input Section */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
      />
      {/* Create Account Button */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      {/* Forgot password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>
      {/* Don't have an account button */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
      >
        <Text style={styles.dontHaveAnAccount}>
          Don't have an account? Sign in
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    bottom: 50,
  },
  image: {
    width: 400,
    height: 250,
    // borderRadius: 40,
  },
  bottomText: {
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
    bottom: 50,
    alignSelf: "flex-start",
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "#333",
    color: "#fff",
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    bottom: 50,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    borderRadius: 5,
    width: "100%",
    bottom: 50,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  forgotPassword: {
    color: "white",
    alignSelf: "flex-start",
    position: "absolute",
    left: 50,
    bottom: 30,
  },
  dontHaveAnAccount: {
    color: "white",
    marginTop: 10,
    bottom: 20,
  },
});

export default SignUpScreen;
