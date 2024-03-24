/*
20. Think of something you could store in a array. For example, you could make a list of mountains,
 rivers, countries, cities, languages, or anything else you’d like.
 Write a program that creates a list containing these items.
*/
// Arrays of countries
var Countries = ["Pakistan", "Afghanistan", "Thiland", "France", "Brazil", "UAE", "Oman"];
// The list of countries
console.log("Countries list:");
for (var _i = 0, Countries_1 = Countries; _i < Countries_1.length; _i++) { // use for loop for obtaining list
    var country = Countries_1[_i];
    console.log(country);
}
console.log(Countries.length); // print(in figure) how many countries (elements ) in the array
