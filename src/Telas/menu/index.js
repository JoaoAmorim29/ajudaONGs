import React from "react";
import { View } from "react-native";

import TopoMenu from "./components/topoMenu";
import ButtonsMenu from "./components/buttonsMenu";

export default function Menu(){
    return(<>
        <View>
            <TopoMenu/>
            <ButtonsMenu/>
        </View>
    </>)
}