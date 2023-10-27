// Seleciona o botão usando querySelector
var botao = document.querySelector("#botao");
let quebrado = false

// Altera os estilos do botão
botao.style.backgroundColor = "blue";

botao.addEventListener("mouseover", () => {
  if(!quebrado){
    botao.style.backgroundColor = "green";
  }
  
});

botao.addEventListener("mouseout", () => {
  if(!quebrado){
  botao.style.backgroundColor = "blue";
  }
});

botao.addEventListener("click", ()=>{
  botao.innerHTML = "quebrei";
  quebrado = true;
  botao.style.backgroundColor = "red";
})
