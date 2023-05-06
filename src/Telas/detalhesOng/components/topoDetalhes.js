import React from "react";
import { Image, View, Text, StyleSheet,  Dimensions} from "react-native";
import detalhesIMG from "../../../assets/detalhes-ong.jpg"

const Width = Dimensions.get('screen').width;

export default function TopoDetalhes(){
    return(<>
        <View>
            <Image source={detalhesIMG} style={estilos.detalhesIMG}/>
            {/*<Text style={estilos.textTopo}>Detalhes da Ong</Text>*/}
        </View>
    </>)
}

const estilos = StyleSheet.create({
    detalhesIMG: {
        width: "100%",
        height: 665 / 1000 * Width,
    },/*
    textTopo:{
        color: "#000",
        position: "absolute",
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 130,
    }*/
})