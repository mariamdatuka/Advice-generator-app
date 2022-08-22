const adviceID = document.querySelector(".id");
const advice = document.querySelector(".queto");
const button = document.querySelector(".btn");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice").then((res) =>
    res.json().then((data) => {
      adviceID.innerHTML = `${data.slip.id}`;
      advice.innerHTML = `${data.slip.advice}`;
    })
  );
}

button.addEventListener("click", getAdvice);
