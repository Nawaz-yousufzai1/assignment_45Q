

/* 
23. Conditional Tests: Write a series of conditional tests.
 Print a statement describing each test and your prediction for the results of each test. 
 Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

*/

let Name: string = 'Qasim';
console.log("Is name equal to 'Qasim'? I predict true" );
console.log(Name === 'Qasim');


let x: number = 5;
let y: number = 10;
console.log("Is x plus y equal to 15? predict true ");
console.log(x + y === 15);



let age: number = 30;
console.log("Is age greater than 18? I predict true. ");
console.log(age > 18);



let isAdmin: boolean = true;
console.log("Is isAdmin a boolean type? I predict true .");
console.log(typeof isAdmin === 'boolean');

let fruits: string[] = ['apple', 'banana', 'orange'];
console.log("Does 3 fruits names are in Array ? predict true. ");
console.log(fruits.length);

let city: string = 'Karachi';
console.log("Is city not equal to 'London'? I predict true.");
console.log(city !== 'London');

let isEven: boolean = 10 % 2 === 0;
console.log("Is 10 even? ");
console.log(isEven);

let isLoggedIn: boolean = false;
console.log("Is isLoggedIn not true?");
console.log(!isLoggedIn);

let temperature: number = 25;
console.log("Is temperature less than or equal to 0? ");
console.log(temperature <= 0);

let hasAccess: boolean = false;
console.log("Does the user have access? ");
console.log(hasAccess);
