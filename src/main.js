import { calcularEner,calcularGas,factoirGasolina,factorEnergia } from "./calculadora/calculadora.js";


const btnCalcularEnergia = document.getElementById('calcular_energia')
const btnCalcularGasolina = document.getElementById('calcular_gasolina')
const inputFactorEnergia = document.getElementById('factor_energia')
const inputFactorGasolina= document.getElementById('factor_gasolina')
inputFactorEnergia.innerHTML="Factor de Energia: "+factorEnergia() + " kg CO2"
inputFactorGasolina.innerHTML="Factor de Gasolina: "+ factoirGasolina() +"kg Co2"


btnCalcularEnergia.addEventListener('click',(e)=>{
    calcularEner()
})
btnCalcularGasolina.addEventListener('click',(e)=>{
    calcularGas()
})