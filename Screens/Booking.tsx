import { Button, GestureResponderEvent, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Booking: React.FC = () => {
  const navigation = useNavigation();

  const onPressEnterDetails = () => {
    // Navigate to the Total Fees page
    navigation.navigate('TotalFees');
  };

  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Booking Courses</Text>
      <Text style={styles.description}>
        Please enter your details below and any courses you would like to take:
      </Text>
      <Text style={styles.discountInfo}>
        We have discounts available:
        {"\n"}- 1 Course: No discounts
        {"\n"}- 2 Courses: 5% off
        {"\n"}- 3 Courses: 10% off
        {"\n"}- More than 3 Courses: 15% off
      </Text>

      <Button
        onPress={onPressEnterDetails}
        title="Enter Details"
        color="#841584"
        accessibilityLabel="Navigate to Total Fees page"
      />
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000', // Black background
  },
  backButton: {
    marginBottom: 10,
  },
  backButtonText: {
    fontSize: 20,
    color: '#841584', // Change color for visibility
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // White text for contrast
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#fff', // White text for contrast
    marginBottom: 10,
  },
  discountInfo: {
    fontSize: 16,
    color: '#fff', // White text for contrast
    marginBottom: 20,
  },
});
