/* 3 */
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

/* 4.1 */

let xValue = 5;
while (xValue > 0) {
  console.log(xValue);
  xValue -= 0.5;
}
console.log("-----------------------------");
/* 4.2 */
let start = 1;
let finish = 100;
for (let i = start; i <= finish; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

/* 4.3 */

function numInbrac(n) {
  let i = 1;
  while (i <= n) {
    console.log("[" + i + "]");
    i++;
  }
}
numInbrac(5);

/* 4.4 */

function sumPositive(n) {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i;
    i++;
  }
  return sum;
}


console.log("n = 5, sum =", sumPositive(5));
console.log("n = 19, sum =", sumPositive(19));
