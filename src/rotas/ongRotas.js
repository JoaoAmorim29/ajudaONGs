import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Telas/home';
import DetalhesOng from '../Telas/detalhesOng';

const Stack = createNativeStackNavigator();

export default function OngRotas(){
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='HomeScreen' component={Home} />
                <Stack.Screen name='DetalhesOng' component={DetalhesOng} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}