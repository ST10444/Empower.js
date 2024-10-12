import {Image ,Button, GestureResponderEvent, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Landscape = () => {
    function onPressLearnMore(event: GestureResponderEvent): void {
        throw new Error('Function not implemented.')
    }

  return (
    <View>

        <Image>

    
        </Image>
      <Text>Landscape</Text>
      Fees:R15000
      Purpose:To provide landscaping service for new established gardens 
      Content:
      -Indigenous and exotic plants and trees
      -fixed structure (Fountain,status,benches,tables)
      -Balancing plants and trees and colours 
      -Aeesthic of plants shapes and colours 
      -Garden layout

      <Button
  onPress={onPressLearnMore}
  title="Apply"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
    </View>
  )
}

export default Landscape

const styles = StyleSheet.create({})