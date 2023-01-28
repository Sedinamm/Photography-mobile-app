import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  TextInput,
} from "react-native";

export default function Signup() {

  return (
      
    <View style={{ flex: 10, backgroundColor: "black", }}>

      {/* Signup text */}
      <View style={{ flex: 2, backgroundColor: "green" }}>
        <Text style={{paddingLeft:10, paddingTop:114, fontSize:25, fontWeight:"bold", color:"white"}}>Sign Up Today</Text>
      </View>

      {/* Text input and Btn */}
      <View style={{flex: 5,backgroundColor: "#7448",}}>
      <Text style={{paddingLeft:10, }}>Herh chale, eno eaasy ohh</Text>
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




