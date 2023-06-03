import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "../Telas/login";
import AppRotas from "./appRotas";
import MenuRotas from "./menuRotas";

const Stack = createNativeStackNavigator();

export default function LoginRotas(){
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='MenuRotas' component={MenuRotas} />
                <Stack.Screen name='AppRotas' component={AppRotas} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}