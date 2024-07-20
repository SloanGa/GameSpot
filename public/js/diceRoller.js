const buttonReplay = document.createElement("button");
buttonReplay.className = "buttonReplay";

const play = document.querySelector("#play");

const range = document.querySelector("#dices");

const form = document.querySelector(".form");

const appDiv = document.querySelector("#app");
const divLeft = document.querySelector("#player");
const divRight = document.querySelector("#dealer");

const divPlayer = document.querySelector("#player");
const divDealer = document.querySelector("#dealer");

const score = document.querySelector("#score");

const rangeValue = document.querySelector(".dices_value");

const scoreL = document.createElement("div");
scoreL.className = "scoreL";
score.appendChild(scoreL);
scoreL.textContent = 0;

const scoreR = document.createElement("div");
scoreR.className = "scoreR";
score.appendChild(scoreR);
scoreR.textContent = 0;

rangeValue.textContent = range.value;

let howManyDices = range.value;
let scorePlayer = [];
let scoreDealer = [];
let countL = 0;
let countR = 0;

const letsplay = () => {
  divPlayer.innerHTML = ``;
  divDealer.innerHTML = ``;
  scorePlayer = [];
  scoreDealer = [];
  for (let counter = 0; counter < howManyDices; counter++) {
    getRandomDice(divPlayer, divDealer);
  }

  displayScore();
};

const getRandomDice = (left, right) => {
  const diceElement = document.createElement("div");
  diceElement.className = "dice";
  const diceElementBis = document.createElement("div");
  diceElementBis.className = "dice";

  left.appendChild(diceElement);
  right.appendChild(diceElementBis);

  const numberDice = Math.floor(Math.random() * 6) + 1;
  const numberDiceBis = Math.floor(Math.random() * 6) + 1;
  diceElement.style.backgroundPosition = "right " + numberDice * 100 + "px bottom 0px";
  diceElementBis.style.backgroundPosition = "right " + numberDiceBis * 100 + "px bottom 0px";

  scorePlayer.push(numberDice);
  scoreDealer.push(numberDiceBis);

  form.appendChild(buttonReplay);
  buttonReplay.textContent = "Rejouer";
};

const displayScore = () => {
  if (scorePlayer.length && scoreDealer.length !== 0) {
    const score1 = scorePlayer.reduce((acc, n) => acc + n);
    const score2 = scoreDealer.reduce((acc, n) => acc + n);

    if (score1 > score2) {
      countR++;
      scoreR.textContent = countR;
    } else if (score1 < score2) {
      countL++;
      scoreL.textContent = countL;
    }
  }
};

range.addEventListener("input", (e) => {
  howManyDices = e.target.value;
  rangeValue.textContent = range.value;
});

play.addEventListener("click", (e) => {
  e.preventDefault();
  letsplay();
});

buttonReplay.addEventListener("click", () => {
  window.location.reload();
});
