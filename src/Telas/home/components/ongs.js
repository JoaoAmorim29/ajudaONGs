import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import useOngs from "../../../hooks/useOngs";
import { useNavigation } from '@react-navigation/native';
import Ong from "./ong";


export default function Ongs({Topo, ImageHome}){

    const [titulo, lista] = useOngs();

    const TopoLista = () => {
        return (<>
            <Topo/>
            <ImageHome/>
            <Text style={estilos.TopoLista}>{titulo}</Text>
        </>)
    }

    const navigation = useNavigation();

    return (<FlatList
        data={lista}
        renderItem={({item}) => 
        <Ong {...item} onPress={()=>{navigation.navigate("DetalhesOng", item)}}/>
        }
        ListHeaderComponent={TopoLista}
        keyExtractor={({nome}) => nome}
    />)
}
console.log(Ong)
const estilos = StyleSheet.create({
    TopoLista: {
        fontSize: 20,
        paddingHorizontal: 15,
        paddingVertical: 8,
        fontWeight: 'bold',
        color: "#000"
    }
})