import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform, Text } from 'react-native';
import Tab1Screen from '../screens/Tab1Screen';
//import Tab2Screen from '../screens/Tab2Screen';
//import Tab3Screen from '../screens/Tab3Screen';
import StackNavigator from './StackNavigator';
import colors from '../theme/colorsTheme';
import TopTabNavigator from './TopTapNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
// ↑ from Ionicons
// Tabs is the default path when going to the third icon below. It is a route.
const Tabs = () => {
  return Platform.OS === "ios"
    ? <TabsIOS />
    : <TabsAndroid />
}

const BottomTabAndroid = createMaterialBottomTabNavigator();
const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colors.primary,
      }}
      inactiveColor={'white'}
      screenOptions={({ route }) => ({
        //tabBarShowLabel:false
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarIcon: ({ color, focused }) => {
          let iconName: string = "";
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'bandage-outline'
              break
            case 'Tab2Screen':
              iconName = 'basketball-outline'
              break
            case 'StackNavigator':
              iconName = 'bookmarks-outline'
          }
          return <Icon name={iconName} size={20} color={color}></Icon>

        },
      })}
    >
      <BottomTabAndroid.Screen name='Tab1Screen' options={{ title: "Tab1" }} component={Tab1Screen} />
      <BottomTabAndroid.Screen name='Tab2Screen' options={{ title: "Tab2" }} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name='StackNavigator' options={{ title: "Stack" }} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();
const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={({ route }) => ({
        //tabBarShowLabel:false
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarIcon: ({ color, focused, size }) => {
          let iconName: string = "";
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'bandage-outline'
              break
            case 'Tab2Screen':
              iconName = 'basketball-outline'
              break
            case 'StackNavigator':
              iconName = 'bookmarks-outline'
          }
          return <Icon name={iconName} size={20} color={color}></Icon>

        },
      })}>
      {/*If I want to change tabs name, I must add in options ↓ */}
      {/*<Tab.Screen name='Tab1Screen' options={{title:"Tab1", tabBarIcon:(props)=><Text style={{color:props.color}}>T1</Text>}} component={Tab1Screen}/>*/}
      <BottomTabIOS.Screen name='Tab1Screen' options={{ title: "Tab1" }} component={Tab1Screen} />
      <BottomTabIOS.Screen name='Tab2Screen' options={{ title: "Tab2" }} component={TopTabNavigator} />
      <BottomTabIOS.Screen name='StackNavigator' options={{ title: "Stack" }} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}

export default Tabs