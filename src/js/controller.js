import carouselView from "./views/carouselView.js";
import navbarView from "./views/navbarView.js";

const controlCarousel = function() {
    // Render Carousel & Dots
    carouselView.renderSlider();

    // Next Prev Button Handler
    carouselView.carouselButtonHandler();

    // Dot Button Handler
    carouselView.carouselDotHandler();
}

const controlNavbar = function() {
    navbarView.fixNavbar();
}

const init = function() {
    controlCarousel();
    controlNavbar();
}

init();