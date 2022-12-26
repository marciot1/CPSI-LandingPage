// PEGA O MODAL
var modal = document.getElementById("myModal");

// BOTAO QUE ABRE O MODAL
var btn = document.getElementById("myBtn");

// PEGA O ELEMENTO SPAN QUE FECHA O MODAL
var span = document.getElementsByClassName("close")[0];

// QUANDO O USUARIO CLICAR MO BOTAO, ABRE O MODAL 
btn.onclick = function() {
  modal.style.display = "block"
}

// CLICAR NO X, FECHAR
span.onclick = function() {
  modal.style.display = "none"
}

// CLICAR FORA DA MODAL FECHAR
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none" 
    }
}
