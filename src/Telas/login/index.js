import React from "react";
import { View, StyleSheet, ScrollView } from "react-native"
import TopoLogin from "./components/topoLogin";
import CamposLogin from "./components/camposLogin";
import ButtonLogin from "./components/button";

export default function Login(){
    return(<>
        <ScrollView style={estilos.backgroundColor}>
            <TopoLogin/>
            <CamposLogin/>
            <ButtonLogin/>
        </ScrollView>
    </>)
}

const estilos = StyleSheet.create({
    backgroundColor:{
        flex: 1,
        backgroundColor: "#0000ff",
    }
})