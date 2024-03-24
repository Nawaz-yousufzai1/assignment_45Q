/*
19.Dinner Guests: Working with one of the programs from Exercises 14 through 18,
print a message indicating the number of people you are inviting to dinner.
*/
var GuestList = [
    "Muhammad Kamran ",
    "Eijaz Ahmed",
    "Hassan Nawaz"
];
/*
// Function to print invitation message for each person
function printInvitations(guestList: string[]): void {
    guestList.forEach(person => {
        console.log(`Dear ${person},\n\nYou are  invited to dinner at my home. It would be an honor to have you join us. \n\nPlease let me know if you can attend.\n\nBest regards,\n[Rab Nawaz]`);
        console.log("-----------------------------------");
    });
}
*/
var lengthguest = GuestList.length;
console.log("we are inviting toal ".concat(lengthguest));
