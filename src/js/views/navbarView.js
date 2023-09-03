class navbarView {
  _parentElement = document.querySelector("nav");
  _navLinks = this._parentElement.querySelectorAll("a");

  fixNavbar() {
    const jumbotron = document.querySelector(".jumbotron");
    const nav = this._parentElement;

    const navFixedObserver = new IntersectionObserver(
      function (entries) {
        const [entry] = entries;
        if (entry.isIntersecting) nav.classList.replace("sticky-navbar", "relative");
        else nav.classList.replace("relative", "sticky-navbar");
      },
      {
        root: null,
        threshold: 0,
        rootMargin: `-${nav.getBoundingClientRect().height}px`,
      }
    );

    navFixedObserver.observe(jumbotron);
  }

  navLinkHandler() {
    this._parentElement.addEventListener("mouseover", this.fadeOutLinks.bind(this,  .5));
    this._parentElement.addEventListener("mouseout", this.fadeOutLinks.bind(this, 1));
  }

  fadeOutLinks(opacity, e) {
    const linkHovered = e.target.closest("a");
    
    if (!linkHovered) return;

    this._navLinks.forEach((link) => {
      if (link !== linkHovered) {
        link.style.opacity = opacity
      }
    });
  }
}

export default new navbarView();
