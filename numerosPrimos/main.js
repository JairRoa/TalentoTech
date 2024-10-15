entrada = document.getElementById("numero");
btn = document.getElementById("btn");
salida = document.getElementById("resultado");
let numero = 0;

entrada.addEventListener("input", (evento) => {
    numero = Number(evento.target.value);
});

function numeroPrimo(n) {
    if (n <= 1) {
        return false; 
    }
    
    for (let i = 2; i < n; i++) {  
        if (n % i === 0) {
            return false; 
        }
    }
    return true; 
}

btn.addEventListener("click", () => {
    resultado = numeroPrimo(numero);
    salida.innerHTML = "<h2>Resultados</h2>";

    let hijo = document.createElement("h3");
    if(resultado){
        hijo.innerHTML = `El ${numero} es primo`;
    } else {
        hijo.innerHTML = `El ${numero} no es primo`;
    }

    salida.appendChild(hijo);
});

