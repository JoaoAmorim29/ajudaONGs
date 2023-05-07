import green from '../assets/green.png'
import grow from '../assets/grow.png'
import potager from '../assets/potager.png'
import salad from '../assets/salad.png'

const ongs = {
    titulo: 'ONGs',
    lista: [
        {
            id: 1,
            nome: 'ABCD',
            categoria: 'Erradiação da Pobreza',
            imagem : green,
        },
        {
            id: 2,
            nome: 'Associação Caminho',
            categoria: 'Redução de Desigualdades',
            imagem : grow,
        }, {
            id: 3,
            nome: 'Casa Azul',
            categoria: 'Vida na Água',
            imagem : potager,
        }, {
            id: 4,
            nome: 'Candido Ferreira',
            categoria: 'Erradiação da Pobreza',
            imagem : salad,
        }
    ],
}

export default ongs;