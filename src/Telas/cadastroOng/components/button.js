import React, { useContext , useState} from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ong from "../../home/components/ong";

export default function ButtonCadastroOng({onPress}){

    return(<>
        <View style={estilos.viewButton}>
            <TouchableOpacity style={estilos.buttonOng} onPress={onPress}>
                <Text style={estilos.textButtonOng}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    </>)
}


const estilos = StyleSheet.create({
    viewButton: {
        alignItems: 'center',
        marginTop: 10,
    },
    buttonOng: {
        backgroundColor: "#00b8a9",
        width: 250,
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
    }
})