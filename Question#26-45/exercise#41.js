/* 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
 which prints the name of each magician in the array.
 */
// Array of magician's names
var magicians = ["joh", "paol", "Martino"];
function show_magicians1(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
// Call the function to print names
show_magicians1(magicians);
