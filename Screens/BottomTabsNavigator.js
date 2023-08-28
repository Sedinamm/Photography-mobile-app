import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import NotificationScreen from "./NotificationScreen";
import ProfileScreen from "./ProfileScreen";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#292929" },
        tabBarActiveTintColor: "white",
        tabBarLabelStyle: { display: "none" },
      }}
    >
      {/* Home Screen */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />

      {/* Notification Screen */}
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="ticket" size={24} color={color} />
          ),
        }}
      />

      {/* Profile Screen */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
