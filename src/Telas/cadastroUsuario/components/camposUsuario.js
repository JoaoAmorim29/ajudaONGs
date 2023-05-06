import React, { useState } from "react";
import {StyleSheet, View, Text} from 'react-native';
import Input from "../../../shared/components/input/input";

export default function CamposUsuario(){
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [emailUsuario, setEmailUsuario] = useState('');
    const [senhaUsuario, setSenhaUsuario] = useState('');
    const [confirmeSenhaUsuario, setConfirmeSenhaUsuario] = useState('');
    const [contatoUsuario, setContatoUsuario] = useState('');

    const usuarioData = {
        nomeUsuario: nomeUsuario,
        emailUsuario: emailUsuario,
        senhaUsuario: senhaUsuario,
        confirmeSenhaUsuario: confirmeSenhaUsuario,
        contatoUsuario: contatoUsuario,
    }


    return(<>
        <View style={estilos.campos}>
            <View>
                <Text style={estilos.label}>Nome</Text>
                <Input
                    placeholder="Digite o nome da Ong"
                    name="nomeUsuario"
                    onChangeText={text => setNomeUsuario(text)}
                />
            </View>

            <View>
                <Text style={estilos.label}>Email</Text>
                <Input 
                    placeholder="Ong123@email.com"
                    name="emailUsuario"
                    onChangeText={text => setEmailUsuario(text)}
                />
            </View>

            <View>
                <Text style={estilos.label}>Crie um senha</Text>
                <Input 
                    placeholder="Digite uma senha"
                    name="senhaUsuario"
                    onChangeText={text => setSenhaUsuario(text)}
                />
            </View>

            <View>
                <Text style={estilos.label}>Confirme sua senha</Text>
                <Input 
                    placeholder="Digite sua senha novamente"
                    name="confirmeSenhaUsuario"
                    onChangeText={text => setConfirmeSenhaUsuario(text)}
                />
            </View>

            <View>
                <Text style={estilos.label}>Contato</Text>
                <Input 
                    placeholder="(XX) 99999-9999"
                    name="contatoUsuario"
                    onChangeText={text => setContatoUsuario(text)}
                />
            </View>
        </View>
    </>)
}

const estilos = StyleSheet.create({
    campos:{ 
        minHeight: 450,
        width: "100%",
        paddingHorizontal: 20,
        paddingBottom: 35,
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