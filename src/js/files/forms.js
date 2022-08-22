// Подключение функционала "Чертогов Фрилансера"
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Валидация форм
export let formValidate = {
    getErrors(form) {
        let error = 0;
        let formRequiredItems = form.querySelectorAll("*[data-required]");
        if (formRequiredItems.length) {
            formRequiredItems.forEach((formRequiredItem) => {
                if (
                    (formRequiredItem.offsetParent !== null || formRequiredItem.tagName === "SELECT") &&
                    !formRequiredItem.disabled
                ) {
                    error += this.validateInput(formRequiredItem);
                }
            });
        }
        return error;
    },
    validateInput(formRequiredItem) {
        let error = 0;

        if (!formRequiredItem.value) {
            this.addError(formRequiredItem);
            error++;
        } else {
            this.removeError(formRequiredItem);
        }
        return error;
    },
    addError(formRequiredItem) {
        formRequiredItem.classList.add("_form-error");
        formRequiredItem.parentElement.classList.add("_form-error");
        let inputError = formRequiredItem.parentElement.querySelector(".form__error");
        if (inputError) formRequiredItem.parentElement.removeChild(inputError);
        if (formRequiredItem.dataset.error) {
            formRequiredItem.parentElement.insertAdjacentHTML(
                "beforeend",
                `<div class="form__error">${formRequiredItem.dataset.error}</div>`
            );
        }
    },
    removeError(formRequiredItem) {
        formRequiredItem.classList.remove("_form-error");
        formRequiredItem.parentElement.classList.remove("_form-error");
        if (formRequiredItem.parentElement.querySelector(".form__error")) {
            formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
        }
    },
    formClean(form) {
        form.reset();
        setTimeout(() => {
            if (flsModules.select) {
                let selects = form.querySelectorAll(".select");
                if (selects.length) {
                    for (let index = 0; index < selects.length; index++) {
                        const select = selects[index].querySelector("select");
                        flsModules.select.selectBuild(select);
                    }
                }
            }
        }, 0);
    },
};
/* Отправка форм */
export function formSubmit(options = { validate: true }) {
    const forms = document.forms;
    if (forms.length) {
        for (const form of forms) {
            form.addEventListener("submit", function (e) {
                const form = e.target;
                formSubmitAction(form, e);
            });
            form.addEventListener("reset", function (e) {
                const form = e.target;
                formValidate.formClean(form);
            });
        }
    }
    async function formSubmitAction(form, e) {
        const error = !form.hasAttribute("data-no-validate") ? formValidate.getErrors(form) : 0;
        if (error === 0 && form.hasAttribute("data-dev")) {
            // Если режим разработки
            e.preventDefault();
            formSent(form);
        } else {
            e.preventDefault();
            const formError = form.querySelector("._form-error");
        }
    }
    // Действия после отправки формы
    function formSent(form) {
        // Создаем событие отправки формы
        document.dispatchEvent(
            new CustomEvent("formSent", {
                detail: {
                    form: form,
                },
            })
        );
        // Показываем попап, если подключен модуль попапов
        // и для формы указана настройка
        setTimeout(() => {
            if (flsModules.popup) {
                const popup = form.dataset.popupMessage;
                popup ? flsModules.popup.open(popup) : null;
            }
        }, 0);
        // Очищаем форму
        formValidate.formClean(form);
    }
}
