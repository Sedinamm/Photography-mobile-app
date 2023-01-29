import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";

export default function Signup() {

  return (
      
    <View style={{ flex: 10, backgroundColor: "black", }}>

      {/* Signup text */}
      <View style={{ flex: 2, backgroundColor: "green" }}>
        <Text style={{marginLeft:20, paddingTop:114, fontSize:25, fontWeight:"bold", color:"white"}}>Sign Up Today</Text>
      </View>

      {/* Text input and Btn */}
      <View style={{flex: 5,backgroundColor: "#7448", }}>
        {/* Email */}
        <View style={{top:-10}}>
      <View style={{top: 20, margin:20, }}>
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
          <View style={{top:5, margin:20,}}>
            <TextInput
            placeholder="Password"
            style={{
              backgroundColor:"white",
              padding:20,
              borderRadius:10,
              }}
            />
          </View>
          {/* Phone Number */}
          <View style={{top:-9, margin:20,}}>
            <TextInput
            placeholder="Phone Number"
            style={{
              backgroundColor:"white",
              padding:20,
              borderRadius:10,
              }}
            />
          </View>
          {/* Text{Already have an account?} */}
          <View>
          <Text style={{color:"white", marginLeft:143, bottom:20,}}>
            Already have an account? 
            <TouchableOpacity>
              <Text style={{color:"#00FFF0", bottom:-3,}}>Sign In</Text>
            </TouchableOpacity>
              </Text>
            </View>

            <View></View>
          </View>
      </View>

      {/* Text and Icons */}
      <View style={{flex: 3,backgroundColor: "#4518",}}>
      <Text style={{paddingLeft:10,}}>Google, Phone Number and Facebook Icon</Text>
      </View>

      {/* Already have an account? */}
      <View style={{flex: 1,backgroundColor: "red",}}>
      <Text style={{paddingLeft:10, paddingTop:30}}>Already have an account, login</Text>
      </View>
    </View>
  );
}




