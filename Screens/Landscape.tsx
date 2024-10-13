import { Image, Button, GestureResponderEvent, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Landscape: React.FC = () => {
  const navigation = useNavigation();

  function onPressLearnMore(event: GestureResponderEvent): void {
    console.log('Apply button pressed');
    // Optionally navigate to another page
    // navigation.navigate('SomeOtherPage');
  }

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={{ uri: './landscaping1.jpg' }} // Replace with your image URL
        style={styles.image}
      />

      <Text style={styles.title}>Landscape</Text>
      <Text style={styles.fees}>Fees: R15000</Text>
      <Text style={styles.purpose}>Purpose: To provide landscaping service for newly established gardens</Text>
      <Text style={styles.content}>Content:</Text>
      <Text style={styles.details}>
        - Indigenous and exotic plants and trees{"\n"}
        - Fixed structures (Fountain, statues, benches, tables){"\n"}
        - Balancing plants, trees, and colors{"\n"}
        - Aesthetic of plant shapes and colors{"\n"}
        - Garden layout
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

export default Landscape;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
