import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function Ong({nome, categoria, imagem, onPress}){

    return <TouchableOpacity 
            style={estilos.card}
            onPress={onPress}
            >
                <Image source={imagem} style={estilos.imagemCard}/>
                <View style={estilos.informacoes}>
                    <Text style={estilos.nomeCard}>{nome}</Text>
                    <Text style={estilos.categoriaCard}>{categoria}</Text>
                </View>
        </TouchableOpacity>
}


const estilos = StyleSheet.create({
    card:{
        backgroundColor: "#f6f6f6",
        flexDirection: "row",
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 10,

        //Android: sombra
        elevation: 4,

        //IOS: sombra
        shadowColor: "#000",
        shadowOffSet: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    imagemCard:{
        width: 60,
        height: 60,
        marginVertical: 12,
        marginHorizontal: 12,
    },
    nomeCard:{
        fontSize: 16,
        color: "#000",
        fontWeight: "bold",
    },
    categoriaCard:{
        fontWeight: "bold",
    },
    informacoes:{
        justifyContent: "center",
    }
})
