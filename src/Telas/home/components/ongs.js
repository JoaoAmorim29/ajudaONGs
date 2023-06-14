import React, {useContext} from "react";
import { FlatList, StyleSheet, Text} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Ong from "./ong";
import ongs from "../../../mocks/ongs";

export default function Ongs({Topo, ImageHome}){


    const TopoLista = () => {
        return (<>
            <Topo/>
            <ImageHome/>
            <Text style={estilos.TopoLista}>{ongs.titulo}</Text>
        </>)
    }


    const navigation = useNavigation();

    return (<FlatList
        data={ongs.lista}
        renderItem={({item}) => 
            <Ong {...item} onPress={()=>{navigation.navigate("DetalhesOng", item)}}/>
        }
        ListHeaderComponent={TopoLista}
        keyExtractor={({id}) => id}
    />)
}


const estilos = StyleSheet.create({
    TopoLista: {
        fontSize: 20,
        paddingHorizontal: 15,
        paddingVertical: 8,
        fontWeight: 'bold',
        color: "#000"
    }
})