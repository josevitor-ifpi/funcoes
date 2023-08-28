import { question } from "readline-sync"

function main(){

    // 1. Pedir dados CDB
    console.log(`------- SIMULADOR CDB -------`)
    const capital_cdb = Number(question("Valor investido CDB: R$ ")) // 600
    const ano_saque_cdb = Number(question("Ano saque CDB: R$ ")) // 2030
    const taxa_cdb = Number(question("Taxa  CDB % a.a: ")) // 7%

    // 2. Calcular juros cdb
    const juros_cdb = calcular_juros_cdb(capital_cdb, taxa_cdb, ano_saque_cdb) // J = C*I*T
    const valor_receber_cdb = capital_cdb + juros_cdb // 600 + juros
    const redimento_perceantual_cdb = (juros_cdb / capital_cdb) * 100 // (juros / 600) * 100

    // 3. Saída CDB
    console.log(`------- RESUMO CDB -------`)
    console.log(`Investimento : ${rs(capital_cdb)}`) // 600
    console.log(`Ganho        : ${rs(juros_cdb)}`) // 
    console.log(`A receber    : ${rs(valor_receber_cdb)}`)
    console.log(`Rendimento   : ${redimento_perceantual_cdb.toFixed(2)} %`)
    console.log(`---------------------------`)

    // 4. Pedir dados CDC
    console.log(`\n------- SIMULADOR CDC -------`)
    const taxa_cdc = Number(question(`Taxa CDC % a.m: `)) 

    const capital_cdc = capital_cdb
    const tempo_cdc = (ano_saque_cdb - 2023) * 12 // CONVERTER ANO -> MÊS

    // 5. Calcular juros CDB
    const juros_cdc = calcular_juros_cdc(capital_cdc, taxa_cdc, tempo_cdc)
    const valor_total_a_pagar = capital_cdc + juros_cdc
    const valor_parcela = valor_total_a_pagar / tempo_cdc
    const percentual_total = (juros_cdc / capital_cdc) * 100

    // 6. Mostrar Dados
    console.log(`------- RESUMO CDC -------`)
    console.log(`Valor CDC(Emp.): ${rs(capital_cdc)}`)
    console.log(`Total a pagar  : ${rs(valor_total_a_pagar)}`)
    console.log(`Juros CDC      : ${rs(juros_cdc)}`)
    console.log(`CET %          : ${percentual_total.toFixed(2)}`)
    console.log(`Parcelas       : ${tempo_cdc} X ${rs(valor_parcela)}`)
}

main()

function calcular_juros_cdc(calcular_juros_cdc, taxa_cdc, tempo_cdc){
    const juros = juros_compostos(calcular_juros_cdc, taxa_cdc, tempo_cdc)
    return juros
}

function calcular_juros_cdb(capital_cdb, taxa_cdb, ano_saque_cdb){
    const tempo = ano_saque_cdb - 2023
    
    const juros = juros_compostos(capital_cdb, taxa_cdb, ano_saque_cdb)
    return juros
}

function juros_compostos(c, i, t){
    const montante = c * (1 + (i/100)) ** t
    const juros = montante - c
}

function rs(valor){
    const formatado = `R$ ${valor.toFixed(2)}`
    return formatado
}