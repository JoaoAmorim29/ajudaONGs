import React, { useState } from "react";
import {StyleSheet, View, Text} from 'react-native';
import Input from "../../../shared/components/input/input";

export default function CamposLogin(){
    const [emailLogin, setEmailLogin] = useState('');
    const [senhaLogin, setSenhaLogin] = useState('');

    const loginData = {
        emailLogin: emailLogin,
        senhaLogin: senhaLogin,
    }

    return(<>
        <View style={estilos.campos}>
            <View>
                <Text style={estilos.label}>Email</Text>
                <Input 
                    placeholder="Ong123@email.com"
                    name="emailLogin"
                    onChangeText={text => setEmailLogin(text)}
                />
            </View>

            <View>
                <Text style={estilos.label}>Senha</Text>
                <Input 
                    placeholder="Digite sua senha"
                    name="senhaLogin"
                    onChangeText={text => setSenhaLogin(text)}
                />
            </View>
        </View>
    </>)
}

const estilos = StyleSheet.create({
    campos:{ 
        minHeight: 250,
        width: "100%",
        paddingHorizontal: 20,
        paddingBottom: 35,
        justifyContent: 'center'
    },
    label: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 15,
        marginBottom: 4,
        marginLeft: 5,
    },
})