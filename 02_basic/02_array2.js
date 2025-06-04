const God = ["Ram", "Sita", "Hanuman","Shiva"]
const politial = ["Anish", "Anan", "Wasd","sewd"];

 //God.push(politial);
// console.log(God);
const addBoth = God.concat(politial);
// if you are using concat then you give another  new array it doesnot worrk in existing array
//console.log(addBoth);


//Spread Operators : it also do the samething but synatx for spread operator is  [...nameof array,...another array]

const allArray = [...God,...politial,...addBoth];
//console.log(allArray);

console.log(Array.isArray("Anish"));
console.log(Array.from("Anish"));
// Array.from will convert anything into array  
console.log(Array.from("123"));

console.log(Array.from ({name:"Anish",
    age: 23
}))// not right way ...

// if there is object and you want to convert it into array then you should use Object.value 
console.log(Object.values({name:"Anish",
    age: 23
}))


const goal1 = 20;
const goal2 = 30;
const goal3 = 40;

console.log(Array.of(goal1,goal2,goal3));



