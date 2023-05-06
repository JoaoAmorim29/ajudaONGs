import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ButtonLogin(){
    return(<>
        <View style={estilos.viewButton}>
            <TouchableOpacity style={estilos.buttonLogin}>
                <Text style={estilos.textButtonLogin}>Entrar</Text>
            </TouchableOpacity>
        </View>
    </>)
}


const estilos = StyleSheet.create({
    viewButton: {
        alignItems: 'center',
    },
    buttonLogin: {
        backgroundColor: "#00b8a9",
        width: 250,
        alignItems: "center",
        paddingVertical: 15,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#fff",
    }, 
    textButtonLogin: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold"
    }
})