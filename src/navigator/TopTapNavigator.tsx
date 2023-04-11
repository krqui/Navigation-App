import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
//import { Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../theme/colorsTheme';
import styles from '../theme/appTheme';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  const { top: paddingTop } = useSafeAreaInsets()// a Hook
  return (
    <Tab.Navigator
      style={{ paddingTop }}//PaddingTop: The change is noticeable in IOS.
      sceneContainerStyle={{
        backgroundColor: "white"
      }}

      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarPressColor: colors.primary,// when you press the titles above.
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary// the strip below the titles above.
        },
        tabBarStyle: {// with this you style the strip below the titles
          shadowColor: 'transparent',
          elevation: 0,
          backgroundColor: "#ff3333",
        },
        tabBarIcon: ({ color, focused }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Chat':
              iconName = "chatbox-ellipses-outline"
              break;
            case "Contacts":
              iconName = "people-outline"
              break;
            case 'Albums':
              iconName = 'albums-outline'
              break
          }
          return <Icon name={iconName} size={26} color={color} />
        }
      })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} options={{ tabBarLabelStyle: styles.TopTabNavigator }} />
      <Tab.Screen name="Contacts" component={ContactsScreen} options={{ tabBarLabelStyle: styles.TopTabNavigator }} />
      <Tab.Screen name="Albums" component={AlbumsScreen} options={{ tabBarLabelStyle: styles.TopTabNavigator }} />
    </Tab.Navigator>
  );
}
export default TopTabNavigator;