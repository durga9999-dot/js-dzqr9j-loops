// Import stylesheets
import './style.css';

// Write Javascript code!
const numbers = [23, 45, 56, 87, 98, 22, 12, 98, 10, 24, 23, 14, 31];
for (let i = 0; i < numbers.length; i++) {
  console.log(i, numbers[i]);
}

// loop2
const numbers1 = [29, 45, 56, 87, 98, 22, 12, 98, 10];
for (let idx of numbers1) {
  console.log(idx);
}

// loop3

const numbers2 = [23, 45, 56, 87, 98, 22, 12, 98, 10];

let idx = 0;
for (const num of numbers) {
  console.log(idx, num);
  ++idx;
}

// loop4
const numbers3 = [23, 45, 56, 87, 98, 22, 12, 98, 10, 24, 23, 14, 31];

numbers3.forEach((num) => {
  console.log(num);
});
