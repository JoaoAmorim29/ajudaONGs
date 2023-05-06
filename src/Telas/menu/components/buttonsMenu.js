import React from "react";
import { StyleSheet, View } from "react-native";
import { CadastroOng } from "./buttons";
import { CadastroUsuario } from "./buttons";

export default function ButtonsMenu(){
    return(<>
        <View style={estilos.backgroundColorBlue}>
            <View style={estilos.buttons}>
                <CadastroOng/>
                <CadastroUsuario/>
            </View>
        </View>
    </>)
}

const estilos = StyleSheet.create({
    backgroundColorBlue:{
        backgroundColor: "#0000FF",
        minHeight: 400,
        width: "100%",
    },
    buttons:{
        backgroundColor: "#FFF",
        height: "100%",
        borderTopEndRadius: 40,
        borderTopStartRadius: 40,
        paddingHorizontal: 12,
        paddingTop: 120,
        alignItems: "center",
    }
})