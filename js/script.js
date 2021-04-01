document.querySelector(".fade_layer").addEventListener("click", showMenu);
document.querySelector(".menyknapp").addEventListener("click", showMenu);

function showMenu() {
    document.querySelector("nav").classList.toggle("show");
    document.querySelector(".fade_layer").classList.toggle("visible");
}