const cardRating = document.querySelectorAll('.card-rating');

cardRating.forEach((card, i) => {
    console.log(i, card);
    card.style.transform = `translateX(${100 * i}%)`;
})