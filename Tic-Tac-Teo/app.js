let btns = document.querySelectorAll('.btn');

let turnO = true;

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log('btn clicked');
    if(turnO) {
      console.log("O");
      btn.textContent = 'O';
      turnO = false;
    } else {
      console.log("X");
      btn.textContent = 'X';
      turnO = true;
    }
    btn.disabled = true;
  });
})