import Swiper, { Navigation, EffectFade } from "swiper";
import "../../scss/base/swiper.scss";

function initSliders() {
    if (document.querySelector(".testi__slider")) {
        new Swiper(".testi__slider", {
            modules: [Navigation, EffectFade],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            speed: 800,
            effect: "fade",
            navigation: {
                prevEl: ".page__testi .navigation__item_prev",
                nextEl: ".page__testi .navigation__item_next",
            },
        });
    }
}

window.addEventListener("load", function (e) {
    initSliders();
});
