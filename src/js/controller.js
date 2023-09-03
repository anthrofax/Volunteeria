import carouselView from "./views/carouselView.js";
import navbarView from "./views/navbarView.js";
import contributionSection from "./views/contributionSection.js";

const controlCarousel = function() {
    // Render Carousel & Dots
    carouselView.renderSlider();

    // Next Prev Button Handler
    carouselView.carouselButtonHandler();

    // Dot Button Handler
    carouselView.carouselDotHandler();
}

const controlNavbar = function() {
    navbarView.navLinkHandler();
    navbarView.fixNavbar();
}

const controlContributionSection = function () {
    contributionSection.init();
    if (screen.width >= 1024) {
        contributionSection.scrollAnimation();
    }
}

const init = function() {
    controlCarousel();
    controlNavbar();
    controlContributionSection();
}

init();