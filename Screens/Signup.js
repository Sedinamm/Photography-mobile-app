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
      <View style={{flex: 5,backgroundColor: "#7448",}}>
        {/* Email */}
      <View style={{top: 40, margin:20, top:30, }}>
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
          <View style={{top:40, margin:20, top:10}}>
            <TextInput
            placeholder="Password"
            style={{
              backgroundColor:"white",
              padding:20,
              borderRadius:10,
              
            }}/>
          </View>
      </View>

      {/* Text and Icons */}
      <View style={{flex: 3,backgroundColor: "#4518",}}>
      <Text style={{paddingLeft:10,}}>Herh chale, eno eaasy ohh</Text>
      </View>

      {/* Already have an account? */}
      <View style={{flex: 1,backgroundColor: "red",}}>
      <Text style={{paddingLeft:10, paddingTop:30}}>Herh chale, eno eaasy ohh</Text>
      </View>
    </View>
  );
}




