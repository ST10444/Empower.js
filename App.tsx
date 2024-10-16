import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

import Home from './Screens/Home';
import Booking from './Screens/Booking';
import Courses from './Screens/Courses';
import Contact from './Screens/Contact';
import FirstAid from './Screens/First Aid';
import Cooking from './Screens/Cooking';
import Gardening from './Screens/Gardening';
import login from './Screens/login';
import TotalFees from './Screens/TotalFees';



const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
      <Stack.Screen name='Booking' component={Booking} options={{headerShown:false}}/>
      <Stack.Screen name='Login' component={login} options={{headerShown:false}}/>
      <Stack.Screen name='Courses' component={Courses} options={{headerShown:false}}/>
      <Stack.Screen name='Contact' component={Contact} options={{headerShown:false}}/>
      <Stack.Screen name='First Aid' component={FirstAid} options={{headerShown:false}}/>
      <Stack.Screen name='Cooking' component={Cooking} options={{headerShown:false}}/>
      <Stack.Screen name='Gardening' component={Gardening} options={{headerShown:false}}/>
      <Stack.Screen name='TotalFees' component={TotalFees} options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 20,
    backgroundColor: "grey",
    
  }
});

