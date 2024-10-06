import {Image ,Button, GestureResponderEvent, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FirstAid = () => {
    function onPressLearnMore(event: GestureResponderEvent): void {
        throw new Error('Function not implemented.')
    }

  return (
    <View>
        <Image>

        </Image>
      <Text>First Aid</Text>
      Fees:R15000
      Purpose:To provide first aid awareness and basic life support 
      Content:
      -Wounds and bleeding
      -Burns and fractures 
      -Emergency scene management 
      -Cardio-Pulmonany Resuscitation(CPR)
      -Respiratory distress e.gChoking,Blocked airway

      <Button
  onPress={onPressLearnMore}
  title="Apply"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>

    </View>
  )
}

export default 

const styles = StyleSheet.create({})