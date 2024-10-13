import { Image, Button, GestureResponderEvent, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ChildMinding= () => {
  function onPressLearnMore(event: GestureResponderEvent): void {
    console.log('Learn more button pressed');
  }

  return (
    <View style={styles.container}>
      {/* Navigation Bar */}
      <View style={styles.navbar}>
        <Text style={styles.navItem}>Home</Text>
        <Text style={styles.navItem}>Courses</Text>
        <Text style={styles.navItem}>Bookings</Text>
        <Text style={styles.navItem}>Login</Text>
        <Text style={styles.navItem}>Contact Us</Text>
      </View>

      {/* Image */}
      <Image 
        source={{ uri: './Child Minding.jpg' }} // Replace with your image URL
        style={styles.image}
      />

      <Text style={styles.title}>Child Minding</Text>
      <Text style={styles.fees}>Fees: R750</Text>
      <Text style={styles.purpose}>Purpose: To provide basic child and baby care</Text>
      <Text style={styles.content}>Content:</Text>
      <Text style={styles.details}>
        - Birth to six-months old baby needs{"\n"}
        - Seven months to one year old needs{"\n"}
        - Toddler needs{"\n"}
        - Educational toys
      </Text>

      <Button
        onPress={onPressLearnMore}
        title="Apply"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default ChildMinding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f8f8f8',
    paddingVertical: 10,
    marginBottom: 20,
  },
  navItem: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  fees: {
    fontSize: 18,
    marginBottom: 5,
  },
  purpose: {
    fontSize: 16,
    marginBottom: 5,
  },
  content: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  details: {
    fontSize: 16,
    marginBottom: 20,
  },
});
