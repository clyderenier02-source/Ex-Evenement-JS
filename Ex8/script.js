const li = document.getElementsByClassName("cliquable");

for(let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function () {
        this.remove();
    })
}