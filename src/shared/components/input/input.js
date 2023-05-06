import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = ({placeholder, name, onChangeText}) => {
    return <TextInput 
    style={estilos.input}
    placeholder={placeholder} 
    name={name} 
    onChangeText={onChangeText}/>
}

const estilos = StyleSheet.create({
    input:{
        backgroundColor: "#F6F6F6",
        height: 55,
        borderRadius: 12,
        paddingHorizontal: 14,
    }
})

export default Input;