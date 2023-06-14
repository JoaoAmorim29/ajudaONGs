import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastroOng from "../Telas/cadastroOng";
import CadastroUsuario from "../Telas/cadastroUsuario";
import Menu from "../Telas/menu";
import Login from "../Telas/login";
import LoginRotas from "./loginRotas";

const Stack = createNativeStackNavigator();

export default function MenuRotas(){
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Menu' component={Menu} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='CadastroOng' component={CadastroOng} />
                <Stack.Screen name='CadastroUsuario' component={CadastroUsuario} />
                <Stack.Screen name='LoginRotas' component={LoginRotas} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}