import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("HomeScreen");
      }
    });
    return unsubscribe;
  }, []);

  const navigation = useNavigation();

  const handleLogIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
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
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholderTextColor="#999"
        secureTextEntry
      />
      {/* Create Account Button */}
      <TouchableOpacity onPress={handleLogIn} style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      {/* Forgot password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Don't have an account button */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignupScreen");
        }}
      >
        <Text style={styles.dontHaveAnAccount}>
          Don't have an account? Sign up
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
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
