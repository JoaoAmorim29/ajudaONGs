import React from "react";
import { View, StyleSheet, ScrollView } from "react-native"
import TopoCadastroOng from "./components/topoCadastroOng";
import CamposOng from "./components/camposOng";

export default function CadastroOng(){
    return(<>
        <ScrollView style={estilos.backgroundColor}>
            <TopoCadastroOng/>
            <CamposOng/>
        </ScrollView>
    </>)
}

const estilos = StyleSheet.create({
    backgroundColor:{
        flex: 1,
        backgroundColor: "#0000ff",
    }
})