let boxes = document.querySelectorAll(".box");
let msg = document.querySelector('.win');
let text = document.querySelector(".texttowind");

let turnO = true;
const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === "") {
      if (turnO) {
        box.innerText = "O";
        box.style.color = "#f5a623";
        box.style.textShadow = "0 1px 1px rgba(245, 166, 35, 0.6), 0 4px 8px rgba(245, 166, 35, 0.6), 0 8px 8px rgba(245, 166, 35, 0.6)";
        turnO = false;
      } else {
        box.innerHTML = "X";
        box.style.color = "#4a90e2";
        box.style.textShadow = "0 4px 8px rgba(74, 144, 226, 0.6),0 4px 8px rgba(74, 144, 226, 0.6)";
        turnO = true;
      }
      box.disabled = true;

      checkwinner();
    }
  });
});

const checkwinner = () => {
  let winnerFound = false;

  for (let pattern of winpatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        winnerFound = true;
        msg.style.display = "flex";
        text.textContent = `${pos1val} is the winner`;

        if (pos1val === 'X') {
          text.style.color = "#4a90e2";
          text.style.textShadow = "0 4px 8px rgba(74, 144, 226, 0.6),0 4px 8px rgba(74, 144, 226, 0.6)";
        } else {
          text.style.color = "#f5a623";
          text.style.textShadow = "0 1px 1px rgba(245, 166, 35, 0.6), 0 4px 8px rgba(245, 166, 35, 0.6), 0 8px 8px rgba(245, 166, 35, 0.6)";
        }
        break;
      }
    }
  }

  // Check for a draw if no winner is found
  if (!winnerFound) {
    let allFilled = true;

    boxes.forEach((box) => {
      if (box.innerText === "") {
        allFilled = false;
      }
    });

    if (allFilled) {
      msg.style.display = "flex";
      text.textContent = "It's a draw!";
      text.style.color = "#ff0000";
      text.style.textShadow = "0 4px 8px rgba(255, 0, 0, 0.6)";
    }
  }
};

function reset() {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
}

function again() {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    msg.style.display = "none";
  });
}
