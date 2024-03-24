/* 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10.
If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/
var fruit = "Mango";
var color = "purple";
// Test for equality and inequality with string
// Example of equality
console.log(fruit == fruit);
// Example of unequality
console.log(fruit != color);
//Test using the lower case function
var fruitLower = fruit.toLowerCase();
var colorLower = color.toLowerCase();
console.log(fruitLower === colorLower); // false
// Numericaltests involving equality and inequality,
var Num1 = 10;
var Num2 = 20;
console.log(Num1 == Num1); // result True
console.log(Num1 != Num2); // result True
console.log(Num1 == Num2); // False
console.log(Num1 < Num2); //  True
console.log(Num2 > Num1); // True
console.log(Num1 <= Num2); // True
console.log(Num2 >= Num1); // True
// using And, or operators
console.log(Num1 < 20 && Num2 > 10); // output True
console.log(Num1 > 20 || Num2 > 10); // Output True
// Test an item is in array 
var myarray = [12, 13, 14, 15, 16];
//console.log(myarray.includes(13)); // output True
//console.log(!myarray.includes(10));
