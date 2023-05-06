import React from "react";
import maosDadas from '../../../assets/de-maos-dadas.png'
import menu from '../../../assets/menu.png'
import { Image, View, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Topo(){
    return(<>
        <View style={estilos.topo}>
            <View style={estilos.divImageTitle}>
                
                <Image source={maosDadas}/>
                <Text style={estilos.titleApp}>NOME</Text>
            </View>
        </View>
    </>)
}

const estilos = StyleSheet.create({
    topo:{
        width: '100%',
        height: 80,
        backgroundColor: '#0000ff',
        paddingVertical: 5,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    divImageTitle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleApp:{
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 5,
    }

})