import { question } from "readline-sync";

function viagem(){
// 1. Pedir distância, valor litro gasolina e álcool e % de uso do motor elétrico
    const distancia = Number(question(`Informe a distância do seu destino  : `))
    const valor_litro_gasolina = Number(question(`Valor do litro da gasolina          : R$ `))
    const kilometragem_gasolina = Number(question(`Quanto o carro faz com 1 Litro de gasolina: `))
    const valor_litro_alcool = Number(question(`Valor do litro da álcool            : R$ `))
    const kilometragem_alcool = Number(question(`Quanto o carro faz com 1 Litro de álcool: `))
    const uso_motor_eletrico = Number(question(`Indique a % de uso do motor elétrico: `))

// 2. Informar quanto deve abastecer de gasolina/álcool
    const kilometragem_eletrico = distancia * (uso_motor_eletrico / 100)
    const abastecimento_gasolina = kilometragem_eletrico * valor_litro_gasolina
    const abastecimento_alcool = kilometragem_eletrico * valor_litro_alcool

// 3. Mostrar dados (kilometragem, valor do litro, valor abastecimento)
    console.log(`------- ELÉTRICO -------`)
    console.log(`O motor elétrico fez uma kilometragem de ${kilometragem_eletrico} Km.`)
    console.log(`O motor elétrico fez um total de ${uso_motor_eletrico}% da viagem.`)
    console.log(`------- GASOLINA -------`)
    console.log(`O motor a gasolina fez um consumo ${kilometragem_gasolina} Km/L.`)
    console.log(`O valor do litro da gasolina custa R$ ${valor_litro_gasolina}`)
    console.log(`Foi gasto R$ ${abastecimento_gasolina} com gasolina.`)
    console.log(`A kilometragem do motor a gasolina foi ${distancia - kilometragem_eletrico} Km.`)
    console.log(`------- ÁLCOOL ---------`)
    console.log(`O motor a álcool fez um consumo de ${kilometragem_alcool} Km/L.`)
    console.log(`O valor do litro da gasolina custa R$ ${valor_litro_alcool}`)
    console.log(`Foi gasto R$ ${abastecimento_alcool} com álcool.`)
    console.log(`A kilometragem do motor a álcool foi ${distancia - kilometragem_eletrico} Km.`)

}

// Funções



viagem()