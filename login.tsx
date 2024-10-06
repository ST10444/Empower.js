import { Button, GestureResponderEvent, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const login = () => {
    function onPressLearnMore(event: GestureResponderEvent): void {
        throw new Error('Function not implemented.')
    }

  return (
    <View>
      <Text>login</Text>
      

      <Button
  onPress={onPressLearnMore}
  title="Get Started"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
    </View>
  )
}

export default login

const styles = StyleSheet.create({})