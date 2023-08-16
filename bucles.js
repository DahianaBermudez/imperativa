const numeros = (valor) => {
    for (let i = 0; i < 11; i++){
        console.log(valor++)
    }
}
numeros(10)

const tresEnTres =() => {
    for (let i = 5; i < 21; i +=3){
        console.log(i)
    }
}
 tresEnTres()
const sumatoria =() => {
    let result = 0;
    for (let i = 0; i < 101; i++){
        result = result + i;
    }
    console.log(result)
}

sumatoria()

const factorial =(numero) => {
    let result=1;
    for (let i = numero; i > 0; i--){
        result = result * i
    }
    console.log(result)
}

factorial(5)