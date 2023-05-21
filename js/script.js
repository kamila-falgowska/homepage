console.log("Cześć!");

let button = document.querySelector(".js-button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".js-themeName");

button.addEventListener("click", () => {
    body.classList.toggle("body--beige");
    themeName.innerText = body.classList.contains("body--beige") ? "biały" : "beżowy";
});