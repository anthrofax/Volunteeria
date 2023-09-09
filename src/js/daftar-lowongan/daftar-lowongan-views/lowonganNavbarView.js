import Navbar from "../../views/Navbar.js";

class lowonganNavbarView extends Navbar {
  _searchNavbar = document.querySelector('.search-nav');
  _volunteerDetail = document.querySelector('.volunteer-detail');
  _volunteerDetailParent = document.querySelector('.volunteer-detail-parent');
  _navObserver = new IntersectionObserver(
     entries => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        this._searchNavbar.classList.remove("sticky-navbar");   
        this._volunteerDetailParent.classList.replace('h-[95%]', 'h-[70%]')
      } 
      else {
        this._searchNavbar.classList.add("sticky-navbar");
        this._volunteerDetailParent.classList.replace('h-[70%]', 'h-[95%]')
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
