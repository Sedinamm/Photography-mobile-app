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
import { FontAwesome } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";

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
        {/* Feed */}
        <View>
          <Text
            style={{
              color: "white",
              fontSize: 17,
              bottom: 20,
              fontWeight: "bold",
            }}
          >
            Trending
          </Text>
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.headerLeft}>
              {/* Profile Picture */}
              <Image
                style={styles.profilePic}
                source={{
                  uri: "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg",
                }}
              />
              {/* Username */}
              <Text style={styles.userName}>Gabriel Sedinam</Text>
            </View>
            {/* follow button */}
            <View style={styles.headerRight}>
              <TouchableOpacity>
                <View style={styles.followView}>
                  <Text style={styles.followBtnText}>Follow</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* Feed Image */}
          <Image
            style={styles.feedImage}
            source={{
              uri: "https://i.guim.co.uk/img/media/6ff0b5e28c50c3368affb7a6ca9ffee58a818029/0_25_3343_2006/master/3343.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d44c417743f1cdf12bdb0fd672de5791",
            }}
          />
          <View style={styles.cardFooter}>
            <View style={styles.footerLeft}>
              <View style={{ flexDirection: "row" }}>
                <FontAwesome name="heart" color="red" size={25} />
                <View style={{ flexDirection: "row", marginLeft: 15 }}>
                  <FontAwesome name="bookmark" color="white" size={25} />
                </View>
              </View>
            </View>
            <View style={{ marginRight: 10 }}>
              <FontAwesome name="download" color="white" size={25} />
            </View>
          </View>
        </View>
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
  card: {
    backgroundColor: "#333",
    padding: 5,
    margin: 5,
    borderRadius: 10,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: "row",
  },
  profilePic: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  userName: {
    alignSelf: "center",
    fontWeight: "bold",
    padding: 10,
    color: "white",
  },
  followView: {
    backgroundColor: "#000",
    height: 35,
    width: 80,
    marginTop: 7,
    borderRadius: 7,
  },
  followBtnText: {
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 10,
  },
  feedImage: {
    height: 350,
    borderRadius: 10,
    marginVertical: 10,
  },
  // headerRight: {},
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  footerLeft: {
    flexDirection: "row",
  },
});

export default HomeScreen;
