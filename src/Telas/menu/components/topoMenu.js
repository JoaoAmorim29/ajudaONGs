import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function TopoMenu(){
    return(<>
        <View style={estilos.topoMenu}>
            <Text style={estilos.titulo}>Seja Bem-Vindo(a)</Text>
            <Text style={estilos.legenda}>Venha fazer parte e vamos juntos mudar o mundo!</Text>
        </View>
    </>)
}

const estilos = StyleSheet.create({
    topoMenu: {
        height: 200,
        width: "100%",
        backgroundColor: "#0000ff",
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    login:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    loginText:{
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 18,
    },
    titulo: {
        color: "#FFF",
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 100,
    },
    legenda: {
        color: "#F6F6F6",
        fontSize: 15,
        fontWeight: "bold",
    },
    loginImg: {
        width: 30,
        height: 30,
        marginTop: 2,
    }
})