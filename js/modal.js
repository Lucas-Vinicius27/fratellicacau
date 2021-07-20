// Pegando o modal
const modal = document.getElementById("myModal");

// Botao do de abrir o modal
const btn = document.getElementById("myBtn");

// Span do modal
const span = document.getElementsByClassName("close")[0];

// Função de abrir o modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// Fechando o modal ao clicar no X
span.onclick = function() {
  modal.style.display = "none";
}

// Fechando o modal fora do X
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}