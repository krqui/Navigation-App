import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
//import StackNavigator from './src/navigator/StackNavigator';
//import MenuLateralBasico from './src/navigator/MenuLateralBasico';
import MenuLateral from './src/navigator/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/*<StackNavigator/>*/}
        {/*<MenuLateralBasico/>*/}
        <MenuLateral />
      </AppState>
    </NavigationContainer>
  )
}
// The "children" parameter can be of type JSX.Element if we pass a component to it.
// While if we want to pass at least two parameters we must type it: JSX.Element[]
const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App
