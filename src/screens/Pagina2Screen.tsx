import { useNavigation, CommonActions } from '@react-navigation/core';
import React, { useEffect } from 'react'
import { Button, View, Text } from 'react-native'
import styles from '../theme/appTheme';

const Pagina2Screen = () => {
  const navigator = useNavigation() // This thanks to React Navigation
  // A dev seniro says that is better to use the method with hooks because we are already bringing the props previously. Example: Pagina1Screen.tsx
  useEffect(() => {
    navigator.setOptions({
      title: "Hola Mundo",
      headerBackTitle: ""// this one is for IOS
    })
  })
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina2Screen</Text>
      <Button title='Ir pagina 3' onPress={() => navigator.dispatch(CommonActions.navigate({ name: "Pagina3Screen" })
      )}
      />
    </View>
  )
}

export default Pagina2Screen
