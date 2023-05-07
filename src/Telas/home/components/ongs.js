import React, {useContext} from "react";
import { FlatList, StyleSheet, Text} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Ong from "./ong";
import OngsContext from "../../../context/ongsContext";


export default function Ongs({Topo, ImageHome}){

    const {state} = useContext(OngsContext)

    const TopoLista = () => {
        return (<>
            <Topo/>
            <ImageHome/>
            <Text style={estilos.TopoLista}>{state.ongs.titulo}</Text>
        </>)
    }


    const navigation = useNavigation();

    return (<FlatList
        data={state.ongs.lista}
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