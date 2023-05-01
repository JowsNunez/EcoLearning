export const FACTOR_GASOLIONA=2180
export const FACTOR_ENERGIA=0.302




export function calcularGasolina(valor){
    return new Promise(resolve=>{
        if (valor < 0) {
            reject(new Error('El valor no debe ser menor a 0'));
          } else {
            const result =(FACTOR_GASOLIONA * valor)
            resolve(result);
          }
    })
}

export function calcularEnergia(valor){
    return new Promise((resolve,reject)=>{
        if (valor < 0) {
            reject(new Error('El valor no debe ser menor a 0'));
          } else {
            const result=  (FACTOR_ENERGIA * valor)
            resolve(result);
          }
    })
}