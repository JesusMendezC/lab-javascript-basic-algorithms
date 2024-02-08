// Iteration 1: Names and Input
const hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Jane";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops
let hacker1Capitalized = '';
for (let i = 0; i < hacker1.length; i++) {
  hacker1Capitalized += hacker1[i].toUpperCase();

  if (i !== hacker1.length - 1) {
    hacker1Capitalized += " ";
  }
}

console.log(hacker1Capitalized);

let hacker2Reversed = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reversed += hacker2[i];
}

console.log(hacker2Reversed);

//Bonus 1

const longText = `
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

		Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

		Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
`.replace(/[^a-zA-Z0-9 \n]/g, "");

const arr = longText.split(/[\n ]+/);

let counter = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "consequat") {
    counter++;
  }
}

console.log(counter);

//Bonus 2

const phrase = "A man, a plan, a canal, Panama!";

let filteredPhrase = '';

for (let i = 0; i < phrase.length; i++) {
	const char = phrase[i].toLowerCase();

	if (char >= 'a' && char <= 'z' || char >= '0' && char <= '9') {
		filteredPhrase += char;
	}
}

if (filteredPhrase === filteredPhrase.split('').reverse().join('')) {
	console.log('Palindrome');
} else {
	console.log('Not a palindrome');
}