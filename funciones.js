let edad = 21 // (el número es a modo de ejemplo, podes cambiarlo o crear otras para tener varias pruebas)
const validarEdad = (edad) => {
    if (edad < 0) {
        console.log("Error, edad inválida. Por favor ingrese un número válido.")
    } else if (edad < 18) {
        console.log("No puede pasar al bar.")
    } else if (edad < 21) {
        console.log("Puede pasar al bar, pero no puede tomar alcohol.")
    } else {
        console.log("Puede pasar al bar y tomar alcohol.")
        if (edad === 21) {
            console.log("Felicidades por ser mayor de edad.")
        }
    }
    esImpar(edad)
}
const esImpar = (numero) => {
    if (numero % 2 !== 0) {
        console.log("¿Sabías que tu edad es impar?")
    }
}

//validarEdad(edad)

// Descomente para pruebas
// validarEdad(-4)
// validarEdad(15)
// validarEdad(19)
// validarEdad(30)

/*
Ejercicio 2
*/

const totalAPagar = (vehiculo, litrosConsumidos) => {
    let extra = 0;
    let costo = 0;
    if(litrosConsumidos<= 0){
        console.log("Debe ingresar una cantidad de litros de 1 en adelante")
        return 0;
    }
    else if(litrosConsumidos > 0 && litrosConsumidos <= 25){
        extra = 50;
    }
    else if(litrosConsumidos > 25){
        extra = 25;
    }

    if(vehiculo === "coche"){
        costo = litrosConsumidos * 86;
    }
    else if(vehiculo === "moto"){
        costo = litrosConsumidos * 70;
    }
    else if(vehiculo === "autobus"){
        costo = litrosConsumidos * 55;
    }
    else {
        console.log("No tenemos informacion para ese tipo de vehiculo")
        return 0;
    }
    console.log("El total a pagar por",litrosConsumidos,"litros para su",vehiculo,"es de:",costo + extra);
    return costo + extra;
}

// Descomente para probar
/*
totalAPagar("coche", 10)
totalAPagar("moto", 22)
totalAPagar("autobus", 100)
totalAPagar("tractor", 10)
totalAPagar("moto", -10)
*/

//Ejercicio 3 
// (string,string,boolean,boolean,boolean,boolean,boolean,boolean,boolean,boolean) => int
const precioPorSandwich = (base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza ) => {
    let total = 0;
    if(base === "pollo"){
        total += 150;
    }
    else if(base === "carne"){
        total += 200;
    }
    else if(base === "veggie"){
        total += 100;
    }
    else {
        console.log("No podemos preparar un sandwich con esa base.")
        return 0;
    }

    if(pan === "blanco"){
        total += 50;
    }
    else if(pan === "negro"){
        total += 60;
    }
    else if(pan === "s/gluten"){
        total += 75;
    }
    else {
        console.log("No podemos preparar un sandwich con ese pan.")
        return 0;
    }

    if(queso){
        total += 20;
    }
    if(tomate){
        total += 15;
    }
    if(lechuga){
        total += 10;
    }
    if(cebolla){
        total += 15;
    }
    if(mayonesa){
        total += 5;
    }
    if(mostaza){
        total += 5;
    }

    console.log("El sandwich que selecciono tiene un costo de", total);
}
//Descomente para probar
precioPorSandwich("poll","blanc",false,false,false,false,false,false)
precioPorSandwich("pollo","blanc",false,false,false,false,false,false)
precioPorSandwich("pollo","blanco",true,false,false,false,false,false)
precioPorSandwich("pollo","blanco",true,true,true,true,true,true)
