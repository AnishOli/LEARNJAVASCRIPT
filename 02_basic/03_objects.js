// singleton
// object  liiterals
const mySymb = Symbol("key 1");
const AniUser ={
    name: "Anish",
    "last Name" : "Oli",
    age: 25,
    [mySymb] :"Happy", // this is done to make this as symbol 
    location:"Bardiya",
    gmail: "Anish89@gmail.com",
    LoogedIn: false,

    lastLoggindays: ["Sunday", 'Monday']

}

console.log(AniUser.age);// not good way to access the data from object...
console.log(AniUser["age"]);
console.log(AniUser["last Name"]);
console.log(AniUser[mySymb]);
console.log(typeof AniUser[mySymb]);

AniUser.age = 30 ;
console.log(AniUser["age"]);
console.log(AniUser);



