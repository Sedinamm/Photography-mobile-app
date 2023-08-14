import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";

export default function SignupScreen() {
  return (
    <View style={{ flex: 10, backgroundColor: "black" }}>
      {/* Signup text */}
      <View style={{ flex: 2, backgroundColor: "black" }}>
        <Text
          style={{
            marginLeft: 20,
            paddingTop: 114,
            fontSize: 25,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Sign Up Today
        </Text>
      </View>

      {/* Text input and Btn */}
      <View style={{ flex: 5, backgroundColor: "#000" }}>
        {/* Email */}
        <View style={{ top: -10 }}>
          <View style={{ top: 20, margin: 20 }}>
            <TextInput
              keyboardType="email-address"
              placeholder="Email"
              style={{
                backgroundColor: "white",
                padding: 20,
                borderRadius: 10,
              }}
            />
          </View>
          {/* Password */}
          <View style={{ top: 5, margin: 20 }}>
            <TextInput
              placeholder="Password"
              style={{
                backgroundColor: "white",
                padding: 20,
                borderRadius: 10,
              }}
            />
          </View>
          {/* Phone Number */}
          <View style={{ top: -9, margin: 20 }}>
            <TextInput
              placeholder="Phone Number"
              style={{
                backgroundColor: "white",
                padding: 20,
                borderRadius: 10,
              }}
            />
          </View>
          {/* Text{Already have an account?} */}
          <View>
            <Text style={{ color: "white", marginLeft: 143, bottom: 20 }}>
              Already have an account?
              <TouchableOpacity>
                <Text style={{ color: "#00FFF0", bottom: -4 }}>Sign In</Text>
              </TouchableOpacity>
            </Text>
          </View>
          {/* Sign up Button */}
          <View>
            <TouchableOpacity>
              <View
                style={{
                  height: 55,
                  width: 250,
                  backgroundColor: "#00FFF0",
                  justifyContent: "center",
                  borderRadius: 10,
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                <Text style={{ color: "#000" }}>Sign in</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Text and Icons */}
      <View style={{ flex: 3, backgroundColor: "#000" }}>
        <Text style={{ paddingLeft: 10, color: "white" }}>
          Google, Phone Number
        </Text>
      </View>

      {/* Already have an account? */}
      <View style={{ flex: 1, backgroundColor: "#000" }}>
        <Text style={{ paddingLeft: 10, paddingTop: 30, color: "white" }}>
          By signing up, you agee to our terms of use
        </Text>
      </View>
    </View>
  );
}
