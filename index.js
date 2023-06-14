/**
 * @format
 */

import {AppRegistry, SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import {name as appName} from './app.json';
import LoginRotas from './src/rotas/loginRotas';

const App = () => {
    return (
        <SafeAreaView style={estilos.tela}>
            <StatusBar/>
            <LoginRotas/>
        </SafeAreaView>
    )
}

AppRegistry.registerComponent(appName, () => App);

const estilos = StyleSheet.create({
    tela: {
        flex: 1
    }
})
