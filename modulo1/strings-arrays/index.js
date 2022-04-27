// exercício 1
let nome = prompt("Qual é o seu nome?")
let cor = prompt("Qual é a sua cor favorita?")

// // A cor favorita de X é X
let frase = "A cor favorita de " + nome + " é " + cor + "."
let template = `A cor favorita de ${nome} é ${cor}.`

// console.log(frase)
// console.log(template)


// let nome = "Tati Alves"
// console.log(nome.length);

// let frase = "Ola MuNdO!"
// console.log(frase.toLowerCase())
// console.log(frase.toUpperCase())

// let email = "   tati@labenu.com    "
// console.log(email.trim())

// let fraseInclude = "Olá turma Jemison!"
// console.log(fraseInclude.includes("!"))
// console.log(fraseInclude.replaceAll(" ", "-"))

// exercício 2
// let escrevaFrase = prompt("Escreva uma frase:")
// let novaFrase = escrevaFrase.toUpperCase()
// console.log("Nova frase: ", novaFrase)
// console.log(escrevaFrase.replaceAll('o','i'))
// console.log(escrevaFrase.length)


// ARRAYS
// let listaDeCompras = ["batata", "macarrão", "maçã", "alface"]
//       //                  0           1          2       3
// console.log(listaDeCompras[2])
// console.log(listaDeCompras[0])

// exercício 3
// let racasDeCachorro = [
//     "Golden Retriever",
//     "Poodle",
//     "Labrador",
//     "Corgi",
//     "Dobermam"
// ]
// console.log(racasDeCachorro.length)
// racasDeCachorro.pop()
// racasDeCachorro.splice(1, 2)
// racasDeCachorro.push("Dalmata", "Pastor Alemão", "Husky")
// console.log(racasDeCachorro)

// let cachorro = prompt("Digite um número de 1 a 5:")
// let returno = racasDeCachorro[cachorro - 1]
// console.log(typeof returno)

// exercício 4
// let numeros = [1, 2, 3, 4, 5, 6]
// console.log(numeros.length)
// numeros.push(7)
// console.log(numeros)
// numeros.splice(3, 2)
// console.log(numeros)
// console.log(numeros.length)