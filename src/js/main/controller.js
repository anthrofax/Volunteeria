import carouselView from "./views/carouselView.js";
import navbarView from "./views/navbarView.js";
import contributionSection from "./views/contributionSection.js";
import featureSectionView from "./views/featureSectionView.js";
import jumbotronView from "./views/jumbotronView.js";
import { state } from "./model.js";

const controlNavbar = function() {
    navbarView.navLinkHandler();
    navbarView.fixNavbar();
    navbarView.hamburgerHandler();
    navbarView.overlayBgHandler();
}

const controlJumbotronSection = function() {
    jumbotronView.imageInterval(state.mainImageUrl);
    jumbotronView.prevnextHandler(state.mainImageUrl);
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

const controlCarousel = function() {
    // Render Carousel & Dots
    carouselView.renderSlider();

    // Next Prev Button Handler
    carouselView.carouselButtonHandler();

    // Dot Button Handler
    carouselView.carouselDotHandler();
}

const init = function() {
    controlJumbotronSection();
    controlNavbar();
    controlContributionSection();
    controlFeatureSection();
    controlCarousel();
}

init();