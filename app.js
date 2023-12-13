let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#resetBtn');
let newGameBtn = document.querySelector('#newBtn');
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let mainContainer = document.querySelector('main');
let turnX = true; //playerX, player)


const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congrats, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
}
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val && pos2Val && pos3Val) { // none of them are empty
      if (pos1Val == pos2Val && pos3Val == pos2Val) {
        showWinner(pos1Val);
        disableBoxes();
        mainContainer.classList.add("hide");
      }
    }
  }
}
const resetGame = () => {
  turnX = true;
  enableBoxes();
  msgContainer.classList.add("hide");
  mainContainer.classList.remove("hide");
}
boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (turnX) {
      //playerX
      box.innerText = "O";
    } else {
      //playerO
      box.innerText = "X";
    }
    box.disabled = true;
    turnX = !turnX;
    checkWinner();
  });
});
resetBtn.addEventListener('click', resetGame);
newGameBtn.addEventListener('click', resetGame);