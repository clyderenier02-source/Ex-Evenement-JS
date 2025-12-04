const p = document.getElementById("resultat");
const button = document.getElementById("compter");
const click = document.createElement("nombre");

let nombre = 0;

button.addEventListener("click", function () {
    nombre = nombre + 1;
    p.textContent = `Vous avez cliqué ${nombre} fois`;
});