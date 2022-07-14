//task-1
/*let total = 0;
for (let i = 0; i <= 20; i++) {
  total += i;
}
console.log(total);
console.log("---------------------");

//task -2
for (let i = 0; i <= 5; i++) {
  console.log(`there are ${i} bottles on the table`);
}
//task -3
for (let j = 0; j <= 20; j++) {
  if (j % 2 === 0) {
    console.log(`${j} is even number`);
  } else {
    console.log(`${j} is odd number`);
  }
}

//task -4
let value = 0;
for (let h = 1; h <= 10; h++) {
  value = h * 9;
  console.log(`${h} * 9 = ${value}`);
}

//task 4 Bonus

let table = 0;
for (let t = 1; t <= 10; t++) {
  for (let i = 1; i <= 10; i++) {
    table = t * i;

    console.log(`${t} * ${i} = ${table}`);
  }
}

//task -5
for (let k = 0; k < 100; k++) {
  if (k % 3 === 0 && k % 5 === 0) {
    console.log("FizzBuzz");
  } else if (k % 3 === 0) {
    console.log("Fizz");
  } else if (k % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(k);
  }
}

//task -6
let sum = 0;
for (let s = 0; s < 1000; s++) {
  if (s % 3 === 0 || s % 5 === 0) {
    sum += s;
  }
}
console.log(sum);

//Bonus

//task - 7
let tableOfHundrerd = 0;
for (let i = 1; i <= 10; i++) {
  tableOfHundrerd = 100 * i;
  console.log(tableOfHundrerd);
}
console.log("----------------------");
let tableOfTwo = 0;
for (let i = 1; i <= 5; i++) {
  tableOfTwo = 2 * i;
  console.log(tableOfTwo);
}
console.log("----------------------");
let tableOfThree = 0;
for (let i = 1; i <= 5; i++) {
  tableOfThree = 3 * i;
  console.log(tableOfThree);
}
console.log("----------------------");

for (let i = 9; i >= 0; i--) {
  console.log(i);
}
console.log("----------------------");

let threeTimesk = " ";
for (let k = 1; k < 5; k++) {
  //let threeTimesk = [k, k, k];
  //console.log(k);
  for (let j = 1; j < 4; j++) {
    threeTimesk += k + " ";
  }
}
console.log(threeTimesk);
console.log("----------------------");

let threeTimesStr = " ";
let threeTimesnewStr = " ";
for (let z = 0; z < 5; z++) {
  threeTimesStr += z + " ";

  for (let j = 1; j < 4; j++) {
    threeTimesnewStr = threeTimesStr.repeat(j);
  }
}
//console.log(threeTimesStr);
console.log(threeTimesnewStr);

*/
//task - 8

let word = "madam";
//word = "hello";
let reverseWord = "";
for (let i = word.length - 1; i >= 0; i--) {
  reverseWord += word[i];
}

console.log(reverseWord);
console.log(word);
if (reverseWord === word) {
  console.log("Is a Palindrome");
} else {
  console.log("is  not a Palindrome");
}
//console.log(reverseWord);
console.log("----------------------");
