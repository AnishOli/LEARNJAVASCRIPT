const namber = 400;
console.log(namber);
 const paisa = new Number(300);
 console.log(paisa);
 console.log(paisa.toString().concat("abc"));

 const money = 1123.8989;

 console.log(money.toPrecision(3));

 const hajar = 100000000;
  console.log(hajar.toLocaleString('en-IN'));




  //-------------------Maths-------------------------------


  console.log(Math.abs(-4));
// abs stands for absoulte value which means it converts anynumber into positive number...

console.log(Math.abs(-Infinity));
console.log(Math.abs(Infinity));
console.log(Math.acos(0));
console.log(Math.cbrt(27));
console.log(Math.ceil(4.444));
console.log(Math.round(3.4));


function  getRandomInt (max){
    return Math.floor(Math.random()* max)
}
console.log(getRandomInt(5));


const min =15;
const max = 25;

console.log(Math.floor(Math.random()* (max - min + 1))+ min);

