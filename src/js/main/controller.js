import carouselView from "./views/carouselView.js";
import navbarView from "./views/navbarView.js";
import contributionSection from "./views/contributionSection.js";
import featureSectionView from "./views/featureSectionView.js";

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

const controlFeatureSection = function() {
    featureSectionView.scrollAnimation();
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
    controlFeatureSection();
}

init();