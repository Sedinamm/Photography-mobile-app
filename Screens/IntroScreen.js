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
          style={{ width: 400, height: 822 }}
          source={require("../Images/2.png")}
        />

        {/* Text */}
        <Text
          style={{
            color: "white",
            fontSize: 40,
            position: "absolute",
            top: 500,
            left: 25,
            fontWeight: "bold",
            shadowOpacity: 1,
          }}
        >
          PicLancer
        </Text>
        <Text
          style={{
            color: "#00FFF0",
            position: "absolute",
            fontSize: 70,
            left: 196,
            top: 470,
            shadowOpacity: 1,
          }}
        >
          .
        </Text>

        {/* Short Description */}
        <Text
          style={{
            position: "absolute",
            top: 550,
            left: 25,
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            shadowOpacity: 1,
          }}
        >
          Your Copyright Free Images {"\n"} App{" "}
        </Text>

        {/* Cards */}
        <View style={{ flexDirection: "row", position: "absolute" }}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "white",
                padding: 20,
                width: "150%",
                top: 620,
                left: 25,
                height: 70,
                borderRadius: 10,
                shadowColor: "black",
                shadowOffset: {width:0, height:2},
                shadowOpacity:0.26,
                shadowRadius:6,
                elevation:5,
              }}
            >
              <Text style={{ color: "black", textAlign: "center", fontWeight:"bold", top:5 }}>
                Freelance
              </Text>
            </View>
          </TouchableOpacity>

          {/* Second Card */}
          <View>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "white",
                padding: 20,
                width: "150%",
                top: 620,
                left: 105,
                height: 70,
                borderRadius: 10,
                shadowColor: "black",
                shadowOffset: {width:0, height:2},
                shadowOpacity:0.26,
                shadowRadius:6,
                elevation:5,
              }}
            >
              <Text style={{ color: "black", textAlign: "center", fontWeight:"bold", top:5 }}>
                Download
              </Text>
            </View>
          </TouchableOpacity>
          </View>
        </View>

              <View style={{position:"absolute", alignSelf:"center", top:720}}>
                <TouchableOpacity>
                  <Text style={{color:"#fff", fontWeight:"bold", fontSize:17}}>Sign In</Text>
                </TouchableOpacity>
              </View>
      </View>
    </SafeAreaView>
  );
};

export default IntroScreen;
