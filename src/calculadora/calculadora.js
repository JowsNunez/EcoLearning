/// <reference path="./types.d.ts"
import { calcularEnergia, calcularGasolina,FACTOR_ENERGIA,FACTOR_GASOLIONA } from "./constant.js"



export function calcularGas() {
    const valorGasolina = document.getElementById('valor_gasolina').value
    const resuladoGasolina = document.getElementById('resultado_gasolina')

    calcularGasolina(valorGasolina).then(result => {
        
        resuladoGasolina.value = result
        
    }).catch(err => {
        alert(err)

    })
}

export function calcularEner() {
    const valorEnergia = document.getElementById('valor_energia').value
    const resuladoEnergia = document.getElementById('resultado_energia')

    calcularEnergia(valorEnergia).then(result => {
        resuladoEnergia.value = result
    }).catch(err => {
        alert(err)
    })
}

export function factorEnergia(){
    return FACTOR_ENERGIA
}
export function factoirGasolina(){
    return FACTOR_GASOLIONA
}