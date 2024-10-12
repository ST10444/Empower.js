import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';       // Adjust paths as necessary
import Booking from './Booking'; // Adjust paths as necessary
import Courses from './Courses'; // Adjust paths as necessary
import Login from './login';     // Adjust paths as necessary

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Home' }} // Optional header title
        />
        <Stack.Screen 
          name="Booking" 
          component={Booking} 
          options={{ title: 'Booking' }} // Optional header title
        />
        <Stack.Screen 
          name="Courses" 
          component={Courses} 
          options={{ title: 'Courses' }} // Optional header title
        />
        <Stack.Screen 
          name="login" 
          component={Login} 
          options={{ title: 'login' }} // Optional header title
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


  
        