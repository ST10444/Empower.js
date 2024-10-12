import { Image, Button, GestureResponderEvent, StyleSheet, Text, View } from 'react-native';
import React from 'react';

// Import the logo image
import logo from './Logo.jpg'; // Adjust the path according to your directory structure

const Home = () => {
  function onPressLearnMore(event: GestureResponderEvent): void {
    // Implement your function here
    console.log('Learn more button pressed');
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.description}>
        Our dedicated team of domestic workers and gardeners provide top-notch services to transform your 
        home and garden into a haven of serenity and beauty. Trust us to handle all your household and outdoor needs with care and precision.
      </Text>

      <Button
        onPress={onPressLearnMore}
        title="Enter"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 100, // Adjust width as needed
    height: 100, // Adjust height as needed
    marginBottom: 20,
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
  },
});
