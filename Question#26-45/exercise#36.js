/* 36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message
 that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt
  and the message printed on it. Call the function.
  */
function make_shirt(size, message) {
    console.log("Creating a ".concat(size, " shirt with the message: \"").concat(message, "\""));
}
// Calling the function
make_shirt('medium', 'Vague');
// or
function makeShirt(size, printmessage) {
    console.log("you selected,".concat(size, " size with ").concat(printmessage, " print on shirt"));
}
makeShirt("large", "code with Hamza");
