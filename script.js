const suits = ["♠", "♣", "♦", "♥"];
const ranks = [
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
  "2",
];
const cardGrid = document.getElementById("card-grid");
const resetBtn = document.getElementById("reset-btn");

// Function to create the deck of cards
function createDeck() {
  let isPortrait = window.matchMedia("(max-aspect-ratio: 4/5)").matches;
  cardGrid.innerHTML = ""; // Clear existing cards

  if (isPortrait) {
    // Use CSS Grid properly
    cardGrid.style.gridTemplateColumns = "repeat(4, 1fr)"; // 4 fixed columns
    cardGrid.style.gridTemplateRows = "repeat(13, auto)"; // 13 rows
    cardGrid.style.overflowY = "auto"; // Enable scrolling
    cardGrid.style.height = "90vh"; // Prevent shrinking

    ranks.forEach((rank) => {
      suits.forEach((suit, suitIndex) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add(suit === "♥" || suit === "♦" ? "red" : "black");
        card.textContent = `${rank}${suit}`;

        // Each suit stays in its column
        card.style.gridColumn = suitIndex + 1;

        // Click & Double Click Events
        card.addEventListener("click", () => {
          if (card.classList.contains("my-card")) {
            card.classList.remove("my-card");
          } else if (card.classList.contains("disabled")) {
            card.classList.remove("disabled");
          } else {
            card.classList.add("disabled");
          }
        });

        card.addEventListener("dblclick", () => {
          card.classList.remove("disabled");
          card.classList.add("my-card");
        });

        cardGrid.appendChild(card);
      });
    });
  } else {
    // Landscape Mode: Default 13 columns, 4 rows
    cardGrid.style.gridTemplateColumns = "repeat(13, 1fr)";
    cardGrid.style.gridTemplateRows = "repeat(4, 1fr)";
    cardGrid.style.overflowY = "hidden"; // Prevent scrolling in landscape
    cardGrid.style.height = "80vh"; // Fit into one screen

    suits.forEach((suit) => {
      ranks.forEach((rank) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add(suit === "♥" || suit === "♦" ? "red" : "black");
        card.textContent = `${rank}${suit}`;

        // Click & Double Click Events
        card.addEventListener("click", () => {
          if (card.classList.contains("my-card")) {
            card.classList.remove("my-card");
          } else if (card.classList.contains("disabled")) {
            card.classList.remove("disabled");
          } else {
            card.classList.add("disabled");
          }
        });

        card.addEventListener("dblclick", () => {
          card.classList.remove("disabled");
          card.classList.add("my-card");
        });

        cardGrid.appendChild(card);
      });
    });
  }
}

// Function to reset the deck
function resetDeck() {
  document.getElementById("card-grid").innerHTML = ""; // Clear grid
  createDeck(); // Recreate with correct layout
}

// Initialize the deck
createDeck();

// Add event listener to the reset button
resetBtn.addEventListener("click", resetDeck);

// Handle orientation changes
window.addEventListener("resize", resetDeck);
