const ul = document.getElementById("listeElements");
const button = document.getElementById("ajouter");

button.addEventListener("click", function () {
    const li = document.createElement("li");
    li.textContent = "Nouvel élément ajouté";

    ul.appendChild(li)
});