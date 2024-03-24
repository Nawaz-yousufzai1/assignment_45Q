

// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// uppercase, and titlecase.

let perName="Muhammad Raza";
console.log(perName.toUpperCase()); // Display name in uppercase
console.log(perName.toLowerCase()); // display name in lowercase
console.log(perName.replace(/\b\w/g,(char)=>char.toLocaleUpperCase()));// display name in title case
 
