const valor1 = document.getElementById("entre")
const valor2 = document.getElementById("entre2")
const btnSortear = document.getElementById("btnSortear")
const resultado = document.getElementById("resultado")

btnSortear.addEventListener('click', sortear)

function sortear() {    
    let valor10 = Number(valor1.value)
    let valor20 = Number(valor2.value)   
    let result = Math.floor(Math.random() * ( valor20 - valor10 + 1) + valor10);
    
    resultado.innerHTML = `O número sorteado é: ${result}`
    console.log(result)

}
