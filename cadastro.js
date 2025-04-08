const readline = require("readline-sync");

let nome = readline.question("Digite seu nome: ");
let idade = readline.question("Digite sua idade: ");
let nota1 = parseFloat(readline.question("Informe sua primeira nota: "));
let nota2 = parseFloat(readline.question("Informe sua segunda nota: "));
let nota3 = parseFloat(readline.question("Informe sua terceira nota: "));
let media = (nota1 + nota2 + nota3)/3;

function RESULTADO(){
  
    if (media >= 7)
        console.log(
            "Nome: " + nome + "\n" + 
            "Idade: " + idade + "\n" + 
            "Notas: " + nota1 + ", " + nota2 + ", " + nota3 + "\n" + 
            "Média: " + media.toFixed(2) + "\n" + 
            "Situação: Aprovado 🎉 "
        );
     else
        console.log(
            "Nome: " + nome + "\n" + 
            "Idade: " + idade + "\n" + 
            "Notas: " + nota1 + ", " + nota2 + ", " + nota3 + "\n" + 
            "Média: " + media.toFixed(2) + "\n" + 
            "Situação: Reprovado 😢"
        );
}

RESULTADO();
