let valores = []

function adicionar() {
    let n = document.querySelector('#num').value
    let opt = document.querySelector('#sel') 

    
    if (n.length === 0) {
        alert("Digite um número")
    } else if (n < 1 || n > 100){
        alert("Digite um número entre 1 e 100")
    } else {
        valores.push(Number(n))
        document.querySelector('#relatorio').innerHTML = ''
        
        for(let c = 1; c <= 100; c++){
            let item = document.createElement('option')
            item.text = `Valor ${n} adicionado.`
            opt.appendChild(item)
            break
        }
    }
}

function resolver() {
    let res = document.querySelector('#relatorio')
    if (valores.length === 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) maior = valores[pos]
            if (valores[pos] < menor) menor = valores[pos]
        }
        media = soma / tot
        
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}
