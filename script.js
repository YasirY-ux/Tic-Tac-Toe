let boxes = document.querySelectorAll(".box");
let msg   = document.querySelector('.win');
let text = document.querySelector(".texttowind")

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

boxes.forEach((boxes) => {
  boxes.addEventListener("click", () => {
    if (turnO) {
      boxes.innerText = "O";
      turnO = false;
    } else {
      boxes.innerHTML = "X";
      turnO = true;
    }
    boxes.disabled = true;

    checkwinner();
  });
});
const checkwinner = () => {
  for (let pattern of winpatterns) {
   let pos1val = boxes[pattern[0]].innerText;
   let pos2val = boxes[pattern[1]].innerText;
   let pos3val = boxes[pattern[2]].innerText;
     
    if(pos1val !="" && pos2val !="" && pos3val!="")
    if(pos1val=== pos2val && pos2val === pos3val){
        msg.style.display ="flex"
        text.textContent = `${pos1val} is a winner`
    }
  }
};

function reset(){
    boxes.forEach((boxes) =>{
        boxes.innerText = "";
        boxes.disabled = false;
    })
}

function again(){
    boxes.forEach((boxes) =>{
        boxes.innerText = "";
        boxes.disabled = false;
        msg.style.display ="none"
    })
}

