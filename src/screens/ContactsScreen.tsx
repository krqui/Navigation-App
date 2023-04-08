import React, { useContext } from 'react'
import { Text, View, Button } from 'react-native'
import styles from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
const ContactsScreen = () => {
  const { signIn, authState } = useContext(AuthContext)
  const { isLoggedIn } = authState;
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ContactsScreen</Text>
      {
        !isLoggedIn && <Button title='SignIn' onPress={signIn}></Button>
      }
    </View>
  )
}

export default ContactsScreen
