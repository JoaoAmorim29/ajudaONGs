import React, { useState } from "react";
import {StyleSheet, View, Text, Alert} from 'react-native';
import Input from "../../../shared/components/input/input";
import ButtonCadastroUsuario from "./button";
import api from "../../../services/apiOngs";
import { useNavigation } from '@react-navigation/native';

export default function CamposUsuario(){
    const navigation = useNavigation();

    const [nomeUsuario, setNomeUsuario] = useState('');
    const [emailUsuario, setEmailUsuario] = useState('');
    const [senhaUsuario, setSenhaUsuario] = useState('');
    const [confirmeSenhaUsuario, setConfirmeSenhaUsuario] = useState('');
    const [contatoUsuario, setContatoUsuario] = useState('');

    const usuarioData = {
        key: Math.random() * 999,
        nome: nomeUsuario,
        email: emailUsuario,
        senha: senhaUsuario,
        contato: contatoUsuario,
    }

    async function CadastrarUsuario(){
        try{
            const response = await api.post(`/users`, usuarioData);
        }catch(error){
            console.log(error);
        }
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
                    secureTextEntry={true}
                    name="senhaUsuario"
                    onChangeText={text => setSenhaUsuario(text)}
                />
            </View>

            <View>
                <Text style={estilos.label}>Confirme sua senha</Text>
                <Input 
                    placeholder="Digite sua senha novamente"
                    secureTextEntry={true}
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

            <ButtonCadastroUsuario onPress={() => {
            CadastrarUsuario();
            Alert.alert("Usuário cadastrado")
            navigation.navigate('LoginRotas');
        }}  key={ Math.random() * 999}/>
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