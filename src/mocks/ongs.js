import green from '../assets/green.png'
import grow from '../assets/grow.png'
import potager from '../assets/potager.png'
import salad from '../assets/salad.png'

const ongs = {
    titulo: 'ONGs',
    lista: [
        {
            key: 1,
            nome: 'ABCD',
            categoria: 'Erradiação da Pobreza',
            senha: '123',
            endereco: {
                estado: "e",
                cidade: "c",
                cep: "c",
                bairro: "b",
                rua: "r",
                numero: "n",
                complemento: "c"
            },
            contato1: '12',
            url: 'url',
            descricao: 'descricao',
            imagem : green,
        },
        {
            key: 2,
            nome: 'Associação Caminho',
            email: 'email@gmail.com',
            categoria: 'Redução de Desigualdades',
            senha: '123',
            endereco: {
                estado: "e",
                cidade: "c",
                cep: "c",
                bairro: "b",
                rua: "r",
                numero: "n",
                complemento: "c"
            },
            contato1: '12',
            url: 'url',
            descricao: 'descricao',
            imagem : grow,
        }, {
            key: 3,
            nome: 'Casa Azul',
            email: 'email@gmail.com',
            categoria: 'Vida na Água',
            senha: '123',
            endereco: {
                estado: "e",
                cidade: "c",
                cep: "c",
                bairro: "b",
                rua: "r",
                numero: "n",
                complemento: "c"
            },
            contato1: '12',
            url: 'url',
            descricao: 'descricao',
            imagem : potager,
        }, {
            key: 4,
            nome: 'Candido Ferreira',
            email: 'email@gmail.com',
            categoria: 'Erradiação da Pobreza',
            senha: '123',
            endereco: {
                estado: "e",
                cidade: "c",
                cep: "c",
                bairro: "b",
                rua: "r",
                numero: "n",
                complemento: "c"
            },
            contato1: '12',
            url: 'url',
            descricao: 'descricao',
            imagem : salad,
        },
    ],
}

export default ongs;