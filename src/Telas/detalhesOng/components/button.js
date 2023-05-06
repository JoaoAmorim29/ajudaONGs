import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ButtonDetalhes(){
    return(<>
        <View style={estilos.buttonDiv}>
            <TouchableOpacity style={estilos.button}>
                <Text style={estilos.textButton}>Entrar em contato</Text>
            </TouchableOpacity>
        </View>
    </>)
}

const estilos = StyleSheet.create({
    buttonDiv:{
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    button: {
        width: "100%",
        height: 50,
        backgroundColor: "#0000ff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    textButton: {
        color: "#fff",
        fontWeight: 'bold',
    }
})