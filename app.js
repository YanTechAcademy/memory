// the selector object
const selectors = {
  boardContainer: document.querySelector(".board-container"),
  board: document.querySelector(".board"),
  moves: document.querySelector(".move"),
  timer: document.querySelector(".time"),
  start: document.querySelector(".btn-start"),
  win: document.querySelector(".win"),
};

// game state object
// it helps us to capture the state of the game

const state = {
  gameStarted: false,
  flippedCards: 0,
  totalFlips: 0,
  totalTime: 0,
  loop: null,
};

// const generateGame = ()=> {

// }

function generateGame() {
  const dimensions = selectors.board.getAttribute("data-dimension");

  // making sure that the dimension will always be an even number
  if (dimensions % 2 !== 0) {
    throw new Error("The Dimension of the board must be an even number");
  }

  const icons = ["🐴", "🦁", "🐘", "🦅", "🐟", "🐩", "🦓", "🐍", "🐒", "🐄"];

  const picks = pickRandom(icons, (dimensions * dimensions) / 2);
  const items = shuffle([...picks, ...picks]);

  console.log(items);

  // const cards = ``
  // items.forEach((item) => {});

  const cards = `

      <div class="board" style="grid-template-columns: repeat(${dimensions}, auto); ">

        ${items
          .map(
            (item) => `
          <div class="card">
            <div class="card-front"></div>
            <div class="card-back">${item}</div>
          </div>
        `
          )
          .join("")}

      </div>
  `;

  const parser = new DOMParser().parseFromString(cards, "text/html");

  selectors.board.replaceWith(parser.querySelector(".board"));
}

const pickRandom = (array, dimension) => {
  const clonedArray = [...array];

  randomPicks = [];

  for (let i = 0; i < dimension; i++) {
    const randomIndex = Math.floor(Math.random() * clonedArray.length);

    randomPicks.push(clonedArray[randomIndex]);

    clonedArray.splice(randomIndex, 1);
  }

  return randomPicks;
};

// the shuffle function definition
function shuffle(a) {
  // cloning the orignal array so that it remains unmodified
  const clonedArray = [...a];

  //  looping backward the cloned array
  for (let index = clonedArray.length - 1; index > 0; index--) {
    // generating a random array that will act as the new address

    // of the element we want to shuffle
    const j = Math.floor(Math.random() * index);

    // swapping the element at position i with the one at position j
    const container = clonedArray[index];
    clonedArray[index] = clonedArray[j];

    clonedArray[j] = container;
  }

  // returning the shuffled array
  return clonedArray;
}

generateGame();

let numbers = [2, 3, 4, 5];

newArray = numbers.map(function (n) {
  return n * 2;
});

console.log(newArray);
