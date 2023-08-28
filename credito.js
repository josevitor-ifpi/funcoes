import { question } from "readline-sync";

function main(){
    // 1. Pedir fatura e taxa de juros
    console.log(`\n------- SIMULADOR DE CRÉDITO -------`)
    const fatura = Number(question("Valor da fatura    : R$ ")) 
    const taxa_juros = Number(question("Taxa de Juros % a.m: "))
    console.log(`-----------------------------------`)

    // 2. Pedir o mínimo (20%)
    const fatura_minima = fatura * (20/100)
    
    // 3. Exibir valor máximo e mínimo
    console.log(`\n------- Detalhes da fatura ------`)
    console.log(`Valor Total : ${rs(fatura)}`)
    console.log(`Valor mínimo: ${rs(fatura_minima)}`)
    console.log(`----------------------------------`)
    
    // 4. P1: Perguntar quanto vai pagar e quantos meses
    console.log(`\n----- Plano de pagamento 1 -----`)
    const valor_p1 = Number(question("Valor          : R$ "))
    const meses_atraso_p1 = Number(question("Meses de atraso: "))
    console.log(`----------------------------------`)

    // 5. P2: Perguntar quanto vai pagar e quantos meses
    console.log(`\n ----- Plano de pagamento 2 -----`)
    const valor_p2 = Number(question("Valor          : R$ "))
    const meses_atraso_p2 = Number(question("Meses de atraso: "))
    console.log(`-------------------------`)

    // 6. Calcular Montante/Fatura P1
    const valor_residual_p1 =  fatura - valor_p1
    const fatura_p1 = calcular_futura_fatura(valor_residual_p1, taxa_juros, meses_atraso_p1)

    // 7. Calcular Montante/Fatura P2
    const valor_residual_p2 = fatura - valor_p2
    const fatura_p2 = calcular_futura_fatura(valor_residual_p2, taxa_juros, meses_atraso_p2)

    // 8. Mostrar Faturas P1 e P2
    console.log(`------- Plano 1 ---------`)
    console.log(`Valor Pago    : ${rs(valor_p1)}`)
    console.log(`Valor Residual: ${rs(valor_residual_p1)}`)
    console.log(`Meses em Atraso: ${meses_atraso_p1}`)
    console.log(`A fatura do plano 1 em ${meses_atraso_p1} meses será de ${rs(fatura_p1)}`)

    console.log(`------- Plano 2 ---------`)
    console.log(`Valor Pago    : ${rs(valor_p2)}`)
    console.log(`Valor Residual: ${rs(valor_residual_p2)}`)
    console.log(`Meses em Atraso: ${meses_atraso_p2}`)
    console.log(`A fatura do plano 1 em ${meses_atraso_p2} meses será de ${rs(fatura_p2)}`)



}

main()

//funções

function rs(valor){
    const formatado = `R$ ${valor.toFixed(2)}`
    return formatado
}

function calcular_futura_fatura(valor, taxa, tempo){
    const valor_futuro = valor + juros_compostos(valor, taxa, tempo)
    return valor_futuro
}

function juros_compostos(c, i, t){
    const montante = c * (1 + (i/100)) ** t
    const juros = montante - c
}