import Navbar from "../../views/Navbar.js";

class lowonganNavbarView extends Navbar {
  _searchNavbar = document.querySelector('.search-nav');
  _volunteerDetail = document.querySelector('.volunteer-detail');
  _navObserver = new IntersectionObserver(
     entries => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        this._searchNavbar.classList.remove("sticky-navbar");   
        this._volunteerDetail.classList.replace('top-28', 'top-56')
      } 
      else {
        this._searchNavbar.classList.add("sticky-navbar");
        this._volunteerDetail.classList.replace('top-56', 'top-28')
      } 
    },
    {
      root: null,
      threshold: 0,
    }
  );

  constructor() {
    super();
  }

  fixNavbar() {
    this._navObserver.observe(this._parentElement);
  }

  
}

export default new lowonganNavbarView();
