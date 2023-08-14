// import {
//   View,
//   Text,
//   SafeAreaView,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import React from "react";

// const IntroScreen = ({ navigation }) => {
//   return (
//     <SafeAreaView>
//       <View>
//         {/* Image */}
//         <Image
//           style={styles.backgroundImage}
//           source={require("../Images/2.png")}
//         />

//         {/* Text */}
//         <Text style={styles.introText}>PicLancer</Text>

//         <Text style={styles.fullStop}>.</Text>

//         {/* Short Description */}
//         <Text style={styles.shortDescription}>
//           Your Copyright Free Images {"\n"} App
//         </Text>

//         {/* Cards */}
//         <View style={styles.parentCardView}>
//           <TouchableOpacity
//             onPress={() => {
//               navigation.navigate("SignupScreen");
//             }}
//           >
//             <View style={styles.firstCardView}>
//               <Text style={styles.cardText1}>Freelance</Text>
//             </View>
//           </TouchableOpacity>

//           {/* Second Card */}
//           <View>
//             <TouchableOpacity
//               onPress={() => {
//                 navigation.navigate("SignupScreen");
//               }}
//             >
//               <View style={styles.secondCardView}>
//                 <Text style={styles.cardText2}>Download</Text>
//               </View>
//             </TouchableOpacity>
//           </View>
//         </View>

//         <View style={styles.signInView}>
//           <TouchableOpacity
//             onPress={() => {
//               navigation.navigate("LoginScreen");
//             }}
//           >
//             <Text style={styles.signInText}>Login</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default IntroScreen;

// const styles = {
//   backgroundImage: {
//     width: 400,
//     height: 822,
//   },

//   introText: {
//     color: "white",
//     fontSize: 40,
//     position: "absolute",
//     top: 500,
//     left: 25,
//     fontWeight: "bold",
//     shadowOpacity: 1,
//   },

//   fullStop: {
//     color: "#00FFF0",
//     position: "absolute",
//     fontSize: 70,
//     left: 203,
//     top: 470,
//     shadowOpacity: 1,
//   },

//   shortDescription: {
//     position: "absolute",
//     top: 551,
//     left: 25,
//     color: "white",
//     fontSize: 20,
//     fontWeight: "bold",
//     shadowOpacity: 1,
//   },

//   parentCardView: {
//     flexDirection: "row",
//     position: "absolute",
//   },

//   firstCardView: {
//     backgroundColor: "white",
//     padding: 20,
//     width: "150%",
//     top: 620,
//     left: 15,
//     height: 70,
//     borderRadius: 10,
//     shadowColor: "black",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.26,
//     shadowRadius: 6,
//     elevation: 5,
//   },

//   cardText1: {
//     color: "black",
//     textAlign: "center",
//     // fontWeight: "bold",
//     top: 5,
//   },

//   secondCardView: {
//     backgroundColor: "white",
//     padding: 20,
//     width: "150%",
//     top: 620,
//     left: 90,
//     height: 70,
//     borderRadius: 10,
//     shadowColor: "black",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.26,
//     shadowRadius: 6,
//     elevation: 5,
//   },

//   cardText2: {
//     color: "black",
//     textAlign: "center",
//     // fontWeight: "bold",
//     top: 5,
//   },

//   signInView: {
//     position: "absolute",
//     alignSelf: "center",
//     top: 720,
//   },

//   signInText: {
//     color: "#fff",
//     // fontWeight: "bold",
//     fontSize: 16,
//     top: -10,
//   },
// };

import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

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
        <Text style={styles.description}>Your copyright-free images app</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignupScreen");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Freelance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Download</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
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
    marginRight: 20, // Adjust as needed
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
    marginBottom: 20, // Adjust as needed
    bottom: 15,
  },
});

export default IntroScreen;
