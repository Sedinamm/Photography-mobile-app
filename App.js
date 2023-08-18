import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import IntroScreen from "./Screens/IntroScreen";
import Signup from "./Screens/SignupScreen";
import LoginScreen from "./Screens/LoginScreen";
import PrivacyPolicy from "./Screens/PrivacyPolicy";
import HomeScreen from "./Screens/HomeScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import NotificationScreen from "./Screens/NotificationScreen";
import UploadScreen from "./Screens/UploadScreen";

// const Tab = createBottomTabNavigator();

// const HomeTab = () => {
//   return (
//     // Home Bottom Tab
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarStyle: { backgroundColor: "#000" },
//         tabBarActiveTintColor: "white",
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Entypo name="home" size={size} color={color} />
//           ),
//         }}
//       />

//       {/* Service Screen Bottom Tab */}
//       <Tab.Screen
//         name="NotificationScreen"
//         component={NotificationScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="people" size={size} color={color} />
//           ),
//         }}
//       />

//       {/* Add Screen Bottom Tab */}
//       <Tab.Screen
//         name="UploadScreen"
//         component={UploadScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="add-circle-outline" size={size} color={color} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// const MyNestedStack = () => {
//   return (
//     <NavigationContainer independent={true}>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="HomeTab"
//           component={HomeTab}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ headerShadowVisible: false }}
//         />

//         <Stack.Screen name="UploadScreen" component={UploadScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen
          name="MyNestedStack"
          component={MyNestedStack}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen name="IntroScreen" component={IntroScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={Signup} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
        />
        <Stack.Screen name="UploadScreen" component={UploadScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
