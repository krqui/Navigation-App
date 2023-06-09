import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Pagina1Screen from '../screens/Pagina1Screen';
import Pagina2Screen from '../screens/Pagina2Screen';
import Pagina3Screen from '../screens/Pagina3Screen';
import PersonaScreen from '../screens/PersonaScreen';

export type RootStackParams = {
  // la documentacion oficial nos recomienda que coloquemos undefined como resultado de que no estamos recibiendo nada y tambien para darnos flexibilidad.
  Pagina1Screen: undefined,
  Pagina2Screen: undefined,
  Pagina3Screen: undefined,
  PersonaScreen: { id: number, nombre: string }
}

const Stack = createStackNavigator<RootStackParams>();
// ↑ By implementing this typing you also force the typing in the Stack.Screen name to be true.
const StackNavigator = () => {
  return (
    <Stack.Navigator
      //initialRouteName='Pagina2Screen'
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
          backgroundColor:"#ff3333"
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}>
      <Stack.Screen name="Pagina1Screen" options={{ title: "Page 1" }} component={Pagina1Screen} />
      <Stack.Screen name="Pagina2Screen" options={{ title: "Page 2" }} component={Pagina2Screen} />
      <Stack.Screen name="Pagina3Screen" options={{ title: "Page 3" }} component={Pagina3Screen} />
      <Stack.Screen name="PersonaScreen" component={PersonaScreen} />
    </Stack.Navigator>
  );
}// The PersonaScreen stack is persisted to render the JSON to Pedro and Maria.

export default StackNavigator