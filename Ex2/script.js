const p = document .getElementById("texte");
const button = document.getElementById("modifierTexte");

button.addEventListener("click", function () {
    p.textContent = "Le texte a été modifié avec succès";
});