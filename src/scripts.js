// let students = ['詠晴', '品妍', '宥蓁', '柏睿', '宥廷', '柏宇'];
// let studentsCheck = [];

// for (let i = 0; i < students.length; i++) {
//   let temp = Math.floor(Math.random() * students.length);

//   while (studentsCheck[temp] === 1) {
//     temp = Math.floor(Math.random() * students.length);
//   }

//   studentsCheck[temp] = 1;
//   console.log(`${temp + 1} 號 ${students[temp]} 有沒有到?`);
// }

// let students = ['詠晴', '品妍', '宥蓁', '柏睿', '宥廷', '柏宇'];

// // 產生隨機數字的 function
// function getRandomInteger(minimum, maximum) {
//   let min = Math.ceil(minimum);
//   let max = Math.floor(maximum);
//   return Math.floor(Math.random() * (max - min) + min);
// }

// // 先複製 students 陣列
// let names = students.slice();

// // 隨機唱名
// while (names.length > 0) {
//   let randomIndex = getRandomInteger(0, names.length);
//   let randomName = names.splice(randomIndex, 1)[0];
//   console.log(randomName);
// }

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
  run();
});

let input = document.querySelector('.input');
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    goal = document.querySelector('input').value;
    run();
  }
});

// let word;
// function getword() {
//   let word = document.getElementById('typeValue').value;

//   //targetword.innerHTML = word;
//   console.log(word);
// }

// let form = document.querySelector('form');
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
// });

// let input = document.querySelector('.iinput');
//   input.addEventListener('click' () => {
//   getword();
// });
