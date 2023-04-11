import { StyleSheet } from "react-native";
import TopTabNavigator from '../navigator/TopTapNavigator';

const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
        color: '#000'
    },
    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10
    },
    botonGrandeTexto: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    avatarContainer: {
        /*backgroundColor:'red',*/
        alignItems: "center",
        marginTop: 20
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    menuContainer: {
        marginVertical: 30, // Remember that it applies margin both above and below.
        marginHorizontal: 30
    },
    menuBoton: {
        marginVertical: 10
    },
    menuText: {
        fontSize: 20,
        fontWeight:"500"
    },
    TopTabNavigator:{
        fontWeight: "800",
        fontSize: 16
    }
});

export default styles;