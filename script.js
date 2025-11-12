// Programa para manipular o DOM
window.document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnMaiuscula").addEventListener("click", () => {
    let inputText = document.getElementById("input-text").value;
    document.getElementById("input-resultado").innerHTML = inputText.toUpperCase();
  });
});

window.document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnMinusculo").addEventListener("click", () => {
    let inputText = document.getElementById("input-text").value;
    document.getElementById("input-resultado").innerHTML = inputText.toLowerCase();
  });
});
