let btn = document.getElementById("btn-info");

let showInfo ="Exercicio 2:\n\n"+
  " * Crie uma calculadora com as quatro operações basicas utilizando js\n\n" +
  " * Utilize dois campos de input para o preenchimento dos valores,um campo " +
  "select para a seleção da operação desejada,um campo div para resposta e " +
  "um button para solicitar o cálculo\n";

btn.addEventListener("click", () => {
  alert(showInfo);
});
