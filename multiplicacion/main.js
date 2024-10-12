entrada = document.getElementById("numero")
otraEntrada = document.getElementById("otroNumero")
btn = document.getElementById("btn")
salida = document.getElementById("resultado")
let numero = 0
let otroNumero = 0

entrada.addEventListener("input", (evento)=>{
    numero = Number(evento.target.value)
})
otraEntrada.addEventListener("input", (evento)=>{
    otroNumero = Number (evento.target.value)
})



function multiplicacion (parametro, otroParametro){
    return parametro*otroParametro
}

btn.addEventListener("click", ()=>{
   resultado = multiplicacion (numero,otroNumero)
   let hijo = document.createElement("h3")
   hijo.innerHTML = `El resultado de multiplicar  ${numero}  X  ${otroNumero}  es igual a: ${resultado}`
   salida.appendChild(hijo)
})



resultado = multiplicacion(5,10)


console.log(resultado)