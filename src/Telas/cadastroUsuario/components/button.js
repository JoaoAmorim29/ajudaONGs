import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ButtonCadastroUsuario(){
    return(<>
        <View style={estilos.viewButton}>
            <TouchableOpacity style={estilos.buttonUsuario}>
                <Text style={estilos.textButtonUsuario}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    </>)
}


const estilos = StyleSheet.create({
    viewButton: {
        alignItems: 'center',
        marginTop: 10,
    },
    buttonUsuario: {
        backgroundColor: "#00b8a9",
        width: 250,
        alignItems: "center",
        paddingVertical: 15,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#fff",
    }, 
    textButtonUsuario: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold"
    }
})