function resolver() {

 let inicio = document.querySelector("input#frist").value
 let fim = document.querySelector("input#finish").value
 let pule = document.querySelector("input#jump").value
 let resultado = document.querySelector("div#resp")


if (inicio === "" || fim === "") {
    resultado.textContent = "Não é possivel contar";
    return;
}
if (pule == 0) {
    alert("Não é possível pular usando o número 0");
    return;
}
if (inicio > fim){
    for (let r = Number(inicio); inicio > fim; r -= Number(pule)) {
        resultado.textContent += `${r}`;
    }
} else {
for (let r = Number(inicio); r < Number(fim); r += Number(pule)) {
    resultado.textContent += `${r}`;
    }
  }
}