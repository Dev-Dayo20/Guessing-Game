// Selecting necessary DOM
let inputarea = document.querySelector("input");
let clickBtn = document.querySelector("button");
let h5 = document.querySelector("h5");
let emoji = document.getElementById("emoji-smile");
let emoji2 = document.getElementById("emoji-frown");

// Lets track the attempts
let attempts = 0;
const maxAttempts = 6;
const timer = 4000;

function handleGuess() {
  let inputNUmber = inputarea.value;

  attempts++; // I increase the attempts count

  // Here we ensure the total attempts
  if (attempts > maxAttempts) {
    h5.innerHTML =
      "You have reached the maximum attempts. Please wait 40 seconds...";
    h5.style.color = "Red";
    inputNUmber.disabled = true;
    clickBtn.disabled = true;

    //Then we set timeout after 40seconds
    setTimeout(() => {
      attempts = 0;
      h5.innerHTML = "";
      inputNUmber.disabled = false;
      clickBtn.disabled = false;
    }, timer);

    return;
  }

  // inputNUmber = Number(inputNUmber);
  let randnum = Math.floor(Math.random() * 3) + 1;

  // Firstly empty the innerHTML of the emoji
  emoji.innerHTML = "";
  emoji2.innerHTML = "";

  if (inputNUmber == randnum) {
    h5.innerHTML = "You win";
    h5.style.color = "Orange";
    emoji.innerHTML = '<i class="las la-grin-stars"></i>';
    emoji.style.color = "Orange";
    emoji.style.fontSize = "40px";
  } else if (inputNUmber == "" || isNaN(inputNUmber)) {
    h5.innerHTML = "Please enter a valid number";
    h5.style.color = "Red";
  } else {
    h5.innerHTML =
      "You guess right but the actual number is " + randnum + ". Try again";
    h5.style.color = "Red";
    emoji2.innerHTML = '<i class="las la-frown"></i>';
    emoji2.style.color = "Red";
    emoji2.style.fontSize = "40px";
  }
}
clickBtn.addEventListener("click", handleGuess);

// Event for the Enter key
inputarea.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    handleGuess();
  }
});
