import { useState, useEffect } from "react";
import { carregaImageHome } from "../serviços/carregaDados";

export default function useImageHome(){
    const [legenda, setLegenda] = useState('');
    const [textBotao, setTextBotao] = useState('');

    useEffect(()=>{
        const retorno = carregaImageHome();
        setLegenda(retorno.legenda);
        setTextBotao(retorno.textBotao);
    }, []);

    return [legenda, textBotao];
}