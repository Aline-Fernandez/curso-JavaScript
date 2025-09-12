/*
 
Functions / Funções
- Trecho de código que é executado
SOMENTE quando solicitado 
- Trecho de código que pode ser Reutilizado várias vezes

[x] o que é uma função e como usar
[x] Função VOID (vazia) / Não retorna nada
[x] Função com parâmetros
[x] Função Return
[ ] Arrow Function

*/ 

/* void */
//exemplo1
const number = 200
console.log(number)


//exemplo2
function digaMeuNome(){
    console.log("Aline")
}

/* parâmetros */
//exemplo3
function digaQualquerNome(nome){
    console.log(nome)

}

digaQualquerNome("Maria")
digaQualquerNome("João"
)


//exemplo4
function soma(numero1, numero2){
    const resultado = numero1 + numero2

    console.log(resultado)
}

soma(2,5)


/* return */
//exemplo5
function subtracao(numero1, numero2){
    const resultado = numero1 - numero2

    return resultado
}

const resultadoDaSubtracao = subtracao(30, 40)
console.log(resultadoDaSubtracao)


//exemplo6
function estaEndividado(receita, gastos){
    if(receita > gastos){
        return "Não está endividada"
    }
    else {
        return "Está endividada"
    }
}

const maria = estaEndividado(5000, 7000)
const joao = estaEndividado(10000, 2000)

console.log(maria)
console.log(joao)


/* Arrow function (Função flecha) */ 
//exemplo7
const digaMeuNome2 = () => { // Forma moderna function
    console.log("Aline")
}

digaMeuNome2()
