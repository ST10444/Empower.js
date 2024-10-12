import {Image ,Button, GestureResponderEvent, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ChildMinding = () => {
  function onPressLearnMore(event: GestureResponderEvent): void {
    throw new Error('Function not implemented.')
  }

  return (
    <View>
      <Image>

      </Image>
      <Text>Child Minding</Text>
    Fees:R750
    Purpose:To provide basic child and baby care 
    Content:
    -Birth to six-months old baby needs 
    -Seven months to one year old needs 
    -toddler needs 
    -Educational toys 
    <Button
  onPress={onPressLearnMore}
  title="Apply"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>

    </View>
  )
}

export default Child Minding

const styles = StyleSheet.create({})