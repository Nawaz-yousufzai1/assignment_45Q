"use strict";
/*
6. Stripping Names: Store a person’s name, and include some whitespace characters
 at the beginning and end of the name. Make sure you use each character combination,
  "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed.
   Then print the name after striping the white spaces.
*/
let namePer = "\t\n Muhammad Imran\t\n";
console.log("with white space:");
console.log(namePer);
// stripping white space
namePer = namePer.trim();
console.log("\n after stripping:");
console.log(namePer);
