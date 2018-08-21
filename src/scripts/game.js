const cards = document.querySelectorAll(".memory-card");

function flipCard() {
    this.classList.toggle("flip");
    console.log(this);
}

cards.forEach(card => card.addEventListener("click", flipCard));
