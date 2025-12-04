const input = document.getElementById("champTexte");
const button = document.getElementById("toggleChamp");

button.addEventListener("click", function (){
    input.disabled = !input.disabled;
});