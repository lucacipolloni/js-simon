// # DOM ELEMENTS

const countdownEl = document.getElementById("countdown");
const instructionsEl = document.getElementById("instructions");
const numbersList = document.getElementById("numbers-list");
const answersForm = document.getElementById("answers-form");

// # COUNTDOWN

let secondsLeft = 5;

const handleCountdownTick = () => {
  secondsLeft--;
  if (secondsLeft <= 0) {
    secondsLeft = 0;
    clearInterval(clock);
    answersForm.classList.remove("d-none");
    countdownEl.classList.add("d-none");
    instructionsEl.innerText =
      "Inserisci i numeri precedentemente visualizzati";
  }

  countdownEl.innerText = secondsLeft;
};

const clock = setInterval(handleCountdownTick, 1000);
handleCountdownTick();
