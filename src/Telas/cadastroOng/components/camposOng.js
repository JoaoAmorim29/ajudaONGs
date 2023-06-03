import React, { useState, useContext } from "react";
import {StyleSheet, View, Text} from 'react-native';
import Input from "../../../shared/components/input/input";
import ButtonCadastroOng from "./button";
import OngsContext from "../../../context/ongsContext";


export default function CamposOng(){
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
    const [contatoOng1, setContatoOng1] = useState('');
    const [contatoOng2, setContatoOng2] = useState('');
    const [urlOng, setUrlOng] = useState('');
    const [descricaoOng, setDescricaoOng] = useState('');
    const [imagemOng, setImagemOng] = useState('');

    const {dispatch} = useContext(OngsContext);

    const ongData = {
        nome: nomeOng,
        email: emailOng,
        categoria: categoriaOng,
        senha: senhaOng,
        confirmeSenha: confirmeSenhaOng,
        endereco: {
            estado: estadoOng,
            cidade: cidadeOng,
            cep: cepOng,
            bairro: bairroOng,
            rua: ruaOng,
            numero: numeroOng,
            complemento: complementoOng
        },
        contato1: contatoOng1,
        contato2: contatoOng2,
        url: urlOng,
        descricao: descricaoOng,
        imagem: imagemOng,

    }

    return(<>
        <View style={estilos.campos}>
            <View>
                <Text style={estilos.label}>Nome Ong</Text>
                <Input 
                    placeholder="Digite o nome da Ong"
                    name='nomeOng'
                    onChangeText={text => setNomeOng(text)}
                />
            </View>

            <View>
                <Text style={estilos.label}>Email</Text>
                <Input 
                    placeholder="Ong123@email.com"
                    name="emailOng"
                    onChangeText={text => setEmailOng(text)}
                />
            </View>

            <View>
                <Text style={estilos.label}>Categoria</Text>
                <Input 
                    placeholder="Erradiação de pobreza, Vida na Água..."
                    name='categoriaOng'
                    onChangeText={text => setCategoriaOng(text)}
                />
            </View>

            <View>
                <Text style={estilos.label}>Crie um senha</Text>
                <Input 
                    placeholder="Digite uma senha"
                    name="senhaOng"
                    onChangeText={text => setSenhaOng(text)}
                />
            </View>

            <View>
                <Text style={estilos.label}>Confirme sua senha</Text>
                <Input 
                    placeholder="Digite sua senha novamente"
                    name="confirmeSenhaOng"
                    onChangeText={text => setConfirmeSenhaOng(text)}
                />
            </View>

            <View>
                <Text style={estilos.label}>Estado</Text>
                <Input 
                    placeholder="Pará, Maranhão, São Paulo..."
                    name="estadoOng"
                    onChangeText={text => setEstadoOng(text)}
                />
            </View>

            <View>
                <Text style={estilos.label}>Cidade</Text>
                <Input 
                    placeholder="Ananindeua, Belém, Castanhal..."
                    name="cidadeOng"
                    onChangeText={text => setCidadeOng(text)}
                />
            </View>

            <View>
                <Text style={estilos.label}>CEP</Text>
                <Input 
                    placeholder="XXXXX-XXX"
                    name="cepOng"
                    onChangeText={text => setCepOng(text)}
                />
            </View>

            <View>
                <Text style={estilos.label}>Bairro</Text>
                <Input 
                    placeholder="Digite seu bairro"
                    name="barroOng"
                    onChangeText={text => setBairroOng(text)}
                />
            </View>

            <View>
                <Text style={estilos.label}>Rua</Text>
                <Input 
                    placeholder="Digite sua rua"
                    name="ruaOng"
                    onChangeText={text => setRuaOng(text)}
                />
            </View>

            <View>
                <Text style={estilos.label}>Número</Text>
                <Input 
                    placeholder="Número do local"
                    name="numeroOng"
                    onChangeText={text => setNumeroOng(text)}
                />
            </View>

            <View>
                <Text style={estilos.label}>Complemento (opcional)</Text>
                <Input 
                    placeholder="Complemento"
                    name="ComplementoOng"
                    onChangeText={text => setComplementoOng(text)}
                />
            </View>

            <View>
                <Text style={estilos.label}>Contato (1)</Text>
                <Input 
                    placeholder="(XX) 99999-9999"
                    name="contatoOng1"
                    onChangeText={text => setContatoOng1(text)}
                />
            </View>

            <View>
                <Text style={estilos.label}>Contato (2)</Text>
                <Input 
                    placeholder="(XX) 99999-9999"
                    name="contatoOng2"
                    onChangeText={text => setContatoOng2(text)}
                />
            </View>

            <View>
                <Text style={estilos.label}>Site (opcional)</Text>
                <Input 
                    placeholder="(XX) 99999-9999"
                    name="urlOng"
                    onChangeText={text => setUrlOng(text)}
                />
            </View>

            <View>
                <Text style={estilos.label}>Avatar</Text>
                <Input 
                    placeholder="url"
                    name="imagemOng"
                    onChangeText={text => setUrlOng(text)}
                />
            </View>
            
            <View>
                <Text style={estilos.label}>Descrição (opcional)</Text>
                <Input 
                    name="descricaoOng"
                    onChangeText={text => setDescricaoOng(text)}
                />
            </View>
        </View>

        <ButtonCadastroOng onPress={() => {
            dispatch({
                type: 'createOng',
                payload: ongData, 
            })
            console.log(ongData)
        }}/>
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