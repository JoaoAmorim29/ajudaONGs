import React from "react";
import { View, StyleSheet } from "react-native";
import TopoSobre from "./components/topoSobre";
import Card from "./components/card";

export default function Sobre(){
    return (<View style={estilos.view}>
        <TopoSobre/>
        <Card/>
    </View>)
}

const estilos = StyleSheet.create({
    view:{
        alignItems: "center"
    },
})