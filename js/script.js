// # DOM ELEMENTS

const countdownEl = document.getElementById("countdown");
const instructionsEl = document.getElementById("instructions");
const numbersList = document.getElementById("numbers-list");
const answersForm = document.getElementById("answers-form");
const messageEl = document.getElementById("message");

const inputsList = document.querySelectorAll("#answers-form input");

// # RANDOM NUMBER GENERATION

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomNumbers = [];

while (randomNumbers.length < 5) {
  const generatedNumber = generateRandomNumber(1, 50);
  if (!randomNumbers.includes(generatedNumber)) {
    randomNumbers.push(generatedNumber);
    numbersList.innerHTML += `<li>${generatedNumber}</li>`;
  }
}

// # COUNTDOWN

let secondsLeft = 5;

const handleCountdownTick = () => {
  secondsLeft--;
  if (secondsLeft <= 0) {
    secondsLeft = 0;
    clearInterval(clock);
    numbersList.classList.add("d-none");
    answersForm.classList.remove("d-none");
    countdownEl.classList.add("d-none");
    instructionsEl.innerText =
      "Inserisci i numeri precedentemente visualizzati";
  }

  countdownEl.innerText = secondsLeft;
};

const clock = setInterval(handleCountdownTick, 1000);
handleCountdownTick();

// # FORM NUMBERS SUBMIT

let guessedNumbers = [];

answersForm.addEventListener("submit", (e) => {
  guessedNumbers = [];

  e.preventDefault();

  for (let i = 0; i < inputsList.length; i++) {
    const currentInput = inputsList[i];
    const currentValue = parseInt(currentInput.value);
    if (randomNumbers.includes(currentValue)) {
      guessedNumbers.push(currentValue);
    }
  }

  messageEl.classList.remove("text-danger");
  messageEl.innerText =
    guessedNumbers.length > 0
      ? "Hai indovinato i numeri: " + guessedNumbers.join(", ")
      : "Non hai indovinato nessun numero";
});
