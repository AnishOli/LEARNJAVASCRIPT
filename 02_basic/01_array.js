//arrays
const myarray=[0,1,2,3,4,5,6]

// data inside the array is called element 

// The Array object, as with arrays in other programming languages,
//  enables storing a collection of multiple items under a single variable name,
//  and has members for performing common array operations.

const myarray2 = new Array(1, 1, 22, 2, 3, 3, 3, 222122,"ansis")
console.log(myarray2[9]);
console.log(myarray2.length);

//Array Methods-----------

myarray2.push(3)
myarray2.push("Hancykto")
myarray2.push(true)
//push will add element in the array ...


myarray2.pop();
/// pop will delete the last element of array 
myarray2.unshift("Hahhaahaha");
// unshift will help to add the  element in array at the beiginig but there is one--
//  --problem that if we add element in the first
//  --we have to change the all elelemt position which cna create a lot of problem



//console.log(myarray2.includes(22));


const ansArray = myarray2.join();
// join will bind the array and convert the array into string 

console.log(ansArray)

// slice and splice

/*The slice() method of Array instances returns a shallow copy of a portion
 of an array into a new array object selected from start to end (end not included)
  where start and end represent the index of items in that array. The original array will not be modified. */

  const sliceArray = ['Ram', 'Sista', 'Ganesh', 'Hanuman','Shiva'];

  console.log(sliceArray.slice(0,-3));
  // output will be like-- [ 'Ram', 'Sista' ] which  returns new  copy of array but real array is not modified


// for splice 

const  newAraa = sliceArray.splice(2,3);
console.log("A", sliceArray);
console.log(newAraa);


/* NOte :  What is difference between slice and splice ?
Ans : When you use slice the real array is not manipulated and output will be given start element and element before end 
likewise for splice once you use splice then the real array will be manipulated and in real array therer will be
only elemet which are not mention in the splice and next thing that splice will mention start and end element also

*/