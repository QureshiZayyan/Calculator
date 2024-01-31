
console.log('welcome to MyCalculator')

let string = '';
const btn = document.querySelectorAll('.btn');

Array.from(btn).forEach((button) => {
   button.addEventListener('click', (item) => {

      if (item.target.innerHTML == '=') {
         string = eval(string)
         document.querySelector('.cal').value = string;
      }

      else if (item.target.innerHTML == 'C') {
         string = '';
         document.querySelector('.cal').value = string;
      }

      else {
         console.log(item.target);
         string = string + item.target.innerHTML;
         document.querySelector('.cal').value = string;
      }
   });
});
