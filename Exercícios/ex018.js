function verificar(n){
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}
let resp = verificar(5)
console.log(resp)

function soma(n1 , n2){
    let somagem = n1 + n2
    return somagem
}
console.log(soma(2,2))

function seuNome(no1 , no2){
    let nomeCompleto = no1 + no2
  return nomeCompleto
}
console.log(seuNome('Joao' , 'Oliveira'))

let V = function(x){
    return x * 2
}
console.log(V(2))