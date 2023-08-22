import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React from "react";

const CompleteProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header text */}
      <Text style={styles.headerText}>Complete your Profile</Text>

      {/* Upload Profile Pictiure */}
      <TouchableOpacity>
        <View style={styles.profileView}>
          <Image
            style={styles.image}
            source={require("../Images/upload.png")}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.addPhoto}>Add a Photo</Text>

      {/* Enter name */}
      <TextInput
        style={styles.input}
        placeholder="Enter a username"
        placeholderTextColor="#999"
      />

      {/* Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CompleteProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
  headerText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
  },
  profileView: {
    borderRadius: 100,
    backgroundColor: "#999999",
    justifyContent: "center",
    marginTop: 100,
    width: 150,
    height: 150,
  },
  image: {
    width: 50,
    height: 50,
    alignSelf: "center",
  },
  addPhoto: {
    color: "white",
    textAlign: "center",
    marginTop: 15,
    fontSize: 16,
  },
  input: {
    width: "85%",
    height: 50,
    backgroundColor: "#333",
    color: "#fff",
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 30,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    borderRadius: 5,
    width: "85%",
    height: 50,
    marginTop: "5%",
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 15,
  },
});
