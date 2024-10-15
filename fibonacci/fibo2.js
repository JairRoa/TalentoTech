let entrada = document.getElementById("number"); 
let primerNumero = document.getElementById("primerNumero");
let segundoNumero = document.getElementById("segundoNumero");
let btn = document.getElementById("btn");
let salida = document.getElementById("resultado");

let numero = 0;
let num1 = 0;  
let num2 = 0;  

entrada.addEventListener("input", (evento) => {
    numero = Number(evento.target.value);
});

primerNumero.addEventListener("input", (evento) => {
    num1 = Number(evento.target.value);  
});

segundoNumero.addEventListener("input", (evento) => {
    num2 = Number(evento.target.value);  
});

// Calcular Fibonacci con los números personalizados
function calcularFibo(n) {
    let fibo = [];

    if (n <= 0) {
        return []; 
    } else if (n === 1) {
        return [num1]; 
    } else if (n === 2) {
        return [num1, num2]; 
    } else {
        fibo = [num1, num2]; 
        for (let i = 2; i < n; i++) {
            fibo[i] = fibo[i - 1] + fibo[i - 2];  
        }
    }
    return fibo;
}

btn.addEventListener("click", () => {
    let resultado = calcularFibo(numero);
    let hijo = document.createElement("h3");
    
    if (resultado.length > 0) {
        hijo.innerHTML = `El resultado es: ${resultado}`; 
    } else {
        hijo.innerHTML = "Por favor, ingrese un número válido.";
    }

    salida.appendChild(hijo);

    // Limpiar los campos de entrada
    entrada.value = '';
    primerNumero.value = '';
    segundoNumero.value = '';
    
    // Reiniciar variables
    numero = 0;
    num1 = 0;  
    num2 = 0;  
});
