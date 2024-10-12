import {Image ,Button, GestureResponderEvent, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cooking = () => {
    function onPressLearnMore(event: GestureResponderEvent): void {
        throw new Error('Function not implemented.')
    }

  return (
    <View>
        <Image>

        </Image>
      <Text>Cooking</Text>
      Fees:R750
      Purpose:To prepare and cook nutritious family needs 
      Content:
      -Nutritional requirements for a healthy body
      -Plannig meals
      -Preparations and cooking meals 

      <Button
  onPress={onPressLearnMore}
  title="Apply"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
    </View>
  )
}

export default Cooking

const styles = StyleSheet.create({})