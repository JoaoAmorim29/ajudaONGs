import React from "react";
import TopoDetalhes from "./components/topoDetalhes";
import Detalhes from "./components/detalhes";
import ButtonDetalhes from "./components/button";
import { ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function DetalhesOng(){
    const rout = useRoute();
    console.log(rout)

    return(<>
        <ScrollView>
            <TopoDetalhes/>
            <Detalhes {...rout.params}/>
            <ButtonDetalhes/>
        </ScrollView>
    </>)
}