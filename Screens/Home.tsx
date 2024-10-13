import { Image, Button, GestureResponderEvent, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Home = () => {
  function onPressLearnMore(event: GestureResponderEvent): void {
    console.log('Get Started button pressed');
  }

  return (
    <View style={styles.container}>
      {/* Logo Image */}
      <Image
        source={{ uri: './Logo.png' }} // Replace with your logo image URL
        style={styles.logo}
      />

      <Text style={styles.text}>
        Our dedicated team of domestic workers and gardeners provide top-notch services to transform your 
        home and garden into a haven of serenity and beauty. Trust us to handle all your household and outdoor needs with care and precision.
      </Text>

      

      {/* Get Started Button */}
      <Button
        onPress={onPressLearnMore}
        title="Get Started"
        color="#841584"
        accessibilityLabel="Get started with our services"
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Black background
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100, // Adjust width as needed
    height: 100, // Adjust height as needed
    marginBottom: 20,
  },
  text: {
    color: '#fff', // White text for contrast
    textAlign: 'center',
    marginBottom: 20,
  },
});
