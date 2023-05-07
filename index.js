/**
 * @format
 */

import {AppRegistry, SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import {name as appName} from './app.json';
import AppRotas from './src/rotas/appRotas';
import { OngsProvider } from './src/context/ongsContext';

const App = () => {
    return (
        <OngsProvider>
            <SafeAreaView style={estilos.tela}>
                <StatusBar/>
                <AppRotas/>
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
