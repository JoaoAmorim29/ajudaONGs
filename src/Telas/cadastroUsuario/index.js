import React from "react";
import { View, StyleSheet, ScrollView } from "react-native"
import TopoCadastroUsuario from "./components/topoCadastroUsuario";
import CamposUsuario from "./components/camposUsuario";
import ButtonCadastroUsuario from "./components/button";

export default function CadastroUsuario(){
    return(<>
        <ScrollView style={estilos.backgroundColor}>
            <TopoCadastroUsuario/>
            <CamposUsuario/>
            <ButtonCadastroUsuario/>
        </ScrollView>
    </>)
}

const estilos = StyleSheet.create({
    backgroundColor:{
        flex: 1,
        backgroundColor: "#0000ff",
    }
})