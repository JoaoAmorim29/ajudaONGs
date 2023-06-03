/**
 * @format
 */

import {AppRegistry, SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import {name as appName} from './app.json';
import { OngsProvider } from './src/context/ongsContext';
import LoginRotas from './src/rotas/loginRotas';

const App = () => {
    return (
        <OngsProvider>
            <SafeAreaView style={estilos.tela}>
                <StatusBar/>
                <LoginRotas/>
            </SafeAreaView>
        </OngsProvider>
    )
}

AppRegistry.registerComponent(appName, () => App);

const estilos = StyleSheet.create({
    tela: {
        flex: 1
    }
})
