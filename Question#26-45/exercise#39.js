/*
39. City Names: Write a function called city_country() that takes in the name of a city and its country.
 The function should return a string formatted like this:

"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.
*/
function city_country(city, country) {
    return "\"".concat(city, ", ").concat(country, "\"");
}
var cityCountry = city_country("Lahore", "Pakistan");
console.log(cityCountry); // print Lahore, Pakistan
var cityCountry1 = city_country("Riaz", "Saudi Arabia");
console.log(cityCountry1); // print Riaz, Saudi Arabia
var cityCountry2 = city_country("Kairo", "Egypt");
console.log(cityCountry2);
