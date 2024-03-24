
/* 28. Stages of Life: Write an if-else chain that determines a person’s stage of life.
 Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.
*/
 

//If the person is less than 2 years old but less than 4,print a message that the person is a baby

let age1:number=1;
if(age1<2){
  console.log("The person is a Baby"); // This condition will be true
}else if(age1<13){
  console.log("The person is a Kid");
}else if(age1<20){
  console.log("The person is a teenager");
}else if(age1<65){
  console.log("The person is adult");  
}else{
  console.log("The person is an elder");
}

// If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

let age2: number = 3;
if (age2 < 2) {
  console.log("The person is a bady.");
} else if (age2 < 4) {
  console.log("The person is a toddler.");
} else if (age2 < 13) {
  console.log("The person is a kid.");
} else if (age2 < 20) {
  console.log("The person is a teenager.");
} else if (age2 < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}


// If the person is at least 4 years old but less than 13, print a message that the person is a kid.


let age3: number = 10;
if (age3 < 2) {
  console.log("The person is a baby.");
} else if (age3 < 4) {
  console.log("The person is a toddler.");
} else if (age3 < 13) {
  console.log("The person is a kid.");
} else if (age3 < 20) {
  console.log("The person is a teenager.");
} else if (age3 < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}

// If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

let age4: number = 15;
if (age4 < 2) {
  console.log("The person is a baby.");
} else if (age4 < 4) {
  console.log("The person is a toddler.");
} else if (age4 < 13) {
  console.log("The person is a kid.");
} else if (age4 < 20) {
  console.log("The person is a teenager.");
} else if (age4 < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}



//If the person is at least 20 years old but less than 65, print a message that the person is an adult.



let age5: number = 25;
if (age5 < 2) {
  console.log("The person is a baby.");
} else if (age5 < 4) {
  console.log("The person is a toddler.");
} else if (age5 < 13) {
  console.log("The person is a kid.");
} else if (age5< 20) {
  console.log("The person is a teenager.");
} else if (age5 < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}

// if the person is age 65 or older, print a message that the person is an elder.
let age6: number = 68;
if (age6 < 2) {
  console.log("The person is a baby.");
} else if (age6 < 4) {
  console.log("The person is a toddler.");
} else if (age6 < 13) {
  console.log("The person is a kid.");
} else if (age6< 20) {
  console.log("The person is a teenager.");
} else if (age6 < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}

