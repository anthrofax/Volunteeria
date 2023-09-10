class mainView {
  _parentElement = document.querySelector("main");
  _mainImage = document.querySelector(".main-image");
  _volunteerDetail = document.querySelector(".volunteer-detail");
  _closeDetailVolunteer = document.querySelector(".close-detail-volunteer");
  _daftarLowongan = document.querySelectorAll(".daftar-lowongan");
  _searchBar = document.querySelector(".search-location");
  _lowonganContainer = document.querySelector(".lowongan-container");
  _jumlahLowonganHTML = document.querySelector(".jumlah-lowongan");
  _lowonganBawaan = this._lowonganContainer.innerHTML;
  _lowonganYangDicari = "";
  _jumlahLowonganYangDicari = 0;

  closeVolunteerDetailHandler() {
    this._closeDetailVolunteer.addEventListener("click", (e) => {
      e.preventDefault();
      this._volunteerDetail.classList.replace("block", "hidden");
      this._mainImage.classList.replace("hidden", "flex");
    });
  }

  openDetailVolunteer() {
    this._parentElement.addEventListener("click", (e) => {
      const clickedVolunteer = e.target.closest(".daftar-lowongan");

      if (!clickedVolunteer) return;
      e.preventDefault();

      this._mainImage.classList.replace("flex", "hidden");
      this._volunteerDetail.classList.replace("hidden", "block");
    });
  }

  searchVolunteerByLocation() {
    this._searchBar.addEventListener("keydown", (e) => {
      // Jika tombol yang ditekan selain enter, fungsi tidak dilanjutkan
      if (e.keyCode !== 13) return;
      e.preventDefault();

      // Membersihkan nilai dari property _lowonganYangDicari setiap user melakukan enter pada search bar
      this._lowonganYangDicari = "";
      this._jumlahLowonganYangDicari = 0;

      this._daftarLowongan.forEach((lowongan) => {
        const location = lowongan.querySelector(".location-data").textContent.toLowerCase();

        // Jika kata yang diinputkan pengguna pada search bar ada yang cocok dengan lokasi daftar lowongan, maka code html dari card lowongan yang cocok akan ditambahkan ke property _lowonganYangDicari
        if (location.includes(this._searchBar.value.toLowerCase())) {
          this._lowonganYangDicari += `${lowongan.outerHTML}\n`;
          this._jumlahLowonganYangDicari++;
        }
      });

      // Jika user tidak menginputkan apa apa, maka daftar lowongan yang ditampilkan adalah daftar lowongan bawaan yang disediakan Volunteeria
      if (this._searchBar.value === "") {
        this._lowonganYangDicari = this._lowonganBawaan;
        this._jumlahLowonganHTML.textContent = `Terdapat 6 lowongan yang tersedia saat ini di Volunteeria.`;
      } else if (this._lowonganYangDicari === '') return;
      else this._jumlahLowonganHTML.textContent = `Kami menemukan ${this._jumlahLowonganYangDicari} lowongan volunteer sesuai dengan lokasi yang anda inginkan`;

      this._lowonganContainer.innerHTML = "";
      this._lowonganContainer.insertAdjacentHTML("beforeend", this._lowonganYangDicari);
    });
  }
}

export default new mainView();