																	
																				//JAVASCRIPT TRAINING

//GENERATE A RANDOM NUMNER FROM 1 TO 1000

let raceNumber = Math.floor(Math.random() * 1000);

//SIMPLE IF STATEMENT 

let hungerLevel = 6;
if (hungerLevel > 7){
  console.log('Time to eat!')}
else {
  console.log("We can eat later!")
}

//SHORT CIRCUIT EVALUATION

let username = '';
let defaultName = username || 'Stranger';
 
console.log(defaultName); // Prints: Stranger

console.log(`The ${writingUtensil} is mightier than the sword.`); // this will print The stranger is mightier than the sword, since Username comes empty, otherwise it will print the username value


//BOOLEANS

let excited = true;
console.log(!excited); // Prints false
 
let sleepy = false;
console.log(!sleepy); // Prints true


//CHECK VARIABLE DECLARATION OR THAT IT DOES NOT HAVE A FALSY VALUE ASSIGNED 
 

let myVariable = 'I Exist!'; 
if (myVariable) {
   console.log(myVariable)
} else {	
   console.log('The variable does not exist.') //The variable exists so the output will "I exist"
}

let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.'); //The variable has a falsy value assigned so the output will be "This string is definitely empty"
}

//TERNARY OPERATOR

//Let's analyze the following:	
let isNightTime = true;
 
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}
//We can use a ternary operator to perform the same functionality:

isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

//Using the ternary to check the value of the variable when is not Boolean

let isNightTime = "Pears";

isNightTime === "Pears" ? console.log('Turn on the lights!') : console.log('Turn off the lights!');



//Other example when variable type is not Boolean 

let favoritePhrase = 'Love That!';

*if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}*/

favoritePhrase === 'Love That!' ? console.log("I love that!") : console.log( "I don't love that!");

//ELSE IF STATEMENTS

let groceryItem = 'papaya';
 
if (groceryItem === 'tomato') {
  console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
  console.log('Papayas are $1.29');
} else {
  console.log('Invalid item');
}

//SWITCH KEYWORD - A switch statement provides an alternative syntax that is easier to read and write


let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
  console.log('You get the gold medal!')
  break;
  case 'second place':
  console.log('You get the silver medal!')
  break;
  case 'third place':
  console.log('You get the bronze medal!')
  break;
  default:
  console.log('No medal awarded.')
  break;
}

/*The break keyword tells the computer to exit the block and not execute any more code or check any other cases inside the code block. Note: Without break keywords, the first matching case will run, but so will every subsequent case regardless of whether or not it matches—including the default. This behavior is different from if/else conditional statements that execute only one block of code.
At the end of each switch statement, there is a default statement. If none of the cases are true, then the code in the default statement will run.*/

/*
- An if statement checks a condition and will execute a task if that condition evaluates to true.
- if...else statements make binary decisions and execute different code blocks based on a provided condition.
- We can add more conditions using else if statements.
- Comparison operators, including <, >, <=, >=, ===, and !== can compare two values.
- The logical and operator, &&, or “and”, checks if both provided expressions are truthy.
- The logical operator ||, or “or”, checks if either provided expression is truthy.
- The bang operator, !, switches the truthiness and falsiness of a value.
- The ternary operator is shorthand to simplify concise if...else statements.
- A switch statement can be used to simplify the process of writing multiple else if statements. The break keyword stops the remaining cases from being checked and executed in a switch statement.
*/



/*Functions

A function is a reusable block of code that groups together a sequence of statements to perform a specific task.

// A parameter is a named variable inside a function’s block which will be assigned the value of the argument passed in when the function is invoked:

The following are examples of multi-line block of function definition

*/	


function sayThanks(total_price, people) {
  console.log(`Your price is ${total_price/people}`);
  console.log('Thank you for your purchase '+ total_price*people + '! We appreciate your business.')
}

sayThanks();  //Input values for total_price and people
sayThanks(27,3);  //example

//Assign default values

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

function TicketPrice(Total_price, Number_of_People){

  let SingularPrice = Total_price / Number_of_People;
  return SingularPrice;
}

TicketPrice();


function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}

rectangleArea(-2,3);
//Output will be "You need positive integers to calculate area!"

function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);

//Another example

function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows,columns){
  return monitorCount(rows,columns)*200
}

const totalCost = costOfMonitors(5,4);
console.log(totalCost);
//Output of totalCost = 4000


//Function expresions

/*Another way to define a function is to use a function expression. To define a function inside an expression, we can use the function keyword. 
- In a function expression, the function name is usually omitted.
- A function with no name is called an anonymous function. 
- A function expression is often stored in a variable in order to refer to it.*/


const plantNeedsWater = function(day){
    if (day === 'Wednesday') 
    return true;
    else return false;
};

plantNeedsWater('Tuesday');
console.log(plantNeedsWater('Tuesday'));

/*Arrow Functions

ES6 introduced arrow function syntax, a shorter way to write functions by using the special “fat arrow” () => notation.
Arrow functions remove the need to type out the keyword function every time you need to create a function. 
Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { } like this:*/

const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};


//Adapting plantNeedsWater function

const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

//This is better this way

const plantNeedsWater = (day) => {
  return day === 'Wednesday' ? true : false;
};


/*Functions that take only a single parameter do not need that parameter to be enclosed in parentheses. However, if a function takes zero or multiple parameters, parentheses are required.

Function definition can be made concise using concise arrow notation

Let's refactor the function this way below to a single-line block and using the arrow function syntax*/

const plantNeedsWater = day => day === 'Wednesday' ? true : false;

const logVisibleLightWaves = () => {     //Define a function that has no parameter or return - no error will be displayed
};



/*
													Scope	
								An important idea in programming is scope. 

Scope defines where variables can be accessed or referenced. While some variables can be accessed from anywhere within a program, other variables may only be available in a specific context.

We’ve seen blocks used before in functions and if statements. A block is the code found inside a set of curly braces {}. Blocks help us group one or more statements together and serve as an important structural marker for our code.

*/


const city = 'New York City';
function logCitySkyline(){
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
};

console.log(logCitySkyline());


/*In global scope, variables are declared outside of blocks. These variables are called global variables. Because global variables are not bound inside a block, they can be accessed by any code in the program, including code in blocks.*/

const color = 'blue';
const returnSkycolor = () => {
	return color;
}

console.log(returnSkycolor());


/* 													Block Scope
									The next context we’ll cover is block scope. 

When a variable is defined inside a block, it is only accessible to the code within the curly braces {}. 
We say that variable has block scope because it is only accessible to the lines of code within that block.
Variables that are declared with block scope are known as local variables because they are only available to the code that is part of the same block.*/


const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // blue 
};
 
logSkyColor(); // blue 
console.log(color); // ReferenceError


const logVisibleLightWaves = () => {
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
};

logVisibleLightWaves();
console.log(logVisibleLightWaves(lightWaves)); // Reference error since the variable is tied to the block scope of the function

/*											SCOPE POLLUTION
It may seem like a great idea to always make your variables accessible, but having too many global variables can cause problems in a program.

Scope pollution is when we have too many global variables that exist in the global namespace, or when we reuse variables across different scopes.

Scope pollution makes it difficult to keep track of our different variables and sets us up for potential accidents. For example, globally scoped variables can collide with other variables that are more locally scoped, causing unexpected behavior in our code.

*/
let num = 50;
 
const logNum = () => {  
  num = 100; // Inside the function body of logNum(), we declare a new variable but forgot to use the let keyword.
  console.log(num);
};
 
logNum(); // When we call logNum(), num gets reassigned to 100. So it Prints 100
console.log(num); // Prints 100 - Even though the reassignment is allowed and we won’t get an error, if we decided to use num later, we’ll unknowingly use the new value of num.*/


											/* ARRAYS
											
											
- Arrays are lists that store data in JavaScript.
- Arrays are created with brackets [].
- Each item inside of an array is at a numbered position, or index, starting at 0.
- We can access one item in an array using its index, with syntax like: myArray[0].
- We can also change an item in an array using its index, with syntax like myArray[0] = 'new string';
- Arrays have a length property, which allows you to see how many items are in an array.
- Arrays have their own methods, including .push() and .pop(), which add and remove items from an array, respectively.
- Arrays have many methods that perform different tasks, such as .slice() and .shift(), you can find documentation at the Mozilla Developer Network website.
- Some built-in methods are mutating, meaning the method will change the array, while others are not mutating. You can always check the documentation.
- Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable. However, a variable declared with const cannot be reassigned.
- Arrays mutated inside of a function will keep that change even outside the function.
- Arrays can be nested inside other arrays.
- To access elements in nested arrays chain indices using bracket notation.


- The array is represented by the square brackets [] and the content inside.
- Each content item inside an array is called an element.
- There are three different elements inside the array.
- Each element inside the array is a different data type.

Each element in an array has a numbered position known as its index. We can access individual items using their index, which is similar to referencing an item in a list based on the item’s position.

Arrays in JavaScript are zero-indexed, meaning the positions start counting from 0 rather than 1. Therefore, the first item in an array will be at position 0.
*/

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0];
console.log(listItem); //Output = "Fortune favors the brave"
console.log(famousSayings[2]); //Output - Where there is love there is life
console.log(famousSayings[3]); //Output - Undefined

//Elements from the array can be updated

let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados';

//Nested Arrays

const numberClusters = [[1, 2], [3,4], [5, 6]];
const newArr = [['one', 'two'], ['three', 'four'], ['five', 'six']];

//Access the elements on nested arrays
const target = numberClusters[2][1]; //This access the 6 on the numberClusters array

//Arrays with let and const

/*Variables declared with the const keyword cannot be reassigned. However, elements in an array declared with const remain mutable. Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value.*/

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
condiments[0] = 'Mayo';
condiments = ['Mayo'];
utensils[3] = 'Spoon';


//The .push() Method

//This method mmutates or changes an array

const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('test1', 'test2');
console.log(chores); //Prints the array with the additional items

//The .pop() Method

const newItemTracker = ['item 0', 'item 1', 'item 2'];
 
const removed = newItemTracker.pop();
 
console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2



/*Some arrays methods that are available to JavaScript developers include: .join(), .slice(), .splice(), .shift(), .unshift(), and .concat() amongst many others. Using these built-in methods make it easier to do some common tasks when working with arrays.*/

//The .shift() and .unshift() methods

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList); //This removes the first item from the array

//The unshift method add an item in the first position of the array

groceryList.unshift('popcorn');
console.log(groceryList); //Ouput is that the popcorn item is added to the groceryList array


//The .slice() Method


console.log(groceryList.slice(1,4)); // output is [ 'bananas', 'coffee beans', 'brown rice' ] - element contained between position 1 and 4
console.log(groceryList); //The array contains the same original elements


//The indexOf() Method

//Call .indexOf() on groceryList to find the index of the element 'pasta' and save the returned value to a const variable named pastaIndex.

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

//Arrays and Functions

//Arrays can be mutated

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){     
  arr[3] = 'MUTATED';  //If you try to set the element in the 10000000000th position, it will not work, try on VS 
}

changeArr(concept);

console.log(concept) //Output will be [ 'arrays', 'can', 'be', 'MUTATED' ]


function removeElement(newArr){
    newArr.pop();  
}

removeElement(concept);  //When you call this function on the array the element MUTATED is erased
console.log(concept[3]); //This output is 'undefined' since the function already removed the 3rd element

console.log(concept); //This output is [ 'arrays', 'can', 'be' ] - it the array is mutated inside the function that change will be maintained outside the function as well

								//LOOPS
//A loop is a programming tool that repeats a set of instructions until a specified condition, called a stopping condition is reached. As a programmer, you’ll find that you rely on loops all the time! You’ll hear the generic term iterate when referring to loops; iterate simply means “to repeat”.

//The For Loop

//Instead of writing out the same code over and over, loops allow us to tell computers to repeat a given block of code on its own. One way to give computers these instructions is with a for loop.

/*A for loop contains three expressions separated by ; inside the parentheses:

- an initialization starts the loop and can also be used to declare the iterator variable.
- a stopping condition is the condition that the iterator variable is evaluated against— if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
- an iteration statement is used to update the iterator variable on each loop.*/

for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}

/*The initialization is let counter = 0, so the loop will start counting at 0.
-The stopping condition is counter < 4, meaning the loop will run as long as the iterator variable, counter, is less than 4.
-The iteration statement is counter++. This means after each loop, the value of counter will increase by 1. For the first iteration counter will equal 0, for the second iteration counter will equal 1, and so on.
-The code block is inside of the curly braces, console.log(counter), will execute until the condition evaluates to false. The condition will be false -when counter is greater than or equal to 4 — the point that the condition becomes false is sometimes called the stop condition

This for loop makes it possible to write 0, 1, 2, and 3 programmatically.


*/

/* Looping in REVERSE

To run a backward for loop, we must:

- Set the iterator variable to the highest desired value in the initialization expression.
- Set the stopping condition for when the iterator variable is less than the desired amount.
- The iterator should decrease in intervals after each iteration.


*/

for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}


*/

/* Looping through ARRAYS

Write a for loop that iterates through our vacationSpots array using i as the iterator variable.

Inside the block of the for loop, use console.log() to log each element in the vacationSpots array after the string 'I would love to visit '. For example, the first round of the loop should print 'I would love to visit Bali' to the console.*/

const vacationSpots = ['Bali', 'Paris', 'Tulum'];
for (let i = 0; i < vacationSpots.length; i++){
  console.log('I would love to visit' + ' ' + vacationSpots[i]);
}

/* Output

I would love to visit Bali
I would love to visit Paris
I would love to visit Tulum


To access elements in an array we use the syntax arrayName[index]. The index you’ll be accessing will be held in your i iterator variable. You can use string concatenation or string interpolation to create the string you log to the console. Don’t forget about the zero-indexing of arrays! Make sure your stopping condition doesn’t go too far.
*/


/* NESTED LOOPS

When we have a loop running inside another loop, we call that a nested loop. One use for a nested for loop is to compare the elements in two arrays. For each round of the outer for loop, the inner for loop will run completely.

*/

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};


/*Create a nested loop that iterates through bobsFollowers as the array for the outer loop and tinasFollowers as the array for the inner loop. If the current element from the outer loop is the same as the current element from the inner loop, push that element into the mutualFollowers array.*/

const bobsFollowers = ['Susie', 'Gavin', 'Tim', 'Sandra'];
const tinasFollowers = ['Gavin', 'Alex', 'Tim'];
const mutualFollowers = [];

// Write your code below

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j])
//or you can also add mutualFollowers.push(bobsFollowers[i])
    }
  }
};

console.log(mutualFollowers);

// THE WHILE LOOP 

// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}
 
// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}

//While loop case

/* While loop with a condition that checks if the currentCard does not have that value 'spade'.

Inside the block of your while loop, add the following line of code:

currentCard = cards[Math.floor(Math.random() * 4)];
Math.floor(Math.random() * 4) will give us a random number from 0 to 3. We’ll use this number to index the cards array, and assign the value of currentCard to a random element from that array.*/

const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard = [];


while (currentCard != 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}


//INFINITE Loop


for( let i = 1; i > 0; i++  ){
  //The code inside this for loop will never stop
}


/*DO WHILE STATEMENTS

In some cases, you want a piece of code to run at least once and then loop based on a specific condition after its initial run. This is where the do...while statement comes in.

A do...while statement says to do a task once and then keep doing it until a specified condition is no longer met. The syntax for a do...while statement looks like this: */

let countString = '';
let i = 0;
 
do {
  countString = countString + i;
  i++;
} while (i < 5);
 
console.log(countString);

//Note that the while and do...while loop are different! Unlike the while loop, do...while will run at least once whether or not the condition evaluates to true

//We have a sweet tooth, so we want to add at least one cup of sugar to the batter even if the value of cupsOfSugarNeeded is 0, loop which increments cupsAdded by one while cupsAdded is less than cupsOfSugarNeeded.

let cupsOfSugarNeeded = 20;
let cupsAdded = 0;

do {
 cupsAdded++
 console.log(cupsAdded + ' cup was added') // Output = 1 cup was added 2 cup was added 
} while (cupsAdded < cupsOfSugarNeeded); 

// THE BREAK KEYWORD

// In our code, when we want to stop a loop from continuing to execute even though the original stopping condition we wrote for our loop hasn’t been met, we can use the keyword break


for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}

console.log('Orange you glad I broke out the loop!');
 // Banana. Banana.Banana.Orange you glad I broke out the loop!
 
//Log each element from rapperArray in a for loop with the iterator variable i.

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for(let i = 0; i < rapperArray.length; i++);{
  console.log(rapperArray[i]);
} // Ouput - Lil' Kim Jay-Z Notorious B.I.G. Tupac


//Add a break inside your loop’s block that breaks out of the loop if the element at the current index in the rapperArray is 'Notorious B.I.G.'

for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}

console.log("And if you don't know, now you know");
 
 
// Output Lil' Kim  Jay-Z Notorious B.I.G. And if you don't know, now you know


/*SUMMARY

- An if statement checks a condition and will execute a task if that condition evaluates to true.
- if...else statements make binary decisions and execute different code blocks based on a provided condition.
- We can add more conditions using else if statements.
- Comparison operators, including <, >, <=, >=, ===, and !== can compare two values.
- The logical and operator, &&, or “and”, checks if both provided expressions are truthy.
- The logical operator ||, or “or”, checks if either provided expression is truthy.
- The bang operator, !, switches the truthiness and falsiness of a value.
- The ternary operator is shorthand to simplify concise if...else statements.
- A switch statement can be used to simplify the process of writing multiple else if statements. The break keyword stops the remaining cases from being checked and executed in a switch statement.


*/

// FUNCTIONS AS DATA


//In JavaScript, functions are first class objects. This means that, like other objects you’ve encountered, JavaScript functions can have properties and methods.

//Since functions are a type of object, they have properties such as .length and .name, and methods such as .toString(). You can see more about the methods and properties of functions

onst checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// Write your code below
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
isTwoPlusTwo();
console.log(isTwoPlusTwo.name);	//Use isTwoPlusTwo to console.log() the name property of the function we assigned to isTwoPlusTwo

// FUNCTIONS AS PARAMETERS

//A higher-order function is a function that either accepts functions as parameters, returns a function, or both! We call functions that get passed in as parameters callback functions. Callback functions get invoked during the execution of the higher-order function.

//Discuss the below callback function with Rodrigo - apparently the output is the addTwo operation
const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  let checkA = val + 2;
  let checkB = func(val);
  return checkA === checkB ? func(val) : 'inconsistent results';  
}

console.log(checkConsistentOutput(addTwo, 0));

// Mirar lo siguiente con respecto a la callback function anterior

//val = addTwo y le paso a val un 0 -> Por ende func = addTwo y le paso 0 igual 

/*
- Abstraction allows us to write complicated code in a way that’s easy to reuse, debug, and understand for human readers.

- We can work with functions the same way we work with any other type of data, including reassigning them to new variables.

- JavaScript functions are first-class objects, so they have properties and methods like any other object.
 
- Functions can be passed into other functions as parameters.

- A higher-order function is a function that either accepts functions as parameters, returns a function, or both.*/

//ITERATORS

//The built-in JavaScript array methods that help us iterate are called iteration methods, at times referred to as iterators. Iterators are methods called on arrays to manipulate elements and return values.

/*Methods that are being called - THESE ARE THE ITERATORS 

- .forEach 
- .filter
- .map 



*/

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100, true];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
  return typeof thing === 'string';	 // Solo usar un return 
  return typeof thing === 'boolean'; //Siempre con minuscula
});

console.log(onlyNumbers);



const groceries_1 = [1,2,3,4];
groceries_1.forEach(function(groceryItem){ //callback function
	console.log('-' + groceryItem);
}

// Less hard way is to use arrow function

groceries_1.forEach(groceryItem => console.log(groceryItem));

//We can also define the function beforehand to be use as the callback function

function printGrocery(element){
  console.log(element);
}
 
groceries.forEach(printGrocery);

/*forEach = iterator 

- .forEach() takes an argument of callback function. Remember, a callback function is a function passed as an argument into another function.
- .forEach() loops through the array and executes the callback function for each element. During each execution, the current element is passed as an argument to the callback function.*/

//.forEach

//The first iteration method that we’re going to learn is .forEach(). Aptly named, .forEach() will execute the same code for each element of an array

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(EatFruit => console.log("I want to eat a", EatFruit));

//.map

//The second iterator we’re going to cover is .map(). When .map() is called on an array, it takes an argument of a callback function and returns a new array! Take a look at an example of calling .map():

//De chiripa he conseguido sacar un slice para hacer lo siguiente:

//Use .map() to create a new array that contains the first character of each string in the animals array. Save the new array to a const variable named secretMessage.

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
const secretMessage = animals.map(animals => {
  return animals.slice(0,1,2,3);
});


console.log(secretMessage.join('')); //Output = HelloWorld

// The following code works as well
// Use .map() to divide all the numbers in bigNumbers by 100. Save the returned values to a variable declared with const called smallNumbers.

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(bigNumbers[0] / 100 );
console.log(smallNumbers);

//The best is not to use the same array name inside the callback function

const smallNumbers = bigNumbers.map(num => num / 100 );

// .filter 

/*Another useful iterator method is .filter(). Like .map(), .filter() returns a new array. However, .filter() returns an array of elements after filtering out certain elements from the original array. The callback function for the .filter() method should return true or false depending on the element that is passed to it. The elements that cause the callback function to return true are added to the new array. Take a look at the following example:  */

const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
 
const shortWords = words.filter(word => {
  return word.length < 6;
});

console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']


const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below to return values that are less than 250. Save them to a new array called smallNumbers, declared with const.

const smallNumbers = randomNumbers.filter(num => num < 250);
console.log(smallNumbers);

//Invoke .filter() on the favoriteWords array to return elements that have more than 7 characters. Save the returned array to a const variable named longFavoriteWords.

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(words => words.length > 7);


//The .findIndex() Method


//Calling the .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.


const jumbledNums = [123, 25, 78, 5, 9]; 
 
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});


console.log(lessThanTen); // The output is three - considering that the function === true at the 3rd element of the array.

//If there isn’t a single element in the array that satisfies the condition in the callback, then .findIndex() will return -1.

//Invoke .findIndex() on the animals array to find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal.

const foundAnimal = animals.findIndex(num => num === 'elephant');


// Call .findIndex() on the animals array and return the index of the first element that starts with 's'. Assign the returned value to a const variable named startsWithS.

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});
// Mirar con Rodri porque el codigo de arriba es lo mismo que acá

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's';
})
console.log(startsWithS);

//The .reduce() Method

//Another widely used iteration method is .reduce(). The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array.

const numbers = [1, 2, 4, 10];
 
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})
 
console.log(summedNums) // Output: 17

/*Iteration	accumulator	currentValue	return value
	First		1			2				3
	Second		3			4				7
	Third		7			10				17*/
	
// The callback function has two parameters, accumulator and currentValue. 
// The value of accumulator starts off as the value of the first element in the array and the currentValue starts as the second element. 
// To see the value of accumulator and currentValue change, review the chart above.
// As .reduce() iterates through the array, the return value of the callback function becomes the accumulator value for the next iteration, currentValue takes on the value of the current element in the looping process


// The .reduce() method can also take an optional second parameter to set an initial value for accumulator (remember, the first argument is the callback function!). For instance:

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()
 
console.log(summedNums); // Output: 117

/*Iteration #	accumulator	currentValue	return value
		First		100			1				101
		Third		103			4				107
		Second		101			2				103
		Fourth		107			10				117*/
		
		
// Provide .reduce with an argument of a callback function. The callback function has two parameters. The first parameter is accumulator and the second parameter is currentValue. Use either a function expression or an arrow function.

const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});


const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
});


//Add second argument

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
},10);


//Use of .some / .filter / .every
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise']
console.log(words.some((word) => {
  return word.length < 6;
})); //true

const interestingWords = words.filter((word => word.length > 5)); 

console.log(interestingWords.every(word => word.length > 5)); //true

true
true


