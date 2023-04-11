import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View, Text, Button } from 'react-native'
import styles from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> { };
const Pagina3Screen = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Screen of page 3</Text>
      {/*Pressing these buttons removes the stack. In other words, we return to page 1 and the back arrows are eliminated.*/}
      <Button title='Go back'
        onPress={() => navigation.pop()} />
      <Button title='Go to page 1'
        onPress={() => navigation.popToTop()} />
    </View>
  )
}

export default Pagina3Screen
