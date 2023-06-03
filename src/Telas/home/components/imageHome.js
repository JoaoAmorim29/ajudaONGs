import React, {useEffect, useState} from "react";
import backgroundImage from '../../../assets/backgroundImage.jpg'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Width = Dimensions.get('screen').width;

export default function ImageHome(){

    const navigation = useNavigation();

    return (<>
        <View>
            <Image source={backgroundImage} style={estilos.imageHome}/>
            <View style={estilos.botaoLegenda}>
                <Text style={estilos.legenda}>Nos ajude a ajudar o mundo</Text>
                <TouchableOpacity style={estilos.botao} /*onPress={()=>{navigation.navigate('Menu')}}*/>
                    <Text style={estilos.textBotao}>Quero Ajudar</Text>
                </TouchableOpacity>
            </View>
        </View>
    </>)
}

const estilos = StyleSheet.create({
    imageHome: {
        width: '100%',
        height: 3456 / 3456 * Width,
    },
    botaoLegenda:{
        marginTop: 250,
        position: 'absolute',
        paddingHorizontal: 15,
    },
    legenda:{
        color: "#FFF",
        fontSize: 24,
        marginBottom: 5,
    },
    botao: {
        width: 200,
        height: 60,
        backgroundColor: '#0000ff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBotao: {
        color: "#fff",
        fontSize: 18,
        fontWeight: 500,
    }
})