import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IntroScreen from './Screens/IntroScreen';
import Signup from './Screens/Signup';
import Login from './Screens/Login';
import PrivacyPolicy from './Screens/PrivacyPolicy';
import Home from './Screens/Home';
import Profile from './Screens/Profile';
import Main from './Screens/Main';


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='IntroScreen' component={IntroScreen} />
        <Stack.Screen name='LoginScreen' component={Login} />
        <Stack.Screen name='SignupScreen' component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//   },
// });


