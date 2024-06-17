let numeros = [1, 3, 5, 12, 14]
let numerosP = []
let numerosI = []

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 == 0){
        numerosP.push(numeros[i])
    }else
        numerosI.push(numeros[i])
}

numeros = [...numerosP, ...numerosI]

console.log(numeros)
