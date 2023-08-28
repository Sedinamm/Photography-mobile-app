import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import React from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("IntroScreen");
      })
      .catch((error) => alert(error.message));
  };

  return (
    // <View style={{ flex: 10, alignItems: "center", justifyContent: "center" }}>
    //   <Text>Email: {auth.currentUser?.email}</Text>

    //   <TouchableOpacity
    //     onPress={handleSignOut}
    //     style={{
    //       backgroundColor: "blue",
    //       width: "60%",
    //       padding: 15,
    //       borderRadius: 10,
    //       alignItems: "center",
    //       marginTop: 40,
    //     }}
    //   >
    //     <Text style={{ color: "white" }}>Sign Out</Text>
    //   </TouchableOpacity>
    // </View>

    <View style={{ flex: 10, alignItems: "center", justifyContent: "center" }}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
