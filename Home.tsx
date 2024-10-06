import {Image ,Button, GestureResponderEvent, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  function onPressLearnMore(event: GestureResponderEvent): void {
    throw new Error('Function not implemented.')
  }

  return (
    <View>
      <Image>

      </Image>
      <Text>Our dedicated team domestic workers nd gardeners provide top-notch services to transform your 
        home and garden into haven of serenity and beauty.Trust us to handle all your households and outdoor needs with care and precision

      </Text>

      <Button
  onPress={onPressLearnMore}
  title="Enter"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
