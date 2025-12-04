const input = document.getElementById("champClavier");
const p = document.getElementById("messageClavier");

input.addEventListener("keydown", function (event) {
    if(event.key === "Enter") {
        p.textContent = "Vous avez appuyé sur la touche Entrée"
    }
});
