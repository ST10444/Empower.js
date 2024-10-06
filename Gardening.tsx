import {Image ,Button, GestureResponderEvent, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Gardening = () => {
    function onPressLearnMore(event: GestureResponderEvent): void {
        throw new Error('Function not implemented.')
    }

  return (
    <View>
        <Image>

        </Image>
      <Text>Gardening</Text>
      
      Fees:R750
      Purpose:To provide basic knowledg of watering pruning and planting in domestic 
      Content:
      -water restriction and watering requirements of indigenous and exotic plants
      -Pruning and propagation of plants 
      -Planting techniques for different types 

      <Button
  onPress={onPressLearnMore}
  title="Apply"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
      
    </View>

  )
}

export default Gardening

const styles = StyleSheet.create({})