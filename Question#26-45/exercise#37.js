/* 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
that reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
and a shirt of any size with a different message.
*/
// For large T-Shirt function syntax
function make_shirt1(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love Typescript"; }
    console.log("Make shirt ".concat(size, " with message \"").concat(message, "\" "));
}
make_shirt1();
// For Medium shirt syntax
function make_shirt2(size, message) {
    if (size === void 0) { size = "Medium"; }
    if (message === void 0) { message = " I love Type script."; }
    console.log("Make Shirt ".concat(size, " size print with message\"").concat(message, ".\""));
}
make_shirt2();
// syntax for shirt of any size
function make_shirt3(size, message) {
    if (size === void 0) { size = "Any"; }
    if (message === void 0) { message = " Hello, world."; }
    console.log("Make Shirt ".concat(size, " size print with message\"").concat(message, ".\""));
}
make_shirt3(); // invoking function
