
/*


1.
Race numbers are assigned randomly. We’ve provided the necessary code at the top of the file.
Check off this task after reading that line.
You can read the hint if you want to learn how it works!


2.
Create a variable that indicates whether a runner registered early or not.
Set it equal to a Boolean value. You’ll change this later as you test different runner conditions.


3.
Create a variable for the runner’s age and set it equal to a number.
You’ll change this later as you test different runner conditions.


4.
Create a control flow statement that checks whether the runner is an adult AND registered early.
Add 1000 to their raceNumber if this is true.


5.
Create a separate control flow statement below the first (starting with if again). This statement will check age and registration time to determine race time.
For runners over 18 who registered early, log a statement to the console telling them that they will race at 9:30 am. Include their raceNumber.


6.
“Late adults run at 11:00 am”
Since we already checked for early adults we can write a statement like this: else if runner is over 18 AND did not register early they will race at 11:00am
Write the corresponding else if statement.
Within that, log a string to the console telling them that they will race at 11:00 am. Include their raceNumber.


7.
“Youth registrants run at 12:30 pm (regardless of registration)”
For people who are under 18, log a statement to the console telling them that they will race at 12:30 pm. Include their raceNumber.


8.
Enter different combinations of values for the two variables you created and run your code several times. Verify that the correct statements are printing to the console!
You can check your work using the examples provided in the hint.


9.
Don’t forget about runners exactly 18 years old!
Add an else statement that logs a statement to the console telling the runner to see the registration desk.

*/

let raceNumber = Math.floor(Math.random() * 1000);
//Assign a random race number from 1 to 1000)

let runner_age = 18; //Set the age of the runner
let defined_age = runner_age || 'Please enter the age of the runner'; //if the default age is empty the message will be displayed

//Quiero refactorizar esto que viene debajo, pero con el conocimiento que tengo hasta ahora no se me ocurre otra manera. Otra cosa a considerar es que el registration time no me gusta nada como lo he definido, quería hacer un array y seleccionar, pero se me hacia kilombo para los (ifs). Por ejemplo si alguien mete una hora diferente a la que defino debajo todo se va a la mierda, me gustaría aprender a definirlo mejor :)

const registration_time = "09:30 a.m"; //Define the time of the registration
let runner_register_time = registration_time || 'Please enter a registration time'; //If the registration time comes empty a message will be displayed
if((registration_time !== "09:30 a.m" && registration_time !== "11:30 a.m")){
  runner_register_time = null; 
}

console.log(runner_register_time); //-> internal check

let early_adults; // Adults registered early
let late_adults; // Adults registered late
let all_youth; // Young people < 18 - the registration time does not matter
let forbidden_youth; // The people of exact 18 year old cannot run and no racenumber is assigned

if ((runner_age > 18) && (registration_time === "09:30 a.m")){
  early_adults = true;
  console.log(`Your racenumber is ${raceNumber + 1000}`);
}
else{
  early_adults = false;
}

if((runner_age > 18) && (registration_time==="11:00 a.m")){
  late_adults = true;
  console.log(`Your racenumber is ${raceNumber + 1000}`);
}
else{
  late_adults = false;
}

if((runner_age < 18)){
    all_youth = true;
    console.log(`Your racenumber is ${raceNumber}`);
}
else{
  all_youth = false;
}

if((runner_age === 18)){
    forbidden_youth = true;
    raceNumber = null;
    console.log(`You don't have a racenumber little sucker`);
}
else{
  forbidden_youth = false;
}

/*console.log(early_adults);  //-> internal check
console.log(late_adults);
console.log(all_youth);
console.log(forbidden_youth);
console.log(raceNumber);
*/
