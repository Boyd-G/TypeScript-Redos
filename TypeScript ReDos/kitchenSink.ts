/* Name */
let myName: string = 'Boyd';
/*Number of states*/
const numStates: number = 50;
/*Sum of 5 and 4*/
let sum: number = 5 + 4;
/*item 7*/
function sayHello(): void {
  alert('Hello World!');
}

sayHello();
/*item 8*/
function checkAge(name: string, age: number): void {
  if (age < 21) {
    alert('Sorry ' + name + ", you aren't old enough to view this page!");
  }
}

checkAge('Chazz', 21);
checkAge('Alice', 27);
checkAge('Jorge', 18);
checkAge('Jack', 17);
/*item 9*/
let veggies: Array<string>;
veggies = ['brocolli', 'potato', 'corn', 'onion', 'garlic'];

let i: number = 0;
while (i < veggies.length) {
  console.log(veggies[i]);
  i++;
}

/*item 10*/
/*create objects*/

interface nameAge {
  name: string;
  age: number;
}

let obj0: nameAge = {
  name: 'Rick',
  age: 16
};
let obj1: nameAge = {
  name: 'Alex',
  age: 23
};
let obj2: nameAge = {
  name: 'Will',
  age: 29
};
let obj3: nameAge = {
  name: 'Bob',
  age: 19
};
let obj4: nameAge = {
  name: 'Anne',
  age: 16
};
let myArray = [obj0, obj1, obj2, obj3, obj4];
let j: number = 0;
while (j < myArray.length) {
  checkAge(myArray[j].name, myArray[j].age);
  j++;
}
/*item 11*/
function getLength(word): number {
  return word.length;
}
let wordLength: number = getLength('Hello World');
if (wordLength % 2 == 0) {
  console.log('The world is nice and even!');
} else {
  console.log('The world is an odd place!');
}