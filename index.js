let display=document.querySelector('.counter-display');
let btns= document.querySelector('.buttons');

btns.addEventListener('click', counter);

const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter;}
  })();

const sub = (function () {
    let counter = 0;
    return function () {counter -= 1; return counter;}
  })();
    

let value = 0;
function counter(e) {
  let btn = e.target.id;
  if (btn === 'increment') {
    value = add();
  } else if (btn === 'decrement') {
    value = sub();
  } else {
    value = 0;
  }

    display.textContent = value;
}