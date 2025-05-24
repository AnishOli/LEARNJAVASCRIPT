// Primitive 
 /*
 7 types :  String , boolean , null, undefined, boolean, Symbol , BigInt
 */

 const score = 100;
 const scorevalue = 100.3;
const  isLoggedIn = false;
const outsideTemp = null;

const id = Symbol("123");
const rollNum = Symbol("123");

console.log(id === rollNum);
//Reference or Non Primitive dataTypes
/*
Array,  Objects, Functions 
*/

const heros = ["Anish","Aashish","Abinash"]

let myDetail={
    name:"Anish",
    age : 24,

}

const myfunction =function(){
    console.log("Hello World")

}
myfunction();

const bigNumber = 112112121212113213123333122n;

console.log(typeof bigNumber);
console.log(typeof myfunction);
console.log(typeof myDetail);
console.log(typeof heros);
console.log(typeof outsideTemp);

