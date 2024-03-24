
/*
13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
 and make a list that stores several examples. Use your list to print a series of statements
  about these items, such as “I would like to own a Honda motorcycle.”
*/

let myFavTans:string[]=["Car","jeep","M.Cycle","Horse Cart"];
//console.log(`"I would like to own a corola " + myFavTans[0]);
console.log(`"I would like to own a ${myFavTans[0]}"`); //print message with vehicle name on index 0 of array
console.log(`"I would like to own a ${myFavTans[1]}"`);//print message with vehicle name on index 1 of array
console.log(`"I would like to own a ${myFavTans[2]}"`); //print message with vehicle name on index 2 of array
console.log(`"I would like to own a ${myFavTans[3]}"`); //print message with vehicle name on index 3 of array
// we can also print in below method
myFavTans.forEach(mode=>console.log(`I would like to own a ${mode}`));
