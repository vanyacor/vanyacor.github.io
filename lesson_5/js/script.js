/* function ll() {

  let n = 10;

  nextPrime:
    for (let i = 2; i <= n; i++) {

      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
      console.log(i);
    }
} */

/* let news = function (browser) {
  if (browser == "Edge") {
    alert("You've got the edge!");
  } else if (browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera") {
    alert("Okay we support these browsers too");
  } else {
    alert('We hope that this page looks ok!');
  }
};
 */

/* const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
  case 0:
    alert('Вы ввели число 0');
    break;
  case 1:
    alert('Вы ввели число 1');
    break;
  case 2:
  case 3: 
  alert('Вы ввели число 2, а может и 3');
  break;
  default: alert ("okey");
}
 */
/* 
function checkAge(age) {
  return (age > 18? true : confirm('Родители разрешили?'));
  
}
checkAge(10); */

/* function min(a, b) {
  return a < b ? a : b;
};

let mon = min(10, 5);
alert(mon); */

/* function pow (x, n) {
  let N = x;
  for (let i = 1; i < n; ++i) {
    x *= N;
  }
  return x;
};

let nin = pow(1, 10);
console.log(nin); */
/* 
let fun = (qestion, yes, no) => {
  if (confirm(qestion)) yes()
  else no();
};

fun("Are you agree?",
  () => alert("You are agree."),
  () => alert("You cancelled action.")
); */