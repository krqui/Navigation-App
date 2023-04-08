import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

const Tab3Screen = () => {
  useEffect(() => {
    console.log('Tab3Screen effect')
  }, [])
  return (
    <View>
      <Text>Tab3Screen</Text>
    </View>
  )
}

export default Tab3Screen
