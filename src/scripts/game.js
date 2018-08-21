const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add("flip");
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {
        hasFlippedCard = false;
        secondCard = this;

        if (firstCard.dataset.animal === secondCard.dataset.animal) {
            // it's a match
            firstCard.removeEventListener("click", flipCard);
            secondCard.removeEventListener("click", flipCard);
        } else {
            setTimeout(() => {
                firstCard.classList.remove("flip");
                secondCard.classList.remove("flip");
            }, 1500);
        }
    }
}

cards.forEach(card => card.addEventListener("click", flipCard));
