import React from "react";

function validateCNPJ(cnpj){
    let numeros = cnpj.split("-")[0]./*replace(/[.|\/]/g,'')*/replace(/[^\d]+/g,'')
    let digitos = cnpj.split("-")[1]

    if(getPrimeiroDigito(numeros) != digitos[0]){
        return false;
    } else if(getSegundoDigito(numeros  + '' + digitos[0]) != digitos[1]){
        return false;
    }
    return true;
}

function getPrimeiroDigito(numeros){
    let resultado = 0;
    let peso = 2;

    for(let i = numeros.length - 1; i >= 0; i--){
        resultado += numeros[i] * peso
        peso = (peso == 9 ? 2 : peso + 1)
    }
    
    let modulo = resultado % 11;
    resultado = (modulo < 2 ? 0 : 11 - modulo);

    return resultado;
}

function getSegundoDigito(numeros){
    let resultado = 0;
    let peso = 2;

    for(let i = numeros.length - 1; i >= 0; i--){
        resultado += numeros[i] * peso
        peso = (peso == 9 ? 2 : peso + 1)
    }
    
    let modulo = resultado % 11;
    resultado = (modulo < 2 ? 0 : 11 - modulo);

    return resultado;
}

export default validateCNPJ;