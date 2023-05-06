import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import seta from "../../../assets/seta-direita.png";
import { useNavigation } from '@react-navigation/native';

export default function TopoMenu(){
    const navigation = useNavigation();

    return(<>
        <View style={estilos.topoMenu}>
            <TouchableOpacity style={estilos.login} onPress={()=>{navigation.navigate('Login')}}>
                <Text style={estilos.loginText}>Sign In</Text>
                <Image source={seta} style={estilos.loginImg}/>
            </TouchableOpacity>
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
        marginTop: 70,
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