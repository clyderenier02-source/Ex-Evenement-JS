const input = document.getElementById("champNom");
const p = document.getElementById("message");
const button = document.getElementById("afficherNom");

button.addEventListener("click", function () {
    p.textContent = `Bonjour, ${input.value} `
});