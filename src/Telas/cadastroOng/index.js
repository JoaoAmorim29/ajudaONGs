import React from "react";
import { View, StyleSheet, ScrollView } from "react-native"
import TopoCadastroOng from "./components/topoCadastroOng";
import CamposOng from "./components/camposOng";
import ButtonCadastroOng from "./components/button";

export default function CadastroOng(){
    return(<>
        <ScrollView style={estilos.backgroundColor}>
            <TopoCadastroOng/>
            <CamposOng/>
            <ButtonCadastroOng/>
        </ScrollView>
    </>)
}

const estilos = StyleSheet.create({
    backgroundColor:{
        flex: 1,
        backgroundColor: "#0000ff",
    }
})