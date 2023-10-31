//recuperando os elementos do html
const btn = document.getElementById("btn-info");
const inputA = document.getElementById("campo1");
const inputB = document.getElementById("campo2");
let result = document.getElementById("campo3");
let operacao = document.getElementById("seletor");
const btnCalc = document.getElementById("calc");

//msg com a descrição da tarefa
const showInfo =
  "Exercício 2:\n\n" +
  " * Crie uma calculadora com as quatro operações básicas utilizando JS.\n\n" +
  " * Utilize dois campos de input para o preenchimento dos valores, um campo " +
  "select para a seleção da operação desejada, um campo div para resposta e " +
  "um botão para solicitar o cálculo.";

//evento do clique do botão info
btn.addEventListener("click", () => {
  alert(showInfo);
});

//evento do botão de igual
btnCalc.addEventListener("click", () => {
  const a = parseInt(inputA.value);
  const b = parseInt(inputB.value);

  if (operacao.value == "soma") {
    result.innerHTML = "Resultado: " + a + b;
  }
  if (operacao.value == "subtração") {
    result.innerHTML = "Resultado: " + a - b;
  }
  if (operacao.value == "divisão") {
    result.innerHTML = "Resultado: " + a / b;
  }
  if (operacao.value == "multiplicação") {
    result.innerHTML = "Resultado: " + a * b;
  }
});
