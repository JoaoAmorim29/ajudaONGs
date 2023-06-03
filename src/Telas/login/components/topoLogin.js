import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import seta from "../../../assets/seta-direita.png";
import { useNavigation } from '@react-navigation/native';

export default function TopoCadastroUsuario(){
    const navigation = useNavigation();

    return(<>
        <View style={estilos.topoCadastro}>
            <TouchableOpacity style={estilos.forgotPassword} onPress={()=>{navigation.navigate('MenuRotas')}}>
                <Text style={estilos.forgotPasswordText}>Cadastrar</Text>
                <Image source={seta} style={estilos.forgotPasswordImg}/>
            </TouchableOpacity>

            <Text style={estilos.titulo}>Faça seu Login</Text>
        </View>
    </>)
}

const estilos = StyleSheet.create({
    topoCadastro: {
        height: 220,
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
        marginTop: 120,
        textAlign: "center",
    },
})