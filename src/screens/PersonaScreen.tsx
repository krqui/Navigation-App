import React, { useContext, useEffect } from 'react'
import { View, Text } from 'react-native';
import styles from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';
/*interface RouterParams {
    id:number,
    nombre:string
}*/

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> { };
// ↑ The second parameter belongs to the route in which we are, but in String.
// The second parameter only accepts names of existing Screens.
const PersonaScreen = ({ route, navigation }: Props) => {
    //const params = route.params as RouterParams;
    console.log(route)
    const params = route.params
    const { changeUsername } = useContext(AuthContext);
    //console.log(params)
    useEffect(() => {
        navigation.setOptions({
            //title:params!.nombre // The exclamation mark is no longer necessary, since now we receive something.
            title: params.nombre
        })
    }, []);
    // ↓ Cada vez que haga click en Pedro o Maria, the username will be set in Settings Screen.
    useEffect(() => {
        changeUsername(params.nombre)
    }, [])
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>{
                JSON.stringify(params, null, 3)
            }</Text>
        </View>
    )
}

export default PersonaScreen
