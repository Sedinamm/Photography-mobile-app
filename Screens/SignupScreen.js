import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>PicLancer</Text>
      <View style={styles.imageContainer}>
        {/* Images */}
        <Image source={require("../Images/3.jpg")} style={styles.image} />
        <Image source={require("../Images/4.jpg")} style={styles.image} />
        <Image source={require("../Images/5.jpg")} style={styles.image} />
      </View>
      {/* Text */}
      <Text style={styles.bottomText}>
        Signup today and get access to over 12,000+ copyright-free images
      </Text>

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
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      {/* Sign up with google button */}
      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.buttonText}>Sign Up with Google</Text>
      </TouchableOpacity>
      {/* Already have an account button */}
      <TouchableOpacity>
        <Text style={styles.alreadyHaveAnAccount}>
          Already have an account? Sign in
        </Text>
      </TouchableOpacity>
      {/* Terms of Service Button */}
      <TouchableOpacity style={styles.termsButton}>
        <Text style={styles.termsButtonText}>
          By signing up you agree to our Terms of Service
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
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "flex-start",
    top: -80,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    bottom: 50,
  },
  image: {
    width: 110,
    height: 180,
    borderRadius: 10,
  },
  bottomText: {
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
    bottom: 50,
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
  googleButton: {
    backgroundColor: "#DB4437", // Google's brand color
    marginTop: 10,
    paddingVertical: 12,
    borderRadius: 5,
    width: "100%",
    bottom: 50,
  },
  alreadyHaveAnAccount: {
    color: "white",
    marginTop: 10,
    bottom: 20,
  },
  termsButton: {
    marginTop: 10,
    top: 70,
  },
  termsButtonText: {
    color: "#999",
    textDecorationLine: "underline",
  },
});

export default SignUpScreen;
