/**
 * @format
 */

import {AppRegistry, SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import {name as appName} from './app.json';
import AppRotas from './src/rotas/appRotas';
//import OngRotas from './src/rotas/ongRotas';

//import Sobre from './src/Telas/sobre';
//import Home from './src/Telas/home';
//import CadastroOng from './src/Telas/cadastroOng';
//import CadastroUsuario from './src/Telas/cadastroUsuario';
//import Login from './src/Telas/login';
//import DetalhesOng from './src/Telas/detalhesOng';
//import Menu from './src/Telas/menu';

const App = () => {
    return <>
        <SafeAreaView style={estilos.tela}>
            <StatusBar/>
            <AppRotas/>
        </SafeAreaView>
    </>
}

AppRegistry.registerComponent(appName, () => App);

const estilos = StyleSheet.create({
    tela: {
        flex: 1
    }
})
