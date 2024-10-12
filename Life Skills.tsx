import { Image, Button, GestureResponderEvent, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

// Import the image
import lifeSkillsImage from './Life Skills.jpg'; // Adjust the path as necessary

const LifeSkills = () => {
  const navigation = useNavigation();

  function onPressLearnMore(event: GestureResponderEvent): void {
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
        source={lifeSkillsImage} 
        style={styles.image} 
        resizeMode="cover" 
      />
      
      <Text style={styles.title}>Life Skills</Text>
      <Text style={styles.text}>Fees: R15000</Text>
      <Text style={styles.text}>Purpose: To provide skills to navigate basic life necessities</Text>
      <Text style={styles.text}>Content:</Text>
      <Text style={styles.text}>- Opening a bank account</Text>
      <Text style={styles.text}>- Basic labor law (know your rights)</Text>
      <Text style={styles.text}>- Basic reading and writing literacy</Text>
      <Text style={styles.text}>- Basic numeric literacy</Text>

      <Button
        onPress={onPressLearnMore}
        title="Apply"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

export default LifeSkills;

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
