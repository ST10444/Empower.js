import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import React, { useState } from 'react';

const courseData = [
  { label: 'First Aid', fee: 1500 },
  { label: 'Gardening', fee: 750 },
  { label: 'Landscaping', fee: 1500 },
  { label: 'Child Minding', fee: 750 },
  { label: 'Sewing', fee: 1500 },
  { label: 'Cooking', fee: 750 },
  { label: 'Life Skills', fee: 1500},
];

const TotalFees= () => {
  const [selectedCourses, setSelectedCourses] = useState<{ [key: string]: boolean }>({});
  const [totalFee, setTotalFee] = useState(0);

  const toggleCourseSelection = (course: string) => {
    setSelectedCourses((prev) => ({
      ...prev,
      [course]: !prev[course],
    }));
  };

  const calculateTotal = () => {
    const total = courseData.reduce((acc, course) => {
      if (selectedCourses[course.label]) {
        return acc + course.fee;
      }
      return acc;
    }, 0);
    setTotalFee(total);
    Alert.alert("Total Fees", `Total Fees: R${total}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Courses</Text>
      {courseData.map((course) => (
        <Button
          key={course.label}
          title={selectedCourses[course.label] ? `✅ ${course.label}` : course.label}
          onPress={() => toggleCourseSelection(course.label)}
          color="#841584"
        />
      ))}
      <Button title="Calculate Total Fees" onPress={calculateTotal} color="#841584" />
      {totalFee > 0 && <Text style={styles.totalFee}>Total Fees: R{totalFee}</Text>}
    </View>
  );
};

export default TotalFees;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  totalFee: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
});
