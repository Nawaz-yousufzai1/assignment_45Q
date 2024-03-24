var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*

18. Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

•  to change your array soSort it’s stored in reverse alphabetical order. Print the list to show that its order has changed
*/
// Making an array in original order
var places = ["Paris", "Washington", "Munich", "London", "Tokyo"];
console.log("Original Order:", places);
console.log(places.join(","));
console.log("............................");
// print in alphabatic order
console.log("Alphabatic Order:");
console.log(__spreadArray([], places, true).sort().join(",")); // sort out the list in alphabatic order.
console.log("\n\n"); // for double line space
//Show that your array is still in its original order by printing it
console.log("Original Order(unchanged):");
console.log(places.join(","));
console.log("\n"); // for line space
//Print your array in reverse alphabetical order without changing the order of the original list.
places.reverse();
console.log("Reverse Order!");
console.log(places.join(","));
console.log("\n");
//Show that your array is still in its original order by printing it again.
places.reverse();
console.log("Reverse Order!");
console.log(places.join(","));
console.log("\n");
//Reverse the order of your list. Print the array to show that its order has changed.
places.sort();
console.log("Sorted in Alphabatic Order:");
console.log(__spreadArray([], places, true).sort().join(","));
console.log("\n\n");
//  to change your array Sort it’s stored in reverse alphabetical order.
places.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in Reverse Alphabatic Order");
console.log(places.join(","));
console.log("\n\n");
