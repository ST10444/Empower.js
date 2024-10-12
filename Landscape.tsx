import { Image, Button, GestureResponderEvent, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

// Import the image
import landscapeImage from './landscaping1.jpg'; // Adjust the path according to your project structure

const Landscape = () => {
  const navigation = useNavigation();

  function onPressLearnMore(event: GestureResponderEvent): void {
    // Implement your function here
    console.log('Apply button pressed');
  }

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Booking" onPress={() => navigation.navigate('Booking')} />
        <Button title="Courses" onPress={() => navigation.navigate('Courses')} />
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
      </View>

      <Image 
        source={landscapeImage} 
        style={styles.image} 
        resizeMode="cover" 
      />
      <Text style={styles.title}>Landscape</Text>
      <Text style={styles.text}>Fees: R15000</Text>
      <Text style={styles.text}>Purpose: To provide landscaping service for newly established gardens</Text>
      <Text style={styles.text}>Content:</Text>
      <Text style={styles.text}>- Indigenous and exotic plants and trees</Text>
      <Text style={styles.text}>- Fixed structures (fountain, statues, benches, tables)</Text>
      <Text style={styles.text}>- Balancing plants and trees and colors</Text>
      <Text style={styles.text}>- Aesthetic of plant shapes and colors</Text>
      <Text style={styles.text}>- Garden layout</Text>

      <Button
        onPress={onPressLearnMore}
        title="Apply"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

export default Landscape;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    width: '100%',
  },
  image: {
    width: '100%', // Full width
    height: 200,   // Adjust height as needed
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});
