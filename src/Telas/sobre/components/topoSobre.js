import React from "react";
import { View, Image, StyleSheet } from "react-native";
import maosDadas from '../../../assets/de-maos-dadas.png'

export default function TopoSobre(){
    return (<View style={estilos.view}>
            <Image source={maosDadas}/>
        </View>)
}

const estilos = StyleSheet.create({
    view:{
        backgroundColor: "#0000ff",
        minHeight: 90,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center'
    },
})