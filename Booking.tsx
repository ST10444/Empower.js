import { Button, GestureResponderEvent, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Booking = () => {
    function onPressLearnMore(event: GestureResponderEvent): void {
        throw new Error('Function not implemented.')
    }

  return (
    <View>
      <Text>Booking courses
        Please enter your details below and any courses you would like to take:

        we have discounts avaliable;
        -1Course;No discounts
        -2 courses:5% off
        -3 courses- 10% off
        - More than 3 courses-15% off 

        <Button
  onPress={onPressLearnMore}
  title="Enter Details"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
      </Text>



    </View>
  )
}

export default Booking

const styles = StyleSheet.create({})