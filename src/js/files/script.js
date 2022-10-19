import { Datepicker } from "vanillajs-datepicker";

window.onload = function () {
    new Datepicker(document.querySelector("#date"), {
        format: "dd.mm.yyyy",
    });
};
