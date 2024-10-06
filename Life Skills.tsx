import {Image ,Button, GestureResponderEvent, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Life Skills = () => {
    function onPressLearnMore(event: GestureResponderEvent): void {
        throw new Error('Function not implemented.')
    }

  return (
    <View>
        <Image>
            
        </Image>
      <Text>Life Skills</Text>
      Fees:R15000
    Purpose:To provide skills to nevigate basic life necessities 
    Content:
    _Opening a bank account
    -Basic labour law (know your right)
    -Basic reading and writing literacy 
    -Basic numeric literacy 

    <Button
  onPress={onPressLearnMore}
  title="Apply"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
    </View>
  )
}

export default Life Skills

const styles = StyleSheet.create({})