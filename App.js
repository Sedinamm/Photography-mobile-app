import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import IntroScreen from "./Screens/IntroScreen";
import Signup from "./Screens/SignupScreen";
import LoginScreen from "./Screens/LoginScreen";
import PrivacyPolicy from "./Screens/PrivacyPolicy";
import HomeScreen from "./Screens/HomeScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import NotificationScreen from "./Screens/NotificationScreen";
import UploadScreen from "./Screens/UploadScreen";
import CompleteProfileScreen from "./Screens/CompleteProfileScreen";
import BottomTabsNavigator from "./Screens/BottomTabsNavigator";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="IntroScreen">
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="BottomTabsNavigator"
          component={BottomTabsNavigator}
        />
        <Stack.Screen name="IntroScreen" component={IntroScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={Signup} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen
          name="CompleteProfileScreen"
          component={CompleteProfileScreen}
        />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
        />
        <Stack.Screen name="UploadScreen" component={UploadScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
