function calcular(){
 let num = document.querySelector("#num").value
 let n = Number(num)
 let res = document.querySelector("#taboada")
 

if (num.value.length == 0){
    alert("Não existe tabuada de 0")
} else {
    res.innerHTML = '' // Limpa a tabuada anterior
    for (let c = 1; c <= 10; c++){
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n*c}`
      res.appendChild(item)
    } 
}
}