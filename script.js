const suits = ["♠", "♣", "♥", "♦"];
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const cardGrid = document.getElementById("card-grid");
const resetBtn = document.getElementById("reset-btn");

// Function to create the deck of cards
function createDeck() {
  suits.forEach(suit => {
    ranks.forEach(rank => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.classList.add(suit === "♥" || suit === "♦" ? "red" : "black");
      card.textContent = `${rank}${suit}`;

      // Add click event to hide the card
      card.addEventListener("click", () => {
        card.classList.add("hidden");
      });

      cardGrid.appendChild(card);
    });
  });
}

// Function to reset the deck
function resetDeck() {
  const allCards = document.querySelectorAll(".card");
  allCards.forEach(card => {
    card.classList.remove("hidden");
  });
}

// Initialize the deck
createDeck();

// Add event listener to the reset button
resetBtn.addEventListener("click", resetDeck);
