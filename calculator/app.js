//alert("Hello Prithvi");
let num = '';

const b1 = document.querySelector('.b1').addEventListener('click', () => {
  num += 1;
  numUpdate();
  console.log(num);
});
const b2 = document.querySelector('.b2').addEventListener('click', () => {
  num += 2;
  numUpdate();
  console.log(num);
});
const b3 = document.querySelector('.b3').addEventListener('click', () => {
  num += 3;
  numUpdate();
  console.log(num);
});
const b4 = document.querySelector('.b4').addEventListener('click', () => {
  num += 4;
  numUpdate();
  console.log(num);
});
const b5 = document.querySelector('.b5').addEventListener('click', () => {
  num += 5;
  numUpdate();
  console.log(num);
});
const b6 = document.querySelector('.b6').addEventListener('click', () => {
  num += 6;
  numUpdate();
  console.log(num);
});
const b7 = document.querySelector('.b7').addEventListener('click', () => {
  num += 7;
  numUpdate();
  console.log(num);
});
const b8 = document.querySelector('.b8').addEventListener('click', () => {
  num += 8;
  numUpdate();
  console.log(num);
});
const b9 = document.querySelector('.b9').addEventListener('click', () => {
  num += 9;
  numUpdate();
  console.log(num);
});
const b0 = document.querySelector('.b0').addEventListener('click', () => {
  num += 0;
  numUpdate();
  console.log(num);
});
const bSum = document.querySelector('.bSum').addEventListener('click', () => {
  num += '+';
  numUpdate();
  console.log(num);
});
const bSub = document.querySelector('.bSub').addEventListener('click', () => {
  num += '-';
  numUpdate();
  console.log(num);
});
const bMul = document.querySelector('.bMul').addEventListener('click', () => {
  num += '*';
  numUpdate();
  console.log(num);
});
const bDiv = document.querySelector('.bDiv').addEventListener('click', () => {
  num += '/';
  if(!num.length) return;
  numUpdate();
  console.log(num);
});

const c = document.querySelector('.c').addEventListener('click', () => {
  num = '';
  numUpdate();
  console.log(num);
});

const equal = document.querySelector('.equal').addEventListener('click', () => {
  
  num = eval(num);
  numUpdate();
  console.log(num);
});



function numUpdate () {
  const inp = document.querySelector('.inp').value = num;
}