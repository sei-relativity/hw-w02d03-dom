const solution = document.createElement("h3");

const halfIt = () => {
  const input = document.querySelector("#half-input").value;
  const result = input / 2;
  console.log(result);
  solution.innerText = `The result is ${result}`;
  document.querySelector("#solution").appendChild(solution);
};

const fraction = () => {
  const percentInput1 = document.querySelector("#percent1-input").value;
  const percentInput2 = document.querySelector("#percent2-input").value;
  const result = (percentInput1 / percentInput2) * 100;
  solution.innerText = `The result is % ${result}`;
  document.querySelector("#solution").appendChild(solution);
};

const area = () => {
  const input = document.querySelector("#area-input").value;
  const result = Math.PI * input * input;
  console.log(result);
  solution.innerText = `The result is ${result}`;
  document.querySelector("#solution").appendChild(solution);
};

document.querySelector("#half-button").addEventListener("click", halfIt);
document.querySelector("#percent-button").addEventListener("click", fraction);
document.querySelector("#area-button").addEventListener("click", area);

document.querySelector("#half-input").addEventListener("keypress", halfIt);

document
  .querySelector("#percent2-input")
  .addEventListener("keypress", fraction);

document.querySelector("#area-input").addEventListener("keypress", area);
