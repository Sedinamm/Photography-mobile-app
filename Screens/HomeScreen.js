import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  StyleSheet,
  FlatList,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";

const DATA = [
  {
    user_name: "John Doe",
    profile_pic: "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg",
    feed_image:
      "https://c4.wallpaperflare.com/wallpaper/313/134/489/space-computer-1920x1200-desktop-wallpaper-preview.jpg",
  },
  {
    user_name: "Mary Jane",
    profile_pic:
      "https://www.getnews.info/uploads/bb4710262b9221a3406b68c63334e1b3.jpg",
    feed_image:
      "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000",
  },
  {
    user_name: "Jaylen Green",
    profile_pic:
      "https://thumbs.dreamstime.com/b/generative-ai-young-smiling-man-avatar-man-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-d-vector-people-279560903.jpg",
    feed_image:
      "https://c4.wallpaperflare.com/wallpaper/919/217/102/cool-wallpaper-preview.jpg",
  },
];

const Item = ({ user_name, profile_pic, feed_image }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <View style={styles.headerLeft}>
        {/* Profile Picture */}
        <Image
          style={styles.profilePic}
          source={{
            uri: profile_pic,
          }}
        />
        <Text style={styles.userName}>{user_name}</Text>
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
    <Image
      style={styles.feedImage}
      source={{
        uri: feed_image,
      }}
    />
    <View style={styles.cardFooter}>
      <View style={styles.footerLeft}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <FontAwesome name="heart" color="red" size={25} />
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ flexDirection: "row", marginLeft: 15 }}>
              <FontAwesome name="bookmark" color="white" size={25} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity>
        <View style={{ marginRight: 10 }}>
          <FontAwesome name="download" color="white" size={25} />
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Logo */}
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
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            user_name={item.user_name}
            profile_pic={item.profile_pic}
            feed_image={item.feed_image}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
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
    // bottom: 10,
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
