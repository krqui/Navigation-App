import React, { useEffect } from 'react'
import { Button, View, Text } from 'react-native'
//import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from '../theme/appTheme';
import colors from '../theme/colorsTheme';
//interface Props extends StackScreenProps<any, any> { };
interface Props extends DrawerScreenProps<any, any> { }
export const Pagina1Screen = ({ navigation }: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        /*<Button
          title="Menu"
          onPress={()=>navigation.toggleDrawer()}/>*/
        <TouchableOpacity
          style={{
            marginLeft: 10
          }}
          onPress={() => navigation.toggleDrawer()}>
          <Icon
            name="menu-outline"
            color={colors.primary}
            size={36}>
          </Icon>
        </TouchableOpacity>
      )
    })
  })
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button title='Ir pagina 2' onPress={() => navigation.navigate('Pagina2Screen')} />

      <Text style={{
        marginVertical: 20,
        fontSize: 20,
        marginLeft: 5
      }}>Navigate with arguments</Text>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{ ...styles.botonGrande, backgroundColor: '#5856D6' }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Pedro'
          })}
        >
          <Icon name="body-outline" color="white" size={35} />
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.botonGrande, backgroundColor: '#FF9427' }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}
        >
          <Icon name="woman-outline" color="white" size={35} />
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Pagina1Screen
