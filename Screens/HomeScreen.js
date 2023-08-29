import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  StyleSheet,
} from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* logo */}
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../Images/logo.png")} />
        </View>
        {/* Search bar */}
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor="#999"
        />
        {/*  */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  container: {
    flex: 1,
  },
  logoContainer: {
    marginTop: -50,
  },
  logo: {
    height: 150,
    width: 100,
  },
  searchBar: {
    width: "95%",
    height: 50,
    backgroundColor: "#333",
    color: "#fff",
    // marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    bottom: 50,
    alignSelf: "center",
  },
});

export default HomeScreen;
