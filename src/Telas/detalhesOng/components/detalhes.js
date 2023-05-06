import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import potager from '../../../assets/potager.png'

export default function Detalhes({nome, categoria, imagem}){
    return(<>
        <View style={estilos.componente}>
            <Text style={estilos.titulo}>Detalhes da Ong</Text>
            <View style={estilos.imageNomeDiv}>
                <Image source={imagem} style={estilos.image}/>
                <Text style={estilos.nome}>{nome}</Text>
            </View>
            <Text style={estilos.categoria}>{categoria}</Text>
            <Text style={estilos.contato}>(XXX) 9XXXX-XXXX</Text>
            <Text style={estilos.contato}>Email: Ong123@email.com</Text>
            <Text style={estilos.descricao}>
                Suspendisse facilisis vestibulum ipsum, et pretium
                sapien accumsan ac. Morbi sit amet sem luctus, viverra est vitae, 
                tincidunt libero. Mauris facilisis neque quis mauris congue auctor.
            </Text>
        </View>
    </>)
}

const estilos = StyleSheet.create({
    componente: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: "100%",
        minHeight: 20,
    }, 
    titulo: {
        color: "#000000",
        fontWeight: 'bold',
        fontSize: 20,
    },
    imageNomeDiv:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12,
    },
    image:{
        height: 48,
        width: 48,
        marginRight: 8,
        borderRadius: 5,
    },
    nome:{
        color: "#808080",
        fontWeight: "bold",
    },
    contato: {
        color: "#808080",
        marginVertical: 5,
    }, 
    descricao: {
        color: "#808080",
        marginVertical: 5,
    },
    categoria:{
        color: "#808080",
        marginVertical: 5,
    }
})