import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Sobre from "../Telas/sobre";
import OngRotas from "./ongRotas";
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function AppRotas(){
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator 
            screenOptions={{
                 headerShown: false,
                 tabBarShowLabel: false,
                 tabBarStyle:{height: 60, alignItems: "center" },
                 }}
            >

                <Tab.Screen 
                name="Home" 
                component={OngRotas}
                options={{
                    tabBarIcon: ({focused}) => {
                        if(focused){
                            return <Icon name='home' size={28} color="#0000ff"/>
                        }else{
                            return <Icon name='home' size={28} color="#808080"/>
                        }
                    }
                }}/>
                
                <Tab.Screen 
                name="Sobre" 
                component={Sobre}
                options={{
                    tabBarIcon: ({focused}) => {
                        if(focused){
                            return <Icon name='info-circle' size={28} color="#0000ff"/>
                        }else{
                            return <Icon name='info-circle' size={28} color="#808080"/>
                        }
                    }
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}