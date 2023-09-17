class tipsListView {
    _parentElement = document.querySelector('.tips-scrollable-element');

    newsLoadInit() {
        window.addEventListener('DOMContentLoaded', () => this._renderPost())
    }

    async _renderPost() {
        const res = await fetch('http://localhost:3000/news');
        const newsData = await res.json();

        let tipsNewsTemplate = '';
    
        newsData.forEach(news => {
            tipsNewsTemplate += ` 
            <a target="_blank" href="${news.newsSrc}" class="mini-news group">
                <div class="w-full h-[50%] flex items-center justify-center relative overflow-hidden rounded-t-xl ">
                <img src="${news.gambar}" alt="" class="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2  object-cover scale-150">
                </div>
    
                <div class="mt-3 p-3 group-hover:text-purple1">
                <p class="font-semibold">${news.judul}</p>
                </div>
          </a>\n`
        })

        this._parentElement.innerHTML = tipsNewsTemplate;
        console.log(document.querySelector('main').getBoundingClientRect().height)
    }
}

export default new tipsListView();