/* 30.Hello Admin: Make a array of five or more usernames, including the name 'admin'.
Imagine you are writing code that will print a greeting to each user after they log in to a website.
 Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin,
 would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

*/
var userNames = ["Muhammad Qasim", "Sir,Mubashir", "Sir, Ameen", "admin", "Zakir!"];
for (var _i = 0, userNames_1 = userNames; _i < userNames_1.length; _i++) {
    var userName = userNames_1[_i];
    if (userName.toLowerCase() === "admin") {
        console.log("Hello,".concat(userName, ", would you like to see a status report!"));
    }
    else {
        console.log("Hello,".concat(userName, ",Thank you for logging in again!"));
    }
}
