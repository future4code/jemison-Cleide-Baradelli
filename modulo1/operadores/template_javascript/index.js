// 1. Faça um programa que: 
        // a) Pergunte a idade do usuário
    
    // b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
    
    // c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
    
    // d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)


    // 1. exercicios.
     let idadeUsuario = Number(prompt("Insira a sua idade:"));
     let idadeAmigo = Number(prompt("Insira a idade do seu melhor amigo:"));
     let maisVelho = idadeUsuario > idadeAmigo;
     let diferencaIdades = idadeUsuario - idadeAmigo;
    
     console.log(`Sua idade é maior do que a do seu amigo? ${maisVelho}`);
     console.log(`A diferença de idades é ${diferencaIdades} ano(s).`);
    
// 2. Faça um programa que:
    
    // a) Peça ao usuário que insira um número **par**
    
    // b) Imprima na console **o resto da divisão** desse número por 2.
    
    // c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
    
    // d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

    
    // 2. exercicios.
    let numeroPar = Number(prompt("Insira um numero par:"));
    let oRestoDaDivisão = numeroPar %  2 ;
    console.log(` ${oRestoDaDivisão}`);
// Fiz varios testes e todo números pares o resultado e 0 e número ímpar o resultado e 1
  



    // 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
    // a) A idade do usuário em meses
    
    // b) A idade do usuário em dias
    
    // c) A idade do usuário em horas


    // 4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:
    
    
    // ```html
    // O primeiro numero é maior que segundo? true
    // O primeiro numero é igual ao segundo? false
    // O primeiro numero é divisível pelo segundo? true
    // O segundo numero é divisível pelo primeiro? true
    
    // obs: O true ou false vai depender dos números inseridos e do resultado das operações.
    // ```










