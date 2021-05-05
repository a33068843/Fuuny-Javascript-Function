let targetword = document.getElementById('target');
let now = '';
let enword = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz !@#$%^&*.';
let count = 0;
let goal;
let wait = 10;

function run() {
  setTimeout(() => {
    let num = Math.floor(Math.random() * enword.length);
    targetword.innerHTML = now + enword[num];
    wait--;
    if (enword[num] === goal[count] || wait == 0) {
      now = now.concat(goal[count]);
      targetword.innerHTML = now;
      count++;
      wait = 10;
    }
    if (count !== goal.length) {
      run();
    }
  }, 50);
}

let button = document.querySelector('.button');
button.addEventListener('click', () => {
  goal = document.querySelector('input').value;
  run();
});

let input = document.querySelector('.input');
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    goal = document.querySelector('input').value;
    run();
  }
});
