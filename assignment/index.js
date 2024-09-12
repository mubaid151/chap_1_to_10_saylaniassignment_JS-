// ASSINGMENT NO 1 Chapter 1 "alerts"

alert("Error! Please enter a valid password");

alert("Welcome to JS land....\n Happy Coding!");

alert("hello i can run JS through console");
console.log(alert);


// chapter 2 "Variables"
 var username = 10;
 var myName = "mohammad ubaid";
 console.log(myName);

 var titled = "hello world";
 alert(titled);
 
 var name1 = "Mohammad Ubaid";
 alert(name1);

 var age = "20 years old";
 alert(age);

 var certification = "certified by saylani mass it training center";
 alert(certification);

 var pizza = "PIZZA \n PIZZ \n PIZ \n PI \n P";
 alert(pizza);

 var email = "My email address is example151@gmail.com";
 alert(email);

 var book = "A smarter way to learn JS";
 alert(book);

 var design = "----------^^^*$$$*^^^-------------";
 alert(design);


//  Chapter 3 "Variables and Numbers"

var age = "I am 20 years old";
alert(age);

var number = "You have visited this website 10 times";
alert(number);

var birthYear = "My birthday year is 2010";



// CHAPTER NO 4 VARIABLE NAME: LEGAL AND IILEGAL
// Declare 3 variables in one statement

var a=1, b=2, c=3;

// Declare 5 legal and illegal variable names
// legal varaible names
 var myVariable = "ubaid";
var _underscore = "123";
 var $dollarSignVar = "score";
var camelCase = "camel";
var variable123 = "variable";

// illegal variable names

// var 123variable = "123";
// var my-variable = "variable";
// var var = "ubaid";
// var my variable = "char"; 
// var @specialchar = "special";

// CHAPTER NO 5 MATH EXPRESSIONS

var a = 8;
var b = 8;
var sum = a+b;
var multiply = a*b;
var division = a/b;
var Modulus = a%b;

console.log("sum is: " +sum);
console.log("Multiplication is: " +multiply);
console.log("Division is: " +division);
console.log("moduslus is: " +Modulus);

// Do the following mathematical expression in JS:
// a)
 var u;
//  c)
var u = 10;
// e)
u++;
// g)

u += 7;

// i)
u--;
// k)
var Modulus = a%b;

// COST OF ONE MOVIES IS 600PKR
var movies = 600*5;

console.log("TOTAL COST TO BUY FIVE TICKETS TO A MOVIE IS: " +movies);

// Table of 4
console.log("4 x 1 = " + (4 * 1));
console.log("4 x 2 = " + (4 * 2));
console.log("4 x 3 = " + (4 * 3));
console.log("4 x 4 = " + (4 * 4));
console.log("4 x 5 = " + (4 * 5));
console.log("4 x 6 = " + (4 * 6));
console.log("4 x 7 = " + (4 * 7));
console.log("4 x 8 = " + (4 * 8));
console.log("4 x 9 = " + (4 * 9));
console.log("4 x 10 = " + (4 * 10));


var celsius = 30;  // example value in Celsius
var fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + "°C is equal to " + fahrenheit + "°F");

var fahrenheitValue = 86;  // example value in Fahrenheit
var celsiusValue = (fahrenheitValue - 32) * 5/9;
console.log(fahrenheitValue + "°F is equal to " + celsiusValue + "°C");

// 7)write a programe to checkout process of a shopping cart system of an e commerce website store the following in variables 

var item1Name = "Laptop";
var item1Price = 800;  
var item1Quantity = 1;

var item2Name = "Headphones";
var item2Price = 100;
var item2Quantity = 2;

var item3Name = "Mouse";
var item3Price = 20;
var item3Quantity = 3;

// Chapter 6 Math expression

var abc = 10;

++abc;
console.log(abc);

abc++;
console.log(abc);

--abc;
console.log(abc);

abc--;
console.log(abc);

var b=2, a=1;
var result = --a - --b + ++b + b--;

console.log(result);



// CHAPTER 7 T0 10 MATH EXPRESSION
var user = prompt("please enter your name");
console.log(user);

alert("WELCOME...")

var user1 = +prompt("please enter number table from (2 to 4) which do you want see on console ...");

if(user1 === 2){
console.log("2 x 1 = " + (2 * 1));
console.log("2 x 2 = " + (2 * 2));
console.log("2 x 3 = " + (2 * 3));
console.log("2 x 4 = " + (2 * 4));
console.log("2 x 5 = " + (2 * 5));
console.log("2 x 6 = " + (2 * 6));
console.log("2 x 7 = " + (2 * 7));
console.log("2 x 8 = " + (2 * 8));
console.log("2 x 9 = " + (2 * 9));
console.log("2 x 10 = " +(2 * 10));

}
else if(user1 === 3){
console.log("3 x 1 = " + (3 * 1));
console.log("3 x 2 = " + (3 * 2));
console.log("3 x 3 = " + (3 * 3));
console.log("3 x 4 = " + (3 * 4));
console.log("3 x 5 = " + (3 * 5));
console.log("3 x 6 = " + (3 * 6));
console.log("3 x 7 = " + (3 * 7));
console.log("3 x 8 = " + (3 * 8));
console.log("3 x 9 = " + (3 * 9));
console.log("3 x 10 = " +(3 * 10));
}

else if(user1 === 4){
    console.log("4 x 1 = " + (4 * 1));
    console.log("4 x 2 = " + (4 * 2));
    console.log("4 x 3 = " + (4 * 3));
    console.log("4 x 4 = " + (4 * 4));
    console.log("4 x 5 = " + (4 * 5));
    console.log("4 x 6 = " + (4 * 6));
    console.log("4 x 7 = " + (4 * 7));
    console.log("4 x 8 = " + (4 * 8));
    console.log("4 x 9 = " + (4 * 9));
    console.log("4 x 10 = " +(4 * 10));
    }
else{
    console.log("5 x 1 = " + (5 * 1));
    console.log("5 x 2 = " + (5 * 2));
    console.log("5 x 3 = " + (5 * 3));
    console.log("5 x 4 = " + (5 * 4));
    console.log("5 x 5 = " + (5 * 5));
    console.log("5 x 6 = " + (5 * 6));
    console.log("5 x 7 = " + (5 * 7));
    console.log("5 x 8 = " + (5 * 8));
    console.log("5 x 9 = " + (5 * 9));
    console.log("5 x 10 = " +(5 * 10)); 
}

var sub1 = prompt("Please enter subject 1 name");
var sub2 = prompt("Please enter subject 2 name");
var sub3 = prompt("Please enter subject 3 name");
var totalmarks = alert("total marks for each subject is 100")
var obtsub1 = +prompt("please enter obtaining marks of sub1");
var obtsub2 = +prompt("please enter obtaining marks of sub2");
var obtsub3 = +prompt("please enter obtaining marks of sub3");
var totalobtmarks = obtsub1 + obtsub2 + obtsub3;
var percentage = totalobtmarks / 300 * 100;
console.log(sub1);

console.log(sub2);

console.log(sub3);

console.log(totalmarks);

console.log(obtsub1);

console.log(obtsub2);

console.log(obtsub3);

console.log("total obtaining marks: " + totalobtmarks);
console.log("Your percentage is: " + percentage +"%");








