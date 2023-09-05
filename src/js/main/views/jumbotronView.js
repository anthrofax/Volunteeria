class jumbotronView {
  _parentElement = document.querySelector(".jumbotron");
  _loadingIndicator = document.querySelector(".loading-indicator");
  _imageIndex = 1;
  _loadingLineWidth = 0;

  imageInterval(url) {
    // const loadingInterval = setInterval(() => {
    //   if (this._loadingLineWidth === 100) {
    //     this._loadingLineWidth = 0;
    //     clearInterval(loadingInterval);
    //   }

    //   this._loadingIndicator.style.width = `${this._loadingLineWidth}vw`;
    //   this._loadingLineWidth += 1
    //   console.log(getComputedStyle(this._loadingIndicator).width)
    // }, 50);

    setInterval(() => {
      // if(Number.parseInt(getComputedStyle(this._loadingIndicator).width) === 100)
      if (this._imageIndex === url.length) this._imageIndex = 0;
      this._parentElement.style.backgroundImage = `url(${url[this._imageIndex]})`;
      this._imageIndex++;
    }, 5000);
  }
}

export default new jumbotronView();
