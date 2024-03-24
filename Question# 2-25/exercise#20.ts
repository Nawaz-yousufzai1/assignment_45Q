

/*
20. Think of something you could store in a array. For example, you could make a list of mountains,
 rivers, countries, cities, languages, or anything else you’d like.
 Write a program that creates a list containing these items.
*/
// Arrays of countries
let Countries: string[] = ["Pakistan", "Afghanistan", "Thiland", "France", "Brazil", "UAE", "Oman"];

// The list of countries
console.log("Countries list:");
for (let country of Countries) {    // use for loop for obtaining list
    console.log(country);
}

console.log(Countries.length); // print(in figure) how many countries (elements ) in the array
