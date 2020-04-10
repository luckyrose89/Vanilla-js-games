/*
topics covered:
- push
-querySelector
-setAttribute
-getAttribute
-createElement
-appendChild
-Math.random()
-sort()
-for loops
*/
// Select game grid
const gameGrid = document.querySelector(".grid");
let cardsChosen = [];
let cardsChosenId = [];
let matchesMade = 0;

const cardArray = [
  {
    name: "disinfectant",
    src: "images/disinfectant.png"
  },
  {
    name: "disinfectant",
    src: "images/disinfectant.png"
  },
  {
    name: "distance",
    src: "images/distance.png"
  },
  {
    name: "distance",
    src: "images/distance.png"
  },
  {
    name: "handwash",
    src: "images/handwash.png"
  },
  {
    name: "handwash",
    src: "images/handwash.png"
  },
  {
    name: "mask",
    src: "images/mask.png"
  },
  {
    name: "mask",
    src: "images/mask.png"
  },
  {
    name: "thermometer",
    src: "images/thermometer.png"
  },
  {
    name: "thermometer",
    src: "images/thermometer.png"
  },
  {
    name: "virus",
    src: "images/virus.png"
  },
  {
    name: "virus",
    src: "images/virus.png"
  }
];

// randomize card array
cardArray.sort(() => 0.5 - Math.random());

// set image for selected cards
const setImage = function(dataId, container) {
  container.style.backgroundImage = `url("${cardArray[dataId].src}")`;
  cardsChosen.push(cardArray[dataId].name);
  cardsChosenId.push(dataId);
};

// Add played class to matched cards
const addPlayedClass = function(idOne, idTwo) {
  var cards = Array.prototype.slice.call(document.querySelectorAll(".card"));
  cards[idOne].classList.add("played");
  cards[idTwo].classList.add("played");
};

// Reset cards that do not match
const resetCards = function(idOne, idTwo) {
  var cards = Array.prototype.slice.call(document.querySelectorAll(".card"));
  cards[idOne].style.backgroundImage = "url('images/card-back.png')";
  cards[idTwo].style.backgroundImage = "url('images/card-back.png')";
};

// display modal message on successful match
const displayModal = function() {};

// check results for chosen cards
const checkChosenCards = function() {
  let optionOne = cardsChosenId[0];
  let optionTwo = cardsChosenId[1];
  if (cardsChosen[0] === cardsChosen[1]) {
    openModal(cardsChosen[0]);
    addPlayedClass(optionOne, optionTwo);
    matchesMade += 1;
    cardsChosen = [];
    cardsChosenId = [];
    if (matchesMade === cardArray.length / 2) {
      setTimeout(openModal("success"), 700);
    }
  } else {
    resetCards(optionOne, optionTwo);
    cardsChosen = [];
    cardsChosenId = [];
  }
};

// Set up a game board
for (let i = 0; i < cardArray.length; i++) {
  var card = document.createElement("div");
  card.style.backgroundImage = "url('images/card-back.png')";
  card.classList.add("card");
  card.setAttribute("data-id", i);
  gameGrid.appendChild(card);
}

document.addEventListener("click", function(event) {
  //check if event target matches card
  if (
    !event.target.classList.contains("card") ||
    event.target.classList.contains("played")
  )
    return;

  //get data id of selected card
  let dataId = event.target.getAttribute("data-id");

  // use data id to reveal image
  setImage(dataId, event.target);

  // Check if the player has chose two cards already
  if (cardsChosen.length === 2) {
    setTimeout(checkChosenCards, 500);
  }
});
