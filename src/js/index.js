const cardRating = document.querySelectorAll('.card-rating');
const dotSlider = document.querySelector('.dot-slider');

cardRating.forEach((card, i) => {
    card.style.transform = `translateX(${100 * i}%)`;

    const circle = '<button class="w-3 h-3 bg-palewhite rounded-full"></button>';

    dotSlider.insertAdjacentHTML('beforeend', circle);
    // if (dotSlider.children[i].classList.contains('card-active')) dotSlider.children[i].classList.add('')
    // console.log(dotSlider.children[i]);

    const circleElement = [...dotSlider.children];

    if (card.classList.contains('card-active')) {
        circleElement[i].classList.add('bg-slate-100');
        card.classList.remove('hidden');
    } 

    console.log(circleElement[i])
})


