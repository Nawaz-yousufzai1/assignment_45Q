/*
11. Names: Store the names of a few of your friends in a array called names.
Print each person’s name by accessing each element in the list, one at a time.
*/

let friends:string[]=["Raza","Furqan","Hamza","Danish"];
console.log(friends[0]); // name on 0 index Raza will print.
console.log(friends[1]); // name on 1 index Furqan will print
console.log(friends[2]); // name on 2 index Hamza will print
console.log(friends[3]);
// or second way
friends.forEach(friendName=> console.log());

/*
12. Greetings: Start with the array you used in Exercise 11, but instead of just printing
 each person’s name, print a message to them. The text of each message should be the same,
  but each message should be personalized with the person’s name.
*/

console.log("Good Morning!"+friends[0]); // greet message to the person on 0 index, "Raza" 
console.log("Good Morning!"+friends[1]); // greet message to the person on 1 index will print "Furqan"
console.log("Good Morning!"+friends[2]);
console.log("Good Morning!"+friends[3]);
// we can also print in below way
friends.forEach(frendNames=>console.log(`Good Morning${frendNames},How are you`));
