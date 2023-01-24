import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import IntroScreen from './Screens/IntroScreen';
import Signup from './Screens/Signup';
import Login from './Screens/Login';
import PrivacyPolicy from './Screens/PrivacyPolicy';



export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <IntroScreen/>
      {/* <Signup/> */}
      {/* <Login/> */}
      {/* <PrivacyPolicy/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
