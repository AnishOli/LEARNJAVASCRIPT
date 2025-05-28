const userName = "Anish";
const age = 24;

//Best way to use this synatx backticks ``

//console.log(`Hello My name is ${userName.toUpperCase()} and my age is ${age*3}`);

const Hawa = new String("Anish-oli")

// console.log(Hawa.charAt(3));
// console.log(Hawa.indexOf('i'));


const newString = Hawa.substring(1,6);
console.log(newString);

const anoStirng = Hawa.slice(-6, 8);
console.log(anoStirng);
// use of trim is actually for the not wanting extra space

const coffee = "    ANish    ";
console.log(coffee);
console.log(coffee.trim());
console.log(coffee.trimStart());
console.log(coffee.trimEnd());

const happy = new String("Sad");
console.log(happy)
console.log(happy.valueOf());


const url = "https://anisholi534@google.com/Anish%30Oli"

console.log(url.replace('%30',"sad"))
console.log(url.includes('Sad'))

console.log(Hawa.split("-"))

console.log(url.split('/'))

const apple = "Anish";
const ball= 23;
 console.log(`the person who name is ${apple}  and he is ${ball} years old`);

const cat = "I am don in the underworld  "
 console.log(cat.trimEnd())

