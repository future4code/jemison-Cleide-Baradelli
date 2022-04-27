/* 1 - 10
       5, 10 
       
    2 - 10, 10, 10       
       
    3 - p = horasDia
        t = ganhoDia
*/  
// 1- 
let nome
let idade
console.log(typeof nome, typeof idade)
//o tipo que apareceu foi indefinido, por que nao atribui nenhum valor para as variaveis.
nome = prompt("qual é seu nome")
idade = prompt("qual é sua idade")
console.log(typeof nome, typeof idade)
//agora estão definidas as variaveis, porém no typeof idade não apareceu o number
console.log("Olá,", nome,"você tem", idade, "anos")

// 2 -
let edomingo
edomingo = prompt("Hoje é domingo")
let feliz
feliz = prompt ("Você está feliz")
let Natal
Natal =prompt ("Hoje é Natal")


// 3 -
let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores
c = a
a = b
b = c


// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
