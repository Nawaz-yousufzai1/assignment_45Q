
/* 44.Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides,
 and it should print a summary of the sandwich that is being ordered. 
 Call the function three times, using a different number of arguments each time.
*/

function orderSandwich(items: string[]): void {
    console.log(" your sandwich with:");
    items.forEach(item => {
        console.log("-"+ item);
    });
    console.log("Enjoy sandwich!");
  }
  
  // Call the function three times with arguments
  orderSandwich(["Ham", "Cheese", "Lettuce", "Tomato"]);
  orderSandwich(["Turkey", "Swiss cheese", "Mustard"]);
  orderSandwich(["Peanut butter", "Jelly"]);
  