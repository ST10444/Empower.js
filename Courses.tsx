import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Courses = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Booking" onPress={() => navigation.navigate('Booking')} />
        <Button title="Courses" onPress={() => navigation.navigate('Courses')} />
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
      </View>
      <Text style={styles.title}>Courses</Text>
      <Text>Six-month Courses:</Text>
      <Text>- First Aid</Text>
      <Text>- Sewing</Text>
      <Text>- Landscaping</Text>
      <Text>- Life skills</Text>
      <Text>Six-week courses:</Text>
      <Text>- Child Minding</Text>
      <Text>- Cooking</Text>
      <Text>- Garden Maintenance</Text>
    </View>
  );
}

export default Courses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
