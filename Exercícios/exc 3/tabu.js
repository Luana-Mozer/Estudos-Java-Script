function calcular(){
 let n = document.querySelector("#num").value
 let res = document.querySelector("#taboada")
 

if (n == Number(0) || n === ""){
    alert("Não existe tabuada de 0")
} switch (true){
    case n == Number(1):
        res.textContent(`${taboada1}`)
        break;
}1
}