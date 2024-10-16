import { StyleSheet, Text, View, Button, Picker } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const courses = [
  { label: 'First Aid', value: 'firstAid' },
  { label: 'Gardening', value: 'gardening' },
  { label: 'Landscaping', value: 'landscaping' },
  { label: 'Child Minding', value: 'childMinding' },
  { label: 'Sewing', value: 'sewing' },
  { label: 'Cooking', value: 'cooking' },
];

const Courses: React.FC = () => {
  const navigation = useNavigation();
  const [selectedCourse, setSelectedCourse] = useState<string>('');

  const handleSelectCourse = () => {
    // Navigate to the TotalFees page with the selected course
    navigation.navigate('TotalFees', { course: selectedCourse });
  };

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

      <Text style={styles.title}>Select a Course</Text>
      
      <Picker
        selectedValue={selectedCourse}
        onValueChange={(itemValue) => setSelectedCourse(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select a course" value="" />
        {courses.map((course) => (
          <Picker.Item key={course.value} label={course.label} value={course.value} />
        ))}
      </Picker>

      <Button 
        title="Proceed to Fee Calculation" 
        onPress={handleSelectCourse} 
        color="#841584"
        disabled={!selectedCourse} // Disable if no course is selected
      />
    </View>
  );
};

export default Courses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000', // Black background
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // White text for contrast
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
});
