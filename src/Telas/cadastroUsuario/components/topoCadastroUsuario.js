import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import seta from "../../../assets/seta-direita.png"

export default function TopoCadastroUsuario(){
    return(<>
        <View style={estilos.topoCadastro}>

            <Text style={estilos.titulo}>Cadastre-se</Text>
        </View>
    </>)
}

const estilos = StyleSheet.create({
    topoCadastro: {
        height: 140,
        width: "100%",
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    forgotPassword:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    forgotPasswordText:{
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 18,
    },
    forgotPasswordImg: {
        width: 30,
        height: 30,
        marginTop: 2,
    },
    titulo: {
        color: "#FFF",
        fontSize: 23,
        fontWeight: "bold",
        marginTop: 60,
        textAlign: "center",
    },
})