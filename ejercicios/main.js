let tipoHuevo = "frito"; 

console.log("conseguir un huevo");
console.log("conseguir una sartén");

if (tipoHuevo === "frito") {
    console.log("conseguir aceite o mantequilla");
    console.log("encender la estufa");
    console.log("poner a calentar la sartén");

    let engrasante = "aceite"; 

    if (engrasante === "aceite") {
        console.log("añadir aceite a la sartén precalentada");
    } else if (engrasante === "mantequilla") {
        console.log("agregue mantequilla con una espátula a la sartén precalentada");
    } else {
        console.log("por favor use un engrasante");
    }

    console.log("romper el huevo y agregarlo a la sartén");
    console.log("cocinar hasta que esté listo");

} else if (tipoHuevo === "cocido") {
    console.log("conseguir una olla");
    console.log("llenar la olla con agua");
    console.log("encender la estufa y calentar el agua");
    console.log("añadir el huevo al agua hirviendo");
    console.log("cocinar el huevo por 10-12 minutos");
    console.log("retirar el huevo, enfriarlo y pelarlo");
} else {
    console.log("por favor elige un tipo de huevo válido: 'frito' o 'cocido'");
}

console.log("Servir con pan, tocino, chocolate y dos tamales");
