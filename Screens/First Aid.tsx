import { Image, Button, GestureResponderEvent, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const FirstAid = () => {
  const navigation = useNavigation();
  const [selectedCourse, setSelectedCourse] = useState<string>(''); // State for selected course

  const courses = [
    'First Aid',
    'Gardening',
    'Landscaping',
    'Cooking',
    'Child Minding',
    'Sewing',
  ];

  const onPressApply = () => {
    // Navigate to the bookings page
    navigation.navigate('Booking');
  };

  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>

      {/* Navigation Bar with Dropdown */}
      <View style={styles.navbar}>
        <Text style={styles.navItem}>Home</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedCourse}
            onValueChange={(itemValue) => setSelectedCourse(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Courses" value="" />
            {courses.map((course) => (
              <Picker.Item key={course} label={course} value={course} />
            ))}
          </Picker>
        </View>
        <Text style={styles.navItem}>Bookings</Text>
        <Text style={styles.navItem}>Login</Text>
        <Text style={styles.navItem}>Contact Us</Text>
      </View>

      {/* Image */}
      <Image
        source={{ uri: './FirstAid.jpg' }} // Replace with your image URL
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
        onPress={onPressApply}
        title="Apply"
        color="#841584"
        accessibilityLabel="Apply for the selected course"
      />
    </View>
  );
};

export default FirstAid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000', // Set background color to black
  },
  backButton: {
    marginBottom: 10,
  },
  backButtonText: {
    fontSize: 20,
    color: '#841584',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    paddingVertical: 10,
    marginBottom: 20,
  },
  navItem: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
    color: '#fff', // Change text color to white for contrast
  },
  pickerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  picker: {
    height: 50,
    width: '100%',
    marginHorizontal: 10,
    color: 'white',
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
    color: '#fff', // Change text color to white for contrast
  },
  fees: {
    fontSize: 18,
    marginBottom: 5,
    color: '#fff', // Change text color to white for contrast
  },
  purpose: {
    fontSize: 16,
    marginBottom: 5,
    color: '#fff', // Change text color to white for contrast
  },
  content: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff', // Change text color to white for contrast
  },
  details: {
    fontSize: 16,
    marginBottom: 20,
    color: '#fff', // Change text color to white for contrast
  },
});
