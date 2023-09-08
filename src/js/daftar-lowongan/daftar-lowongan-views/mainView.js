class mainView {
  _parentElement = document.querySelector("main");
  _mainImage = document.querySelector(".main-image");
  _volunteerDetail = document.querySelector('.volunteer-detail');
  _closeDetailVolunteer = document.querySelector(".close-detail-volunteer");
  _daftarLowongan = document.querySelectorAll(".daftar-lowongan");

  closeVolunteerDetailHandler() {
    this._closeDetailVolunteer.addEventListener("click", (e) => {
      e.preventDefault();
      this._volunteerDetail.classList.replace("block", "hidden");
      this._mainImage.classList.replace('hidden', 'flex');
    });
  }

  openDetailVolunteer() {
    this._parentElement.addEventListener("click", (e) => {
      const clickedVolunteer = e.target.closest(".daftar-lowongan");

      if (!clickedVolunteer) return;
      e.preventDefault();

      this._mainImage.classList.replace('flex', 'hidden');
      this._volunteerDetail.classList.replace("hidden", "block");
    });
  }
}

export default new mainView();
