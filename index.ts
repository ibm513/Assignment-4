/*Question No 1: Hello Variable
Instructions: Declare a variable named greeting with the string value 
"Hello, World!" and print it.

let greeting; // Assign "Hello, World!" to this variable and print it.*/

console.log(" ");
console.log("Question No 1");
console.log(" ");
let greeting = "Hello World";
console.log("Hello World");
console.log(" ");

/*Question No 2: Basic Math
Instructions: Define two variables with integer values and 
calculate their sum, difference, product, and quotient.

let num1, num2; // Assign integer values and perform arithmetic operations.*/
console.log("Question No 2");
console.log(" ");
let x = 8;
let y = 2;
let add = x + y;
let subtract = x - y;
let product = x * y;
let divison = x / y;
console.log("Sum of x & y is: ", add);
console.log("Diffrence of x & y is: ", subtract);
console.log("Product of x & y is: ", product);
console.log("Divison of x & y is: ", divison);
console.log(" ");
/*Question No 3: Swapping Values
Instructions: Swap the values of two variables without using a third variable.

let a = 1,
  b = 2; // Swap these values without using a new variable.*/
console.log("Question No 3");
console.log(" ");
let a1 = 1;
let b1 = 2;
console.log(`Value of a1 and a2 before swapping is ${a1} & ${b1} respectively`);
a1 = a1 + b1;
b1 = a1 - b1;
a1 = a1 - b1;
console.log(`Value of a1 and a2 after swapping is ${a1} & ${b1} respectively`);
console.log(" ");
/*Question 4: Type Annotation (TypeScript)
Instructions: This applies to TypeScript. Create a string variable and 
try changing its type.

let message: string; // Now try assigning a number to it and see what happens.*/
console.log("Question No 4");
console.log(" ");
let message: string = 5;
console.log(`By assigning number to a string variable this error is received 
"index.ts:54:5 - error TS2322: Type 'number' is not assignable to type 'string'."`);
console.log(" ");
/*Question No:5 Modulus Operator
Instructions: Use the modulus operator to find the remainder of two numbers.

let num1, num2; // Use the modulus operator (%) to find the remainder.*/
console.log("Question No 5");
console.log(" ");
let x1 = 8;
let x2 = 5;
console.log("Modulus of x1 & x2 is: ", x1 % x2);
console.log(" ");
/*Question No 6: Increment Challenge
Instructions: Increment a variable's value by 1 using two different methods.

let counter = 0; // Increment this value by 1 in two different ways.*/
console.log("Question No 6");
console.log(" ");
let x3 = 0;

console.log("Method No 1: ", (x3 = x3 + 1));
console.log("Method No 2: ", x3++);
console.log(" ");
/*7. Logical Gates
Instructions: Given three boolean variables, write expressions for 
AND, OR, and NOT gates.

let a = true,
  b = false,
  c = true; // Write expressions using these.*/
console.log("Question No 7");
console.log(" ");
let a = true;
let b = false;
let c = true;

console.log("AND output: ", a && b && c);
console.log("OR output: ", a || b || c);
console.log("Not of a: ", !a);
console.log("Not of b: ", !b);
console.log("Not of c: ", !c);
console.log(" ");
/*Question No 8: Compound Assignment
Instructions: Show examples of using compound assignment operators.

let num = 10; // Use +=, -=, *=, and /= on this variable.*/
console.log("Question No 8");
console.log(" ");
let num = 10;
console.log((num += 5));
console.log((num -= 4));
console.log((num *= 4));
console.log((num /= 2));
console.log(" ");
/*Question No 9: Even or Odd
Instructions: Write a program to check if a number is even or odd.
let num; // Determine if this is even or odd.*/
console.log("Question No 9");
console.log(" ");
let num_1 = 9;
if (num_1 % 2 == 0) {
  console.log(`${num_1} is an even number`);
} else {
  console.log(`${num_1} is an odd number`);
}
console.log(" ");
/*Question No 10: Voting Eligibility
Instructions: Check if a person is eligible to vote.

let age; // Check if age is 18 or older to determine voting eligibility.*/
console.log("Question No 10");
console.log(" ");
let age = 17;
if (age >= 18) {
  console.log(`You are eliglible to vote`);
} else {
  console.log(`You are not eliglible to vote`);
}
console.log(" ");
/*Question No 11: Grading System
Instructions: Assign a grade based on a numerical score.

let score; // Use conditionals to assign and print grades A, B, C, D, or F.*/
console.log("Question No 11");
console.log(" ");
let marks_obtained = 10;
let total_marks = 100;
if (marks_obtained / total_marks >= 0.85) {
  console.log(`You have obtained A grade`);
} else if (
  marks_obtained / total_marks < 0.85 &&
  marks_obtained / total_marks >= 0.7
) {
  console.log(`You have obtained B grade`);
} else if (
  marks_obtained / total_marks < 0.7 &&
  marks_obtained / total_marks >= 0.5
) {
  console.log(`You have obtained C grade`);
} else if (
  marks_obtained / total_marks < 0.5 &&
  marks_obtained / total_marks >= 0.33
) {
  console.log(`You have obtained D grade`);
} else {
  console.log(`You have obtained F grade`);
}
console.log(" ");
/*12. Max of Three
Instructions: Find the maximum of three numbers.

let x, y, z; // Determine the largest among these.*/
console.log("Question No 12");
console.log(" ");
let x4 = 0.5;
let x5 = 0.16;
let x6 = 0.77;

if (x4 > x5 && x4 > x6) {
  console.log("x4 is greatest");
} else if (x5 > x4 && x5 > x6) {
  console.log("x5 is greatest");
} else {
  console.log("x6 is greatest");
}
console.log(" ");
/*13. Leap Year Checker
Instructions: Check if a given year is a leap year.

let year; // Determine if this is a leap year.

If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
The year is a leap year (it has 366 days).
The year is not a leap year (it has 365 days).*/
console.log("Question No 13");
console.log(" ");
let year = 2000;

if (year % 4 == 0) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      console.log(`${year} is a leap year`);
    } else {
      console.log(`${year} is not a leap year`);
    }
  } else {
    console.log(`${year} is a leap year`);
  }
} else {
  console.log(`${year} is not a leap year`);
}
console.log(" ");
/*Question No 14: Fahrenheit to Celsius Converter
Instructions: Write a program that converts temperature from Fahrenheit to Celsius.

let fahrenheit; // Convert this to Celsius and print the result.*/

// °C = (°F - 32) × 5/9
console.log("Question No 14");
console.log(" ");
let temp_F = 98.8;
let temp_C = ((temp_F - 32) * 5) / 9;

console.log(`The temp in Celsius is: ${temp_C}`);
console.log(" ");
/*Question 15: Positive, Negative, or Zero
Instructions: Check if a number is positive, negative, or zero.

let number; // Determine the sign of this number.*/
console.log("Question No 15");
console.log(" ");
let a3 = -0.5;
if (a3 == 0) {
  console.log("a3 is zero");
} else if (a3 > 0) {
  console.log("a3 is a positive number");
} else {
  console.log("a3 is a negative number");
}
console.log(" ");
/*Question No 16: Multiplication Table
Instructions: Write a program that prints the multiplication table of a given number up to 10.

let number; // Print the multiplication table for this number up to 10.*/
console.log("Question No 16");
console.log(" ");
let j = 5;
for (let i = 0; i <= 10; i++) {
  console.log(`${j} * ${i} =`, j * i);
}
console.log(" ");
