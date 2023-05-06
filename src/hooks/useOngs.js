import { useState, useEffect } from "react";
import { carregaOngs } from "../serviços/carregaDados";

export default function useOngs(){
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const retorno = carregaOngs();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    }, []);

    return [titulo, lista];
}