// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
import { Datepicker } from "vanillajs-datepicker";

window.onload = function () {
    new Datepicker(document.querySelector("#date"), {
        format: "dd.mm.yyyy",
    });
};
