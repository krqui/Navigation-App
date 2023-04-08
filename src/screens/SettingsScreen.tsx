import React, { useContext } from 'react'
import { Text, View } from 'react-native'
//import { useSafeAreaInsets } from 'react-native-safe-area-context' // At least in android, I don't see that it does anything when I add 20.
import styles from '../theme/appTheme'
//import { SafeAreaView } from 'react-native-safe-area-context'
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../theme/colorsTheme';
// 1. At least on IOS, it works to use <SafeView></SafeView> as it prevents the text from touching the Notch.
// 2. According to a comment from Udemy, currently it is no longer necessary to use the useSafeAreaInsets hook, since it comes by default.
const SettingsScreen = () => {
  // const insets = useSafeAreaInsets();
  const { authState } = useContext(AuthContext)
  return (
    <View
      style={{
        //marginTop:insets.top
        ...styles.globalMargin,
        marginTop: 20
      }}>
      <Text style={styles.title}>Settings Screen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
      {
        authState.favoriteIcon && (
          <Icon
            name={authState.favoriteIcon}
            size={150}
            color={colors.primary} />
        )
      }
    </View>
  )
}

export default SettingsScreen
