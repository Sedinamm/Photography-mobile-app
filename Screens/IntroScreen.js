import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
// import Swiper from "react-native-swiper";

const IntroScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../Images/11.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>PicLancer</Text>
        <Text style={styles.description}>Your Copyright-Free Images App</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {/* Freelance Button */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignupScreen");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Freelance</Text>
        </TouchableOpacity>

        {/* Download Button */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignupScreen");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Download</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
      >
        <Text style={styles.loginText}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-end",
    // alignItems: "center",
    marginBottom: 10, // Adjust as needed
    paddingLeft: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    marginBottom: 7,
  },
  description: {
    fontSize: 18,
    color: "white",
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40, // Adjust as needed
    paddingLeft: 20,
  },
  button: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginRight: 20,
    width: "45%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    // textAlign: "center",
    // fontWeight: "bold",
  },
  loginText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    marginBottom: 20,
    bottom: 15,
  },
});

export default IntroScreen;
