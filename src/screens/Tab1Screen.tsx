import React, { useEffect } from 'react'
// import Icon from 'react-native-vector-icons/Ionicons';
// ↑ Install yarn add -D @types/react-native-vector-icons
import { View, Text } from 'react-native'
import styles from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TouchableIcon from '../components/TouchableIcon';

const Tab1Screen = () => {
  const { top } = useSafeAreaInsets();
  useEffect(() => {
    console.log('Tab1Screen effect')
  }, [])
  // Placing the "Text Container" of the "Icon"" is optional. In this case, we use it just to keep the icons organized.
  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: top + 10
    }}
    >
      <Text style={styles.title}>Icons</Text>
      <Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="attach-outline" />
        <TouchableIcon iconName="bonfire-outline" />
        <TouchableIcon iconName="calculator-outline" />
        <TouchableIcon iconName="chatbubble-ellipses-outline" />
        <TouchableIcon iconName="images-outline" />
        <TouchableIcon iconName="leaf-outline" />
        <TouchableIcon iconName="airplane-outline" />
      </Text>

    </View>
  )
}

export default Tab1Screen
