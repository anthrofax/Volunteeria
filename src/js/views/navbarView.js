class navbarView {
  fixNavbar() {
    const nav = document.querySelector('nav');

    const obsCallback = function (entries) {
      const [entry] = entries;
      console.log(entries);
      if (entry.isIntersecting) nav.classList.replace('sticky-navbar', 'relative');
      else nav.classList.replace('relative', 'sticky-navbar');
      console.log(nav)
    };

    const navFixedObserver = new IntersectionObserver(obsCallback, {
      root: null,
      threshold: 0,
      rootMargin: `-${nav.getBoundingClientRect().height}px`,
    });
  
    navFixedObserver.observe(document.querySelector('.jumbotron'));
  }

}

export default new navbarView();
