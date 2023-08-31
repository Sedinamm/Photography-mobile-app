import { View, Text } from "react-native";
import React from "react";

const NotificationScreen = () => {
  return (
    <View
      style={{
        flex: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <Text style={{ color: "white" }}>NotificationScreen</Text>
    </View>
  );
};

export default NotificationScreen;
