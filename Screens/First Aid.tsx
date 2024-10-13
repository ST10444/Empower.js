import { Image, Button, GestureResponderEvent, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FirstAid = () => {
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
        source={{ uri: './First aid.jpg' }} // Replace with your image URL
        style={styles.image}
      />

      <Text style={styles.title}>First Aid</Text>
      <Text style={styles.fees}>Fees: R15000</Text>
      <Text style={styles.purpose}>Purpose: To provide first aid awareness and basic life support</Text>
      <Text style={styles.content}>Content:</Text>
      <Text style={styles.details}>
        - Wounds and bleeding{"\n"}
        - Burns and fractures{"\n"}
        - Emergency scene management{"\n"}
        - Cardio-Pulmonary Resuscitation (CPR){"\n"}
        - Respiratory distress e.g. Choking, Blocked airway
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

export default FirstAid;

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
