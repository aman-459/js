let btns = document.querySelectorAll('.btn');
let msg = document.querySelector(".msg");

// msg.disabled = true;
let turnO = true;
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resultWin = (val) => {
  msg.textContent = `Winner ${val}`;
  console.log(val);
}

const resultDraw = () => {
  msg.textContent = "Draw";
  
}

const checkWinner = () => {
  for(let pattern of winPatterns) {
    let pos1Val = btns[pattern[0]].innerText;
    let pos2Val = btns[pattern[1]].innerText;
    let pos3Val = btns[pattern[2]].innerText;
    console.log(count);

    if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if(pos1Val === pos2Val && pos1Val === pos3Val) {
      resultWin(pos1Val);
        console.log("winner", pos1Val);
      } else {
        if(count === 9) {
        resultDraw();
        }
      }
    }
  }
  count++;
};

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if(turnO) {
      btn.textContent = 'O';
      turnO = false;
    } else {
      btn.textContent = 'X';
      turnO = true;
    }
    btn.disabled = true;
    checkWinner();
  });
});






