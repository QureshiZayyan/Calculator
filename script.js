
console.log('welcome to MyCalculator')

let string = '';
const btn = document.querySelectorAll('.btn');
let cal = document.querySelector('.cal');

Array.from(btn).forEach((button) => {
   button.addEventListener('click', (item) => {

      if (item.target.innerHTML == '=') {
         string = eval(string)
         cal.value = string;
      }

      else if (item.target.innerHTML == 'C') {
         string = '';
         cal.value = string;
      }

      else if (item.target.innerHTML == 'E' || item.target.innerHTML == '+/-') {
         string = 'undefined';
         cal.value = string;
      }

      else if (string[0] == '+' || string[0] == '-' || string[0] == '*' || string[0] == '/') {
         string = '';
         cal.value = string;
      }

      else {
         string = string + item.target.innerHTML;
         cal.value = string;
      }
   });
});
