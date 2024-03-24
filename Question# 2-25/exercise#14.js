/*
  14.Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
 Make a list that includes at least three people you’d like to invite to dinner.
  Then use your list to print a message to each person, inviting them to dinner.
*/
// List of people to invite to dinner
var guestList1 = [
    "Muhammad Farooq",
    "Azam Khan",
    "Hamza Javed"
];
// Function to print invitation message for each person
function printInvitations1(guestList1) {
    guestList1.forEach(function (person) {
        console.log("Dear ".concat(person, ",\n\nYou are  invited for dinner at my place. It would be an honor to have you join us.\n\nBest regards,\n[Rab Nawaz]"));
        console.log("-----------------------------------");
    });
}
// Print invitations for each person
printInvitations1(guestList1);
// initial invitation list
/*
15.Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end
of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.
*/
//original guest list
var guestList = [
    "Muhammad Kamran ",
    "Eijaz Ahmed",
    "Hassan Nawaz"
];
// Function to print invitation message for each person
function printInvitations(guestList) {
    guestList.forEach(function (person) {
        console.log("Dear ".concat(person, ",\n\nYou are  invited to dinner at my home. It would be an honor to have you join us. \n\nPlease let me know if you can attend.\n\nBest regards,\n[Rab Nawaz]"));
        console.log("-----------------------------------");
    });
}
// Printing initial invitations
console.log("Initial Invitations:");
console.log("=====================");
printInvitations(guestList); // invoking function
// Changing guest list as one guest can't make it
var unableToAttend = "Eijaz Ahmed"; // peson unable to attend 
var newGuest = "Saleem Raza"; // New person in place of unable to attend
guestList = guestList.filter(function (person) { return person !== unableToAttend; });
guestList.push(newGuest); // add new guest in guest list
// Printing updated invitations
console.log("\nUpdated Invitations:");
console.log("=====================");
printInvitations(guestList);
/*

16. More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end
of your program informing people that you found a bigger dinner table.
 

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
 • Print a new set of invitation messages, one for each person in your list.
  */
// message print for bigger table
console.log("good News! we have found a Bigger Table for Dinner");
// Add new guest in the starting index of array
guestList.unshift("Murtaza");
// Add new guest at the ending index of array
guestList.push("Akbar");
/*
17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time
for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that
you can invite only two people for dinner.
 

• Remove guests from your list one at a time until only two names remain in your list.
 Each time you pop a name from your list, print a message to that person letting them
  know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list.
Print your list to make sure you actually have an empty list at the end of your program.

*/
// print for invitation of only two 
console.log("we are sorry, we can invite only two people for dinner");
// remove Two guset through pop
guestList.pop();
guestList.pop();
console.log(guestList.length);
