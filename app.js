// Chapter 1

// Question # 1

alert("Welcome to my website");

//Question # 2

alert("Error! Please enter a valid password");

//Question # 3

alert("Welcome to JS land..\nHappy Coding!");

// Question # 4

alert("Welcome to JS land..");
confirm("Happy Coding!\nPrevent this page from creating additional dialogs.");

// Question # 5
window.alert("Hello... I can run JS through my web browser's console.");

// Question # 6
window.alert("New ALERT!");

//Question # 7
// window.alert("New ALERT!")
// -----------------------body-after (html)---------------------------
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Task 7</title>
// </head>

// <body>

// </body>
// <script src="app.js"></script>

// </html>

// -----------------------body-before (html)---------------------------

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Task 7</title>
// </head>
// <script src="app.js"></script>
// <body>

// </body>
// </html>

// -----------------------body-inside (html)---------------------------

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Task 7</title>
// </head>
// <body>
//     <script src="app.js"></script>
// </body>
// </html>

// Chapter-2

// Question # 1

var userName;
// Question # 2

var myName = "Kiran Naz";
// Question # 3

var message = "Hello World";
window.alert(message);

//Question # 4

var age = 22;
var about = "Certified Mobile Application Development";

window.alert(myName);
window.alert(age + " Years Old");
window.alert(about);

//Question # 5
var string = "PIZZA";
var s;
function loop(input) {
  s = "";
  var arr = ["P", "I", "Z", "Z", "A"];
  for (var i = 0; i < input; i++) {
    s += arr[i];
  }
  return s;
}
// window.alert(loop(5) + "\n" + loop(4) + "\n" + loop(3) + "\n" + loop(2) + "\n" + loop(1));

//Question # 6
var email = "kiranaz@gmail.com";
// window.alert("My email address is " + email);

//Question # 7
var book = "A smarter way to learn JavaScript";
// window.alert("Iam trying to learn from the book " + book);

//Question # 8
var mssg = "Yah! I can write HTML content through JavaScript";
// document.write(mssg);

//Question # 9 9
window.alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");

// chapter 3

// Question #1

var age = 22;
alert("I am " + age + " years old");

//Question # 2

var myStorage = window.localStorage;
var n = myStorage.getItem("no_of_times_visited");

function site_visited() {
  if (n == null || n == NaN || n == undefined) {
    n = 0;
    myStorage.setItem("no_of_times_visited", n);
  } else {
    n++;
    myStorage.setItem("no_of_times_visited", n);
  }
}

site_visited();
alert(
  "You have visited this site " +
    myStorage.getItem("no_of_times_visited") +
    " times"
);

// Question # 3

var birthYear = 1997;
document.write(
  "My birth year is " +
    birthYear +
    "<br> Data type of my declared variable is number"
);

// Question # 4

var visitorName = window.prompt("Enter Your Name", "Enter Here");
var productName = window.prompt("Enter Product Name", "Enter Here");
var quantity = window.prompt("Enter Quantity", "Enter Here");

document.write(
  "<b>" +
    visitorName +
    "</b>" +
    " ordered " +
    "<b>" +
    quantity +
    " " +
    (quantity > 1 ? productName + "(s)" : productName) +
    "</b> on XYZ Clothing store"
);

//Chapter-4

//Question # 1
var teacher, student, principal;

//Question # 2
//legal
var $myworld, string_html, key1, king$, userinput;
//illegal
// var 1stride, comman - word;, @myworld, Code.1, zebra & lion;

document.write("<h2> Rules for naming JS variable </h2>");
document.write(
  "Variable names can only contain letters, numbers, dollarSign and underScore. Forexampel $my_1stVariable"
);
document.write(
  "<br>Variable names must begin with a letter, $, _. Forexampel $name, _name or name"
);
document.write("<br>Variable names are Case Sensitive");
document.write("<br>Variable name should not be JS keyword");

// chapter-5

// Question # 1
var a = 3;
var b = 5;
var c = parseInt(a + b);
// document.write("Sum of " + a + " and " + b + " is " + c);

// Question # 2
//subtraction
var d = a - b;
// document.write("<br> Subtraction of " + a + " and " + b + " is " + d);
//multiplication
var e = a * b;
// document.write("<br> Multiplication of " + a + " and " + b + " is " + e);
//division
var f = a / b;
// document.write("<br> Division of " + a + " and " + b + " is " + f);

// Question # 3

// var empty;
// document.write("Value after variable declaration is: " + empty);
// var num = 5;
// document.write("<br> Initial value : " +  num);
// num++;
// document.write("<br> Value after increment is : " + num);
// num += 7;
// document.write("<br> Value after addition is : " + num);
// num--;
// document.write("<br> Value after decrement is : " + num);
// num %= 3;
// document.write("<br> The remainder is : " + num);

//Question # 4
// var ticket = 600;
// var input = window.prompt("Enter Qunatity :" ,"Enter Here");
// if(input > 0){
//     ticket *= input;
//     document.write("Total cost to buy " + input + " tickets to a movie is " + ticket + " PKR");
// }
// else{
//     document.write("Thankyou..");
// }

//Question # 5
// for (var i = 1; i < 11; i++) {
//     var store = i * 4;
//     document.write("4 x " + i + " = " + store + "<br>");
// }

//Question # 6
// var celcius = window.prompt("Enter temperature in Celcius!", "Enter Here!");
// var fahrenheit = window.prompt("Enter temperature in Fahrenheit!", "Enter Here!");
// cel1 = (fahrenheit - 32) * (5 / 9);
// fah1 = (celcius * (9 / 5)) + 32;
// document.write(celcius + "°C is " + cel1.toFixed(2) + "°F <br>")
// document.write(fahrenheit + "°F is " + fah1.toFixed(2) + "°C")

//Question # 7
// document.write("<h2>Shopping Cart</h2>");

// var price_item1 = 650;
// var price_item2 = 100;
// var shipping = 100;
// document.write("Price of Item 1 is " + price_item1 + " PKR" + "<br>");
// var qua_item1 = window.prompt("Enter Quantity of Item 1!", "Enter Here");
// document.write("Quantity of Item 1 is " + qua_item1+ "<br>");
// document.write("Price of Item 2 is " + price_item2 + " PKR"+ "<br>");
// var qua_item2 = window.prompt("Enter Quantity of Item 2!", "Enter Here");
// document.write("Quantity of Item 2 is " + qua_item2+ "<br>");
// document.write("Shipping charge is " + shipping + " PKR <br>");
// var item1_total = price_item1 * qua_item1;
// var item2_total = price_item2 * qua_item2;
// var total = item1_total + item2_total + shipping;
// document.write("Total cost of your Order is " + total + " PKR");

// Question # 8

// var total_marks = 980;
// var obtained_marks = 804;
// document.write("<h2>Marks Sheet</h2>");
// var total = Number(obtained_marks * 100)/ total_marks;
// document.write("Total marks : " + total_marks +"<br>");
// document.write("Obtained marks : " + obtained_marks +"<br>");
// document.write("Percentage is : " + total.toFixed(2) + "%");

//Question # 9
// current values of dollar and riyal...
// var dollar = 10;
// var riyal = 25;
// var value_dollar = 163.50;
// var  value_riyal = 43.54;
// var total = (dollar *value_dollar) + (riyal *value_riyal);
// document.write("Total Currency in PKR : " + total.toFixed());

//Question # 10
// var someNumber = 25;
// someNumber += 2;
// document.write("Add result : " + someNumber);
// someNumber *= 10;
// document.write("<br>Multiply result : " + someNumber);
// someNumber /= 2;
// document.write("<br>Divide result : " + someNumber);

//Question # 11

// var currentYear = 2020;
// var bYear = window.prompt("Enter Your Year To find your age!", "Enter Here");
// var age = currentYear - bYear;
// document.write("<h2>Age Calculator</h2>");
// document.write("Your Age Is : " + age);

// Question # 12

// document.write("<h2>The Geometrizer</h2>");
// var radius = 20;
// document.write("Radius of a circle is " + radius);
// var cir = 2 * radius * Math.PI;
// document.write("<br>The circumference is " + cir.toFixed(2));
// var area = Math.PI * Math.pow(radius,2);
// document.write("<br>The Area is " + area.toFixed(2));

// Question # 13

// document.write("<h2> The Lifetime Supply Calculator</h2>");
// var favourite = window.prompt("Enter Your Favourite Snacks!", "Enter Here");
// var currentAge = window.prompt("Enter Your Age!", "Enter Here");
// var estdAge = window.prompt("Enter Your Estimated Age!", "Enter Here");
// var amountOfItem = window.prompt("Enter Your Requirment per day!", "Enter Here");
// var cal = Number((estdAge - currentAge) * amountOfItem);
// document.write("You will need " + cal + " " + favourite + "to last you until the ripe old age of " + estdAge);

// chapter-6-9

// Question # 1
// var a = 10;
// document.write("<h2> Result </h2>");
// document.writeln("The value of a is : " + a);
// document.writeln("<br>------------------------------------")
// document.write("<br>The value of ++a is : 11");
// ++a;
// document.write("<br>Now the value of a is : " + a + "<br>");
// document.write("<br>The value of a++ is : 11");
// a++;
// document.write("<br>Now the value of a is : " + a + "<br>");
// document.write("<br>The value of --a is : 11");
// --a;
// document.write("<br>Now the value of a is : " + a + "<br>");
// document.write("<br>The value of a-- is : 11");
// a--;
// document.write("<br>Now the value of a is : " + a);

// Question # 2
// var a = 2, b = 1;
// var c = --a - --b + ++b + b--;
// document.write("Answer Is : "+c);
// document.write("<br>Description Is <br> ------------------");
// document.write("<br>--a is 1");
// document.write("<br>--a - --b is also 1");
// document.write("<br>--a - --b + ++b is 2");
// document.write("<br>--a - --b + ++b + b-- is 3");

// Question # 3

// var greet = window.prompt("What is Your Name?", "Enter Here");
// document.write("<h1>Welcome " + greet + "!</h1>");

// Question # 4
//Not Given....

//Question # 5

// var input = Number(window.prompt("Enter Number!", "Enter Here"));
// if (input > 0) {
//     for (var i = 1; i < 11; i++) {
//         var table = input * i;
//         document.write(input + " x " + i + " = " + table + "<br>");
//     }
// }
// else {
//     for (var i = 1; i < 11; i++) {
//         var table = 5 * i;
//         document.write("5 x " + i + " = " + table + "<br>");
//     }
// }

//Question # 6
// var sub1 = window.prompt("Enter Subject 1 Name", "Enter Here!");
// var sub2 = window.prompt("Enter Subject 2 Name", "Enter Here!");
// var sub3 = window.prompt("Enter Subject 3 Name", "Enter Here!");
// var totalMarks = 100;
// var mark1 = Number(window.prompt("Enter Marks Of " + sub1, "Enter Here!"));
// var mark2 = Number(window.prompt("Enter Marks Of " + sub2, "Enter Here!"));
// var mark3 = Number(window.prompt("Enter Marks Of " + sub3, "Enter Here!"));
// document.write("<h2> Subject &emsp; Total Marks &emsp;Obtained Marks &emsp; Percentage </h2>");
// var total1 = (mark1 * 100)/totalMarks;
// var total2 = (mark2 * 100)/totalMarks;
// var total3 = (mark3 * 100)/totalMarks;
// document.write(sub1 + "&emsp;&emsp;&emsp;&emsp;&emsp;"+totalMarks+ "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+ mark1+ "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" + total1 + "% <br>");
// document.write(sub2 + "&emsp;&emsp;&emsp;&emsp;&emsp;"+totalMarks+ "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+ mark2+ "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" + total2 + "% <br>");
// document.write(sub3 + "&emsp;&emsp;&emsp;&emsp;&emsp;"+totalMarks+ "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+ mark3+ "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" + total3 + "% <br>");
// document.write("<b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+ "300" + "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" + Number(mark1+mark2+mark3) + "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" + Number((total1+total2+total3)/3).toFixed(2)+"% </b>");

// chapter 9-11
//Task 1
// var city = window.prompt("Enter City");
// if(city === "karachi"){
//     document.write("Welcome to the city of lights");
// }
// else{
//     document.write("Welcome to "+ city);
// }

// //Task 2
// var gender = window.prompt("Enter Gender!");
// if(gender === "male"){
//     document.write("Good Morning Sir");
// }
// else if(gender === "female"){
//     document.write("Good Morning Madam");
// }
// else{
//     document.write("Good Morning Dear");
// }

// //Task 3
// var color = window.prompt("Input traffic Color!");
// if(color === "red"){
//     document.write("Must Stop!");
// }
// else if(color ==="yellow"){
//     document.write("Ready to move");
// }
// else if(color === "green"){
//     document.write("Move now");
// }
// else{
//     document.write("No other color, just move");
// }

// //Task 4
// var rem_fuel = Number(window.prompt("Enter Fuel!"));
// if(rem_fuel < 0.25){
//     document.write("Please refill the fuel in your car.");
// }
// else{
//     document.write("go go go");
// }

// //Task 5
// //part a
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }// it works fine..

// //part b
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }  // it not works because of the post increment..

// //part c
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }// it not works because of the post increment..
// if (c === 13) {
//     alert("condition 2 is true");
// }// it works fine.. because c is now 13
// if (++c < 14) {
//     alert("condition 3 is true");
// } // it dose not work because c is now 14 not less than.
// if (c === 14) {
//     alert("condition 4 is true");
// }  // it works fine.. because c is 14

// //part d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }// it works fine.. because both are equal..

// //part e
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }// it shows true because if works only for true ...

// //part f
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }  // it works because of letter precedence...

// //Task 6
// var totalMarks = 300;
// var obtainedMarks = Number(window.prompt("Enter Your Marks", "Enter Here"));
// var percentage = ((obtainedMarks * 100) / totalMarks).toFixed();
// if (percentage >= 80) {
//     document.write("Total Marks : " + totalMarks + "<br>");
//     document.write("Marks Obtained : " + obtainedMarks + "<br>");
//     document.write("Percentage : " + percentage + "<br>");
//     document.write("Grade : A-one"+ "<br>");
//     document.write("Remarks : Excellent" + "<br>");
// }
// else if(percentage >= 70){
//     document.write("Total Marks : " + totalMarks + "<br>");
//     document.write("Marks Obtained : " + obtainedMarks + "<br>");
//     document.write("Percentage : " + percentage + "<br>");
//     document.write("Grade : A"+ "<br>");
//     document.write("Remarks : Good" + "<br>");
// }
// else if(percentage >= 60){
//     document.write("Total Marks : " + totalMarks + "<br>");
//     document.write("Marks Obtained : " + obtainedMarks + "<br>");
//     document.write("Percentage : " + percentage + "<br>");
//     document.write("Grade : B"+ "<br>");
//     document.write("Remarks : You need to improve" + "<br>");
// }
// else{
//     document.write("Total Marks : " + totalMarks + "<br>");
//     document.write("Marks Obtained : " + obtainedMarks + "<br>");
//     document.write("Percentage : " + percentage + "<br>");
//     document.write("Grade : Fail"+ "<br>");
//     document.write("Remarks : Sorry" + "<br>");
// }

// //Task 7
// var secretNumer = 6;
// var guess = Number(window.prompt("Enter Number between 1-10","Try your luck"));
// if(guess === secretNumer){
//     document.write("Bingo!");
// }
// else if((guess+1 === secretNumer) || (guess-1 === secretNumer)){
//     document.write("Close enough to the correct answer");
// }
// else{
//     document.write("Try Again!");
// }

// //Task 8
// var number = Number(window.prompt("Enter Number to check"));
// if(number % 3 === 0){
//     document.write("Yes it is divisible by 3");
// }

// // Task 9
// var number = Number(window.prompt("Enter Number to check"));
// if(number % 2 === 0){
//     document.write("Number is Even");
// }
// else if(number % 3 === 0){
//     document.write("Number is Odd");
// }

// //Task 10
// var temperature = Number(window.prompt("Enter Temperature"), "Enter Here");
// if (temperature > 40) {
//     document.write("It is too hot outside.");
// }
// else if (temperature > 30) {
//     document.write("The Weather today is Normal.");
// }
// else if (temperature > 20) {
//     document.write("Today’s Weather is cool.");
// }
// else if (temperature > 10) {
//     document.write("OMG! Today’s weather is so Cool");
// }

// //Task 11
// var calculation;
// var firstNumber = Number(window.prompt("Enter First Number!", "Enter Here!"));
// var secondNumber = Number(window.prompt("Enter Second Number!", "Enter Here!"));
// var operation = (window.prompt("Enter Opertion!", "Enter Here!"));
// if (operation === "+") {
//     calculation = firstNumber + secondNumber;
//     document.write("<h1>" + firstNumber + " + " + secondNumber + " = " + calculation + "</h1>");
// }
// else if (operation === "-") {
//     calculation = firstNumber - secondNumber;
//     document.write("<h1>" + firstNumber + " - " + secondNumber + " = " + calculation + "</h1>");
// }
// else if (operation === "*") {
//     calculation = firstNumber * secondNumber;
//     document.write("<h1>" + firstNumber + " x " + secondNumber + " = " + calculation + "</h1>");
// }
// else if (operation === "/") {
//     calculation = firstNumber / secondNumber;
//     document.write("<h1>" + firstNumber + " / " + secondNumber + " = " + calculation + "</h1>");
// }
// else if (operation === "%") {
//     calculation = firstNumber % secondNumber;
//     document.write("<h1>" + firstNumber + " % " + secondNumber + " = " + calculation + "</h1>");
// }
// else {
//     document.write("<h1>" + "Invalid Operation" + "</h1>");
// }

// chapter -12-13
//Task 1
// var check = window.prompt("Enter String");
// for (var i = 0; i < check.length; i++) {
//     if (check.charAt(i) == (check.charAt(i).toUpperCase())) {
//         document.write("Character is uppercase");
//         break;
//     }
// }
// if (check === check.toLowerCase()) {
//     document.write("Character is lowercase");
// }

// //Task 2
// var integer1 = window.prompt("Enter Integer 1", "Enter Here");
// var integer2 = window.prompt("Enter Integer 2", "Enter Here");
// if (integer1 > integer2) {
//     document.write(integer1 + " is greater than " + integer2);
// }
// else if (integer1 === integer2) {
//     document.write("Both are equals");
// }
// else {
//     document.write(integer1 + " is smaller than " + integer2);
// }

// //Task 3
// var number = Number(window.prompt("Enter Number to check!", "Enter Here"));
// if(number > 0){
//     document.write("Number is Positive");
// }
// else if(number === 0){
//     document.write("Number is equal to 0");
// }
// else{
//     document.write("Number is Negative");
// }

// //Task 4
// var character = window.prompt("Enter Character to Check wheater it is VOWEL or NOT!", "Enter Here");
// if (character === "A" || character === "a") {
//     document.write("Character is Vowel.");
// }
// else if (character === "E" || character === "e") {
//     document.write("Character is Vowel.");
// }
// else if (character === "I" || character === "i") {
//     document.write("Character is Vowel.");
// }
// else if (character === "O" || character === "o") {
//     document.write("Character is Vowel.");
// }
// else if (character === "U" || character === "u") {
//     document.write("Character is Vowel.");
// }
// else {
//     document.write("Character is Not Vowel.");
// }

// //Task 5
// var password = "abc123";
// var user = window.prompt("Enter Password");
// if(user === ""){
//     window.alert("Please Enter Password!");
// }
// else if(user === password){
//     window.alert("Correct! The password you entered matches the original password");
// }
// else{
//     window.alert("Incorrect Password");
// }

// //Task 6
// var greeting ;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
//     document.write(greeting);
// }
// else {
//     greeting = "Good evening";
//     document.write(greeting);
// }

// //Task 7
// var time = Number(window.prompt("Enter Time", "Enter Here"));
// if(time >= 0000 && time < 1200){
//     window.alert("Good Morning!");
// }
// else if(time >= 1200 && time < 1700){
//     window.alert("Good Afternoon!");
// }
// else if(time >= 1700 && time < 2100){
//     window.alert("Good Eveining!");
// }
// else if(time >= 2100 && time < 2359){
//     window.alert("Good Night!");
// }
// else{
//         window.alert("Invalid!");
// }

// chapter -14-16
//Task 1
// var studentName = [];

//Task 2
// studentName.push();

//Task 3
// var stringArray = new Array("Apple", "Mango", "Banana", "Pineappe");

//Task 4
// var numberArray = [234, 56, 422, 11, 8990];

//Task 5
// var booleanArray = [true, false];

//Task 6
// var mixedArray = ["Muhammad Hazique", "UBIT", "BSCS-301", "3.45", "Khatri", "1200"];

//Task 7
// var stored = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
// for (var i = 0; i < stored.length; i++) {
// document.write((i+1)+")"+" " + stored[i]+ "<br>");
// }

//Task 9
// var totalMarks = 500;
// var studName = ["Hazique", "Nabeel", "Zohaib"];
// var score = [390, 399, 421];
// for (var i = 0; i < 3; i++) {
//     percentage = 0;
//     percentage = (score[i] * 100) / totalMarks;
//      document.write("Score Of " + studName[i] + " is " + score[i] + "." + "Percentage : " + percentage + "% <br>");
// }

//Task 10
// document.write("<h1> Color Names </h1>")
// var colorNames = ["Blue", "Red", "Yellow", "Green", "White", "Brown", "Gray"];
// for (var i = 0; i < colorNames.length; i++) {
// document.write(colorNames[i] + ", ");
//}

// document.write("<h1>After Add in the beginning </h1><br>");
//Part a
// var user = window.prompt("Enter which color do you want to add in beginning?","Enter Here");
// colorNames.unshift(user);
// for (var i = 0; i < colorNames.length; i++) {
//     document.write(colorNames[i] + ", ");
// }

// document.write("<h1>After Add in the end </h1><br>");
//part b
// var user = window.prompt("Enter which color do you want to add in the end?","Enter Here");
// colorNames.push(user);
// for (var i = 0; i < colorNames.length; i++) {
//     document.write(colorNames[i] + ", ");
// }

//part c
// document.write("<h1>After Add two more in the beginning </h1><br>");
// colorNames.unshift("violet", "purple")
// for (var i = 0; i < colorNames.length; i++) {
// document.write(colorNames[i] + ", ");
//}

//part d
// document.write("<h1>After delete the first color in the beginning </h1><br>");
// colorNames.shift();
// for (var i = 0; i < colorNames.length; i++) {
//  document.write(colorNames[i] + ", ");
//}

//Part e
// document.write("<h1>After delete the last color in the beginning </h1><br>");
// colorNames.pop();
// for (var i = 0; i < colorNames.length; i++) {
//  document.write(colorNames[i] + ", ");
//}

//part f
// document.write("<h1>updated list </h1><br>");
// var user = window.prompt("Enter at which index do you want to add that color of your choice?","Enter Here");
// colorNames.splice(user, 0, "maroon");
// for (var i = 0; i < colorNames.length; i++) {
//document.write(colorNames[i] + ", ");
//}

//part g
// document.write("<h1>updated list </h1><br>");
// var user = window.prompt("Enter at which index do you want to delete  that color?", "Enter Here");
// var user1 = window.prompt("Enter how many do you want to delete?", "Enter Here");
// colorNames.splice(user, user1);
// for (var i = 0; i < colorNames.length; i++) {
// document.write(colorNames[i] + ", ");
//}

//Task 10
// var studentScore = [320, 230, 480, 120];
// studentScore.sort();
// document.write("Orderd Scores of Students : ");
// for(var i = 0;i<studentScore.length;i++){
//     document.write(studentScore[i] + ", ")
// }

//Task 11
// var citiesList = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write("Cities Name : ");
// for(var i =0 ; i < citiesList.length;i++){
//     document.write(citiesList[i] + ", ");
// }
// document.write("<br>");
// var copyCities = citiesList.slice(2,4);
// document.write("Selected Cities List : ");
// for(var i =0 ; i < copyCities.length;i++){
//     document.write(copyCities[i] + ", ");
// }

//Task 12
// var arr = ["This "," is ", " my ", " cat"];
// document.write("Array : ");
// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + ", ");
// }
// document.write("<br>");
// document.write("String : " + arr.join(" "));

//Task 13
// var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
// document.write("Devices : ");
// for (var i = 0; i < devices.length; i++) {
//     document.write(devices[i] + ", ");
// }
// document.write("<br>");
// for (var j = 0; j < devices.length; j++) {
//     document.write("Out : " + "<br>");
//     document.write(devices[j] + "<br>")
// }

//Task 14
// var devices1 = ["Keyboard", "Mouse", "Printer", "Monitor"];
// document.write("Devices : ");
// for (var i = 0; i < devices1.length; i++) {
//     document.write(devices1[i] + ", ");
// }
// document.write("<br>");
// for (var j = devices1.length-1; j >=0; j--) {
//     document.write("Out : " + "<br>");
//     document.write(devices1[j] + "<br>")
// }

//Task 15
// var company = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// window.alert("Apple, Samsung, Motorola, Nokia, Sony, Haier \nSelect Any one");
// var input = window.prompt("Enter Your Choice", "Enter Here");
// for (var i = 0; i < company.length; i++) {
//     if (input === company[i]) {
//         document.write("Congratulations! You Select : " + company[i]);
//     }
// }

// chapter-17-20

// question # 1

// var multidimension = [[]];

// // question # 2

// multidimension = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1],
// ];

// var body = `<p></p>`;

// document.body.innerHTML = body;

// var p = document.querySelector("p");

// for (let i = 0; i <= 2; i++) {
//   for (let j = 0; j <= 3; j++) {
//     p.innerText += `${multidimension[i][j]}`;
//   }
//   p.innerText += `\n`;
// }

// question # 3
// for(var i = 1;i<=10;i++){
//     document.write(i + "<br>")
// }

// question # 4

// var table = Number(window.prompt("Enter a number to show its multiplication Table"), "Enter Here");
// var length = Number(window.prompt("Enter length of multiplication Table"), "Enter Here");
// for (var i = 1; i <= length; i++) {
//     var temp = table * i;
//     document.write(table + " x " + i + " = " + temp + "<br>");
// }

// question # 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for(var i =0 ;i<fruits.length;i++){
//     document.write("Element at index " + i + " is " + fruits[i]+"<br>");
// }

// question # 6

// document.write("<h2>Counting : </h2>" + "<br>");
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ", ")
// }

// document.write("<h2>Reverse counting : </h2>" + "<br>");
// for (var i = 10; i > 0; i--) {
//     document.write(i + ", ")
// }

// // document.write("<h2>Even : </h2>" + "<br>");
// for (var i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//         document.write(i + ", ")
//     }
// }

// // document.write("<h2>Odd : </h2>" + "<br>");
// for (var i = 0; i <= 20; i++) {
//     if (i % 2 != 0) {
//         document.write(i + ", ")
//     }
// }

// // document.write("<h2>Series : </h2>" + "<br>");
// for (var i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         document.write(i + "k, ")
//     }
// }

// question # 7
// var temp = 0;
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var user1 = window.prompt("Welcome to ABC Bakery, What do you want to order Sir/ma'mm");
// for (var i = 0; i < A.length; i++) {
//     if(user1 === A[i]){
//         window.alert(A[i]+" is avaliable at index " + i + " in our bakery");
//     }
//     else{
//         temp++
//     }
// }
// if(temp === 5){
//     window.alert("We are sorry. " + user1 + " is not avaliable in our bakery.");
// }

// question # 8 ,9

// var A = [24, 53, 78, 91, 12];

// var sorted = A.slice().sort(function (a, b) {
//   return a - b;
// });

// var smallest = sorted[0];
// var largest = sorted[sorted.length - 1];

// var body = `<p></p>`;
// document.body.innerHTML = body;
// var p = document.querySelector("p");

// p.innerText += ` smallest number is ${smallest} , largest number is ${largest}`;

// question # 10

// var multiple;
// for (var i = 1; i <= 20; i++) {
//     multiple = 5*i;
//     document.write(multiple,", ");
// }
