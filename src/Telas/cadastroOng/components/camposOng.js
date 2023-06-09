import React, { useState, useContext } from "react";
import {StyleSheet, View, Text, Image, Alert, TextInput} from 'react-native';
import Input from "../../../shared/components/input/input";
import ButtonCadastroOng from "./button";
import JusticeLeague from "../../../assets/justiceLeague.png"
import { useNavigation } from '@react-navigation/native';
import apiCep from "../../../services/apiCep";
import api from "../../../services/apiOngs";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import axios from "axios";

export default function CamposOng(){
    const navigation = useNavigation();

    const [nomeOng, setNomeOng] = useState('');
    const [emailOng, setEmailOng] = useState('');
    const [categoriaOng, setCategoriaOng] = useState('');
    const [senhaOng, setSenhaOng] = useState('');
    const [confirmeSenhaOng, setConfirmeSenhaOng] = useState('');
    const [estadoOng, setEstadoOng] = useState('');
    const [cidadeOng, setCidadeOng] = useState('');
    const [cepOng, setCepOng] = useState('');
    const [bairroOng, setBairroOng] = useState('');
    const [ruaOng, setRuaOng] = useState('');
    const [numeroOng, setNumeroOng] = useState('');
    const [complementoOng, setComplementoOng] = useState('');
    const [contatoOng, setContatoOng] = useState('');
    const [urlOng, setUrlOng] = useState('');
    const [descricaoOng, setDescricaoOng] = useState('');
    const [imagemOng, setImagemOng] = useState(JusticeLeague);

    const ongData = {
        key: Math.random() * 999,
        nome: nomeOng,
        email: emailOng,
        categoria: categoriaOng,
        senha: senhaOng,
        endereco: {
            estado: estadoOng,
            cidade: cidadeOng,
            cep: cepOng,
            bairro: bairroOng,
            rua: ruaOng,
            numero: numeroOng,
            complemento: complementoOng
        },
        contato: contatoOng,
        url: urlOng,
        descricao: descricaoOng,
        imagem: imagemOng,

    }


    async function CadastrarOng(){
        try{
            const response = await api.post(`/ongs`, ongData);
        }catch(error){
            console.log(error);
        }
    }


    async function BuscarCep(){
        try{
            const response = await apiCep.get(`${cepOng}/json/`);
            setCepOng(response.data.cep)
            setBairroOng(response.data.bairro);
            setEstadoOng(response.data.uf);
            setCidadeOng(response.data.localidade)
        }catch(error){
            console.log('ERRO' + error);
        }

    }


    /* INFORMANDO SE HÁ ALGUM ERRO NO CAMPO DO CNPJ */
    function validateCnpjError(cnpj){

        let CNPJ = cnpj

        if(validateCNPJ(CNPJ) === true){
            setCod(CNPJ)
            console.log(validateCNPJ(CNPJ))
        } else if(validateCNPJ(CNPJ) === false){
            setError("cod", {type: 'custom', message: 'CNPJ inválido'})
            console.log(validateCNPJ(CNPJ))
        }
    }

    const Schema = yup.object().shape({
        emailOng: yup.string().required('Email é obrigatório'),
        categoria: yup.string().required('Categoria é obrigatória'),
        contato: yup.number().required('Número pra contato é obrigatório'),
        url: yup.string(''),
        imagem: yup.string(''),
        senha: yup.string('').required('Senha é obrigatória'),
        nomeOng: yup.string().required(''),
        cepOng: yup.string().required('CEP é obrigatório.'),
        descricaoOng: yup.string().required('Descrição é obrigatória.'),
        estadoOng: yup.string().required('Estado é obrigatório.'),
        cidadeOng: yup.string().required('Cidade é obrigatória.'),
        enderecoOng: yup.string().required('Endereço é obrigatório.'),
        bairroOng: yup.string().required('Bairro é obrigatório.'),
        numeroOng: yup.string().required('Número é obrigatório.'),
        complementoOng: yup.string(),
        ruaOng: yup.string().required('Rua é obrigatória.')
    })

    const { register, handleSubmit, setError, formState: { errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(Schema)
    })

    return(<>
        <View style={estilos.campos} >
            <View>
                <Text style={estilos.label}>Nome Ong</Text>
                <Input 
                    placeholder="Digite o nome da Ong"
                    name='nomeOng'
                    onChangeText={text => setNomeOng(text)}
                    value={nomeOng}
                />
            </View>

            <View>
                <Text style={estilos.label}>Email</Text>
                <Input 
                    placeholder="Ong123@email.com"
                    name="emailOng"
                    onChangeText={text => setEmailOng(text)}
                    value={emailOng}
                />
            </View>

            <View>
                <Text style={estilos.label}>Categoria</Text>
                <Input 
                    placeholder="Erradiação de pobreza, Vida na Água..."
                    name='categoriaOng'
                    value={categoriaOng}
                    onChangeText={text => setCategoriaOng(text)}
                />
            </View>

            <View>
                <Text style={estilos.label}>Crie um senha</Text>
                <Input 
                    placeholder="Digite uma senha"
                    name="senhaOng"
                    secureTextEntry={true}
                    onChangeText={text => setSenhaOng(text)}
                    value={senhaOng}
                />
            </View>

            <View>
                <Text style={estilos.label}>Confirme sua senha</Text>
                <Input 
                    placeholder="Digite sua senha novamente"
                    name="confirmeSenhaOng"
                    secureTextEntry={true}
                    onChangeText={text => setConfirmeSenhaOng(text)}
                    value={confirmeSenhaOng}
                />
            </View>

            <View>
                <Text style={estilos.label}>CEP</Text>
                <Input
                    placeholder="XXXXX-XXX"
                    name="cepOng"
                    onChangeText={text => setCepOng(text)}
                    onFocus={()=>console.log("focado")}
                    onBlur={()=> BuscarCep()}
                    value={cepOng}
                />
            </View>

            <View>
                <Text style={estilos.label}>Estado</Text>
                <Input 
                    placeholder="Pará, Maranhão, São Paulo..."
                    name="estadoOng"
                    onChangeText={text => setEstadoOng(text)}
                    value={estadoOng}
                />
            </View>

            <View>
                <Text style={estilos.label}>Cidade</Text>
                <Input 
                    placeholder="Ananindeua, Belém, Castanhal..."
                    name="cidadeOng"
                    onChangeText={text => setCidadeOng(text)}
                    value={cidadeOng}
                />
            </View>

            <View>
                <Text style={estilos.label}>Bairro</Text>
                <Input 
                    placeholder="Digite seu bairro"
                    name="bairroOng"
                    onChangeText={text => setBairroOng(text)}
                    value={bairroOng}
                />
            </View>

            <View>
                <Text style={estilos.label}>Rua</Text>
                <Input 
                    placeholder="Digite sua rua"
                    name="ruaOng"
                    onChangeText={text => setRuaOng(text)}
                    value={ruaOng}
                />
            </View>

            <View>
                <Text style={estilos.label}>Número</Text>
                <Input 
                    placeholder="Número do local"
                    name="numeroOng"
                    onChangeText={text => setNumeroOng(text)}
                    value={numeroOng}
                />
            </View>

            <View>
                <Text style={estilos.label}>Complemento (opcional)</Text>
                <Input 
                    placeholder="Complemento"
                    name="ComplementoOng"
                    onChangeText={text => setComplementoOng(text)}
                    value={complementoOng}
                />
            </View>

            <View>
                <Text style={estilos.label}>Contato (1)</Text>
                <Input 
                    placeholder="(XX) 99999-9999"
                    name="contatoOng"
                    onChangeText={text => setContatoOng(text)}
                    value={contatoOng}
                />
            </View>

            <View>
                <Text style={estilos.label}>Site (opcional)</Text>
                <Input 
                    placeholder="(XX) 99999-9999"
                    name="urlOng"
                    onChangeText={text => setUrlOng(text)}
                    value={urlOng}
                />
            </View>

            <View>
                <Text style={estilos.label}>Avatar</Text>
                <Input 
                    placeholder="url"
                    name="imagemOng"
                    onChangeText={text => setImagemOng(text)}
                    value={imagemOng}
                />
            </View>
            
            <View>
                <Text style={estilos.label}>Descrição (opcional)</Text>
                <Input 
                    name="descricaoOng"
                    onChangeText={text => setDescricaoOng(text)}
                    value={descricaoOng}
                />
            </View>
        </View>

        <ButtonCadastroOng onPress={() => {
            CadastrarOng();
            //ongs.lista.push(ongData);
            Alert.alert("Cadastrado com sucesso");
            navigation.navigate('LoginRotas');
            
        }}  key={ Math.random() * 999}/>
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
    campoDescription:{
        backgroundColor: "#F6F6F6",
        height: 150,
        borderRadius: 12,
        paddingHorizontal: 14,
    }
})