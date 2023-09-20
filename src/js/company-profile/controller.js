import carouselView from "./main-views/carouselView.js";
import mainNavbarView from "./main-views/mainNavbarView.js";
import contributionSection from "./main-views/contributionSection.js";
import featureSectionView from "./main-views/featureSectionView.js";
import jumbotronView from "./main-views/jumbotronView.js";
import { state } from "../model.js";

const controlNavbar = function() {
    mainNavbarView.navLinkHandler();
    mainNavbarView.fixNavbar();
    mainNavbarView.hamburgerHandler();
    mainNavbarView.overlayBgHandler();
}

const controlJumbotronSection = function() {
    jumbotronView.imageInterval(state.mainImageUrl);
    jumbotronView.textAnimation();
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
    // controlCarousel();

     // Preline Library for Dark Mode 
    const HSThemeAppearance = {
        init() {
            const defaultTheme = 'default'
            let theme = localStorage.getItem('hs_theme') || defaultTheme
    
            if (document.querySelector('html').classList.contains('dark')) return
            this.setAppearance(theme)
        },
        _resetStylesOnLoad() {
            const $resetStyles = document.createElement('style')
            $resetStyles.innerText = `*{transition: unset !important;}`
            $resetStyles.setAttribute('data-hs-appearance-onload-styles', '')
            document.head.appendChild($resetStyles)
            return $resetStyles
        },
        setAppearance(theme, saveInStore = true, dispatchEvent = true) {
            const $resetStylesEl = this._resetStylesOnLoad()
    
            if (saveInStore) {
                localStorage.setItem('hs_theme', theme)
            }
    
            if (theme === 'auto') {
                theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default'
            }
    
            document.querySelector('html').classList.remove('dark')
            document.querySelector('html').classList.remove('default')
            document.querySelector('html').classList.remove('auto')
    
            document.querySelector('html').classList.add(this.getOriginalAppearance())
    
            setTimeout(() => {
                $resetStylesEl.remove()
            })
    
            if (dispatchEvent) {
                window.dispatchEvent(new CustomEvent('on-hs-appearance-change', {detail: theme}))
            }
        },
        getAppearance() {
            let theme = this.getOriginalAppearance()
            if (theme === 'auto') {
                theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default'
            }
            return theme
        },
        getOriginalAppearance() {
            const defaultTheme = 'default'
            return localStorage.getItem('hs_theme') || defaultTheme
        }
    }
    HSThemeAppearance.init()
    
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (HSThemeAppearance.getOriginalAppearance() === 'auto') {
            HSThemeAppearance.setAppearance('auto', false)
        }
    })
    
    window.addEventListener('load', () => {
        const $clickableThemes = document.querySelectorAll('[data-hs-theme-click-value]')
        const $switchableThemes = document.querySelectorAll('[data-hs-theme-switch]')
    
        $clickableThemes.forEach($item => {
            $item.addEventListener('click', () => HSThemeAppearance.setAppearance($item.getAttribute('data-hs-theme-click-value'), true, $item))
        })
    
        $switchableThemes.forEach($item => {
            $item.addEventListener('change', (e) => {
                HSThemeAppearance.setAppearance(e.target.checked ? 'dark' : 'default')
            })
    
            $item.checked = HSThemeAppearance.getAppearance() === 'dark'
        })
    
        window.addEventListener('on-hs-appearance-change', e => {
            $switchableThemes.forEach($item => {
                $item.checked = e.detail === 'dark'
            })
        })
    })
}

init();