import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export function CadastroOng(){
    const navigation = useNavigation();

    return(<>
        <TouchableOpacity style={estilos.buttonOng} onPress={()=>{navigation.navigate("CadastroOng")}}>
            <Text style={estilos.textButtonOng}>Cadastrar ONG</Text>
        </TouchableOpacity>
    </>)
}

export function CadastroUsuario(){
    const navigation = useNavigation();
    
    return(<>
        <TouchableOpacity style={estilos.buttonUsuario} onPress={()=>{navigation.navigate("CadastroUsuario")}}>
            <Text style={estilos.textButtonUsuario}>Cadastre-se</Text>
        </TouchableOpacity>
    </>)
}

const estilos = StyleSheet.create({
    buttonOng: {
        backgroundColor: "#0000ff",
        width: 250,
        marginBottom: 10,
        alignItems: "center",
        paddingVertical: 15,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#fff",
    }, 
    textButtonOng: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold"
    },
    buttonUsuario: {
        width: 250,
        marginBottom: 10,
        alignItems: "center",
        paddingVertical: 15,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#0000ff",
    }, 
    textButtonUsuario: {
        fontSize: 18,
        color: "#0000ff",
        fontWeight: "bold"
    }
})