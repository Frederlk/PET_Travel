// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

window.onload = function () {
    let circle = document.querySelectorAll(".circle");
    for (let i = 0; i < circle.length; i++) {
        window.addEventListener("mousemove", function (e) {
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;
            circle[i].style.transform = "translate(-" + x * 10 + "px, -" + y * 30 + "px)";
        });
    }
    let second = document.querySelectorAll(".second");
    for (let i = 0; i < second.length; i++) {
        window.addEventListener("mousemove", function (e) {
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;
            second[i].style.transform = "translate(-" + x * 20 + "px, +" + y * 50 + "px)";
        });
    }
    let cross = document.querySelectorAll(".cross");
    for (let i = 0; i < cross.length; i++) {
        window.addEventListener("mousemove", function (e) {
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;
            cross[i].style.transform = "translate(+" + x * 30 + "px, +" + y * 10 + "px)";
        });
    }
};
