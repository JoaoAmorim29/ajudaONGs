import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = ({placeholder, secureTextEntry, name, onChangeText}) => {
    return <TextInput 
    style={estilos.input}
    placeholder={placeholder} 
    secureTextEntry={secureTextEntry}
    name={name} 
    onChangeText={onChangeText}
    placeholderTextColor="gray"/>
}

const estilos = StyleSheet.create({
    input:{
        backgroundColor: "#F6F6F6",
        height: 55,
        borderRadius: 12,
        paddingHorizontal: 14,
        color: "#000",
    }
})

export default Input;