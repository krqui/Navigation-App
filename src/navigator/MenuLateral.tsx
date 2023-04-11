import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import { useWindowDimensions, View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Tabs from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../theme/appTheme';
//import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
//const Stack = createStackNavigator();
// Here I create a Stack just for the settings, since if I wanted to create for both stacks, I could simply put headershown:true in Drawer.Navigator
/*const SettingsStackScreen = ()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SettingsScreen'
        component={SettingsScreen}
    />
    </Stack.Navigator>
  )
// This function would go as a component instead of SettingsScreen. 
}*/



const MenuLateral = () => {
  const { width } = useWindowDimensions()//This is a hook
  return (
    <Drawer.Navigator screenOptions={{
      drawerType: width >= 768 ? 'permanent' : 'front', //menu horizontal mode
      headerShown: false
    }} drawerContent={(props) => <MenuInterno {...props} />}>
      {/*Remember that within the drawer navigation there can only be screens. Not texts. */}
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView style={{backgroundColor:"#5856D6"}}>
      {/* Avatar section*/}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.2HQGjTNjzFhyfD7G8C5AjgAAAA?pid=ImgDet&rs=1'
          }}
          style={styles.avatar} />
      </View>

      {/* Menu section */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={{
            ...styles.menuBoton,
            flexDirection: 'row',
            backgroundColor:"#ff3333",
            borderRadius:10
          }}
          onPress={() => navigation.navigate('Tabs')}
        >
          <Icon name="compass-outline" size={24} color="black" />
          <Text style={styles.menuText}>Navigation</Text>
          {/*<Text style={styles.menuText}>Navegacion</Text>*/}
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.menuBoton,
            flexDirection: 'row',
            backgroundColor:"#ff3333",
            borderRadius:10
          }}
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Icon name="cog-outline" size={24} color="black" />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}


export default MenuLateral