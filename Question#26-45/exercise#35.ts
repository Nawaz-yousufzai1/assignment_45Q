

 /*
    35. Animals: Think of at least three different animals that have a common characteristic.
 Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
  • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
  • Add a line at the end of your program stating what these animals have in common. 
  You could print a sentence such as Any of these animals would make a great pet!
 */
  let pets:string[]=["Dog","Cat","Horse"];
  for(let pet of pets){
   if(pet==="Dog"){
     console.log(`${pet} is a Faith ful animal.`);
   }else if(pet==="Cat"){
     console.log(`${pet} is a lovely animal`);
     
   }else {
     console.log(`${pet} is helpful and faith ful animal.`);
     
   }
   
  }
  console.log("These animals are great pets");
 