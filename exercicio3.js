let lado1 = 10
let lado2 = 10
let lado3 = 8


function verificarTipoTRiangulo(lado1, lado2, lado3){
    if(lado1 === lado2 === lado3){
        console.log("todos os lados sao iguais, estao é  equilatero")
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("dois lados do triangulo sao iguais, estao é isosceles ")
    } else  {
        console.log("nenhum dos lados sao iguais entao é um escaleno")
    }
    }

    verificarTipoTRiangulo(lado1, lado2, lado3)