import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

const IntroScreen = () => {
  return (
    <SafeAreaView>
      <View>
        {/* Image */}
        <Image
          style={styles.backgroundImage}
          source={require("../Images/2.png")}
        />

        {/* Text */}
        <Text style={styles.introText}>PicLancer</Text>

        <Text style={styles.fullStop}>.</Text>

        {/* Short Description */}
        <Text style={styles.shortDescription}>
          Your Copyright Free Images {"\n"} App
        </Text>

        {/* Cards */}
        <View style={styles.parentCardView}>
          <TouchableOpacity>
            <View style={styles.firstCardView}>
              <Text style={styles.cardText1}>Freelance</Text>
            </View>
          </TouchableOpacity>

          {/* Second Card */}
          <View>
            <TouchableOpacity>
              <View style={styles.secondCardView}>
                <Text style={styles.cardText2}>Download</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.signInView}>
          <TouchableOpacity>
            <Text style={styles.signInText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IntroScreen;

const styles = {
  backgroundImage: {
    width: 400,
    height: 822,
  },

  introText: {
    color: "white",
    fontSize: 40,
    position: "absolute",
    top: 500,
    left: 25,
    fontWeight: "bold",
    shadowOpacity: 1,
  },

  fullStop: {
    color: "#00FFF0",
    position: "absolute",
    fontSize: 70,
    left: 203,
    top: 470,
    shadowOpacity: 1,
  },

  shortDescription: {
    position: "absolute",
    top: 550,
    left: 25,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    shadowOpacity: 1,
  },

  parentCardView: {
    flexDirection: "row",
    position: "absolute",
  },

  firstCardView: {
    backgroundColor: "white",
    padding: 20,
    width: "150%",
    top: 620,
    left: 15,
    height: 70,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 5,
  },

  cardText1: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    top: 5,
  },

  secondCardView: {
    backgroundColor: "white",
    padding: 20,
    width: "150%",
    top: 620,
    left: 90,
    height: 70,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 5,
  },

  cardText2: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    top: 5,
  },

  signInView: {
    position: "absolute",
    alignSelf: "center",
    top: 720,
  },

  signInText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 17,
  },
};
