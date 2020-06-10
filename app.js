// // ASSIGNMENT # 1
// // Chapter # 1 ALERTS
// // Task # 1
// alert("Hello, Welcome to my Website");

// // Task # 2
// alert("Error! Please enter a valid password");

// // Task # 3
// alert("Welcome to JS Land... \nHappy Coding!");

// // Task # 4
// alert("Welcome to JS Land...");
// alert("Happy Coding!");

// // Task # 5
// console.log("Hello... I can run JS through my web browser's console");

// // Task # 6 and so on is in index.html page

// // ASSIGNMENT # 2
// // Chapter # 2 VARIABLES FOR STRINGS
// // Task # 1
// var username;

// // Task # 2
// var myName = "Shehzad Khan";

// // Task # 3
// var message = "Hello World";
// alert(message);

// // Task # 4
// var name = "Jhone Doe";
// var age = "15 years old";
// var subject = "Certified Mobile Application Development";
// alert(name);
// alert(age);
// alert(subject);

// // Task # 5
// var dish = "PIZZA";
// dish += "\n";
// dish += "PIZZ";
// dish += "\n";
// dish += "PIZ";
// dish += "\n";
// dish += "PI";
// dish += "\n";
// dish += "P";
// alert(dish);

// // Task # 6
// var email = "shahzad.sk046@gmail.com";
// alert("My email address is " + email);

// // Task # 7
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book " + book);

// // Task # 8
// document.write("Yah! I can write HTML content through JavaScript");

// // Task # 9
// var line = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(line)

// // ASSIGNMENT # 3
// // Chapter # 3 VARIABLES FOR NUMBERS
// // Task # 1
// var age = "23";
// alert(" I am  " + age + " years old");

// // Task # 2
// var visit = 1;
// var newnum = ++visit;
// alert(newnum)

// // Task # 3
// var birthYear = 1997;
// document.write("My birth year is " + birthYear + "<br> Data type of my declared variable is " + typeof(birthYear));

// // Task # 4
// var visitorName = "Saqib Khan";
// var product = "T-shirt";
// var quantity = 5;
// var site = "XYZ Clothing Store";

// document.write("<b>" + visitorName + "</b> ordered <b>" + quantity + " " + product + "</b>(s) on " + site)

// // ASSIGNMENT # 4
// // Chapter # 4 VARIABLE NAMES: LEGAL & ILLEGAL
// // Task # 1
// var a = 10; var b = 5; var c = a + b;

// // // Task # 2
// // // Legal Variables
// // var firstName = "Shehzad"; //Example 1
// // var last_name = "Khan"; //Example 2
// // var $roll_no = 10700; //Exapmle 3
// // var car1 = "Audi"; //Example 4
// // var vsCode_82$ = "New Version"; //Example 5

// // // Illegal Variables
// // var 1stname = "Shehzad"; //Example 1
// // var last name = "Khan"; //Example 2
// // var roll# = 10700; //Example 3
// // // we can't declare keywords of JS
// // var var = "Audi"; //Example 4
// // var @email = "abc@abc.com"; //Example 5

// // Task # 3
// document.write("<h1>Rules for naming JS variables</h1>")
// document.write("Variable names can only contain letters, numbers, underscore(_) and dollar sign ($). For example $my_1stVariable <br> Variables must begin with a letter, $ or _. For exapmle $name, _name, or name <br> Variable names are case sensitive <br> Variable names should not be JS keywords");

// // ASSIGNMENT # 5
// // Chapter # 5 MATH EWXPRESSIONS
// // Task # 1
// var a = 8;
// var b = 3;
// var c = a + b;
// document.write("Sum of " + a + " and " + b + " is " + c);

// // Task # 2
// // Substraction
// var a = 8;
// var b = 3;
// var c = a - b;
// document.write("<br>Subtraction of " + a + " and " + b + " is " + c);

// // Multiplication
// var a = 8;
// var b = 3;
// var c = a * b;
// document.write("<br>Multiplication of " + a + " and " + b + " is " + c);

// // Division
// var a = 8;
// var b = 3;
// var c = a / b;
// document.write("<br>Division of " + a + " and " + b + " is " + c);

// // Modulus
// var a = 8;
// var b = 3;
// var c = a % b;
// document.write("<br>Modulus of " + a + " and " + b + " is " + c);

// // Task # 3
// var i;
// document.write("Value after variable declaration is: " + i);
// i = 5;
// document.write("<br>Initial value: " + i);
// i++;
// document.write("<br>Value after increment is: " + i);
// i = i + 7;
// document.write("<br>Value after addition is: " + i);
// i--;
// document.write("<br>Value after decrement is: " + i);
// i = i % 3;
// document.write("<br>The remainder is: " + i);

// // Task # 4
// var ticket = 600;
// var buy = 5;
// var totalCost = ticket * buy;
// document.write("Total cost to buy " + buy + " tickets to a movie is " + totalCost + "PKR");

// // Task # 5
// var table = 4;
// for(var i = 1; i <=10; i++){
//     document.write(table + " x " + i + " = " + table*i + "<br>");
// }

// // Task # 6
// var C = 25;
// document.write(C + "<sup>o</sup>C is " + ((C * 9 / 5) + 32) + "<sup>o</sup>F<br>");
// var F = 70;
// document.write(F + "<sup>o</sup>F is " + ((F - 32) * 5 / 9) + "<sup>o</sup>C");

// // Task # 7
// var price1 = 650;
// var price2 = 100;
// var quantity1 = 3;
// var quantity2 = 7;
// var charges = 100;
// var total = price1 * quantity1 + price2 * quantity2 + charges;
// document.write("<h1>Shopping Cart</h1>");
// document.write("<br>Price of item 1 is " + price1);
// document.write("<br>Quantity of item 1 is " + quantity1);
// document.write("<br>Price of item 2 is " + price2);
// document.write("<br>Quantity of item 2 is " + quantity2);
// document.write("<br>Shipping Charges " + charges);
// document.write("<br><br>Total cost of your order is " + total);

// // Task # 8
// var obtained_marks = 804;
// var total_marks = 980;
// var percentage = obtained_marks / total_marks * 100;
// document.write("<h1>Marks Sheet</h1>");
// document.write("Total marks: " + total_marks);
// document.write("<br>Marks obtained: " + obtained_marks);
// document.write("<br>Percentage: " + percentage + "%");

// // Task # 9
// // in multi line expression
// var dollar = 104.80;
// var riyal = 28;
// var totalPKR = 10 * dollar + 25 * riyal;
// document.write("<h1>Currency in PKR</h1>");
// document.write("<br>Total Currency  in PKR: " + totalPKR);

// // in single line expression
// var totalpkr = 10 * 104.80 + 25 * 28;
// document.write("<br>Total Currency  in PKR: " + totalpkr);

// // Task # 10
// var num = 5;
// document.write((num + 5) * 10 / 2);

// // Task # 11
// var current_year = 2016;
// var birth_year = 1992;
// var your_age = current_year - birth_year;
// document.write("<h1>Age Calculator</h1>");
// document.write("<br>Current Year: " + current_year);
// document.write("<br>Birth Year: " + birth_year);
// document.write("<br>Your Age is: " + your_age);

// // Task # 12
// document.write("<h1>The Geometrizer</h1>");
// var pi = 3.142;
// var radius = 20;
// var circumference = 2 * pi * radius;
// var area = pi * radius ** 2;
// document.write("<br>Radius of a circle: " + radius);
// document.write("<br>The circumference is: " + circumference);
// document.write("<br>The area is: " + area);

// // Task # 13
// document.write("<h1>The Lifetime Supply Calculator</h1>");
// var snack = "Chocolate Chip";
// var current_age = 15;
// var maximum_age = 65;
// var amount = 3;
// document.write("<br>Favourite Snack: " + snack);
// document.write("<br>Current age: " + current_age);
// document.write("<br>Estimated Maximum Age: " + maximum_age);
// document.write("<br>Amount of snacks per day: " + amount);
// document.write("<br>You will need " + ((maximum_age - current_age) * amount) + " " + snack + " to last you until the ripe  old age of " + maximum_age);

// // ASSIGNMENT # 6
// // Chapter # 6 - 9
// // Task # 1
// var a = 10;
// document.write(" Result:<br>");
// document.write("The value of a is: " + a);
// document.write("<br><br>'''''''''''''''''''''''''''''''''''''''''''''''''''''''<br>");
// document.write("<br>The value of ++a is: " + ++a);
// document.write("<br>Now the value of a is: " + a);
// document.write("<br><br><br>The value of a++ is: " + a++);
// document.write("<br>Now the value of a is: " + a);
// document.write("<br><br><br>The value of --a is: " + --a);
// document.write("<br>Now the value of a is: " + a);
// document.write("<br><br><br>The value of a-- is: " + a--);
// document.write("<br>Now the value of a is: " + a);

// // Task # 2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// // a = 2 and b = 1
// // --a (Pre-Decrement) a--(Post-Decrement) a++(Post-Increment) ++a(Pre-Increment)
// // --a; is pre-decrement and will decrement value first from 2 and then it will results 1
// // --a - --b; will decrement value and a will be 1 and b will be 0 --a - --b will result 1
// // --a - --b + ++b; will result 1 - 0 + 1 = 2
// // --a - --b + ++b + b--; will result 1 - 0 + 1 + 1 = 3
// document.write("a is " + a);
// document.write("<br>b is " + b);
// document.write("<br>result is " + result);

// // Task # 3
// var name = prompt("Enter your Name: ");
// document.write("Hi Dear " + name);

// // Task # 5
// var table = +prompt(" Enter Table No: ", 5);
// for(var i = 1; i <= 10; i++){
//     document.write("<br>" + table + " x " + i + " = " + table*i);
// }

// // Task # 6
// var sub1 = prompt("Enter First Subject");
// var obtMarks1 = +prompt("Enter Marks for 1st Subject");
// var sub2 = prompt("Enter Second Subject");
// var obtMarks2 = +prompt("Enter Marks for 2nd Subject");
// var sub3 = prompt("Enter Third Subject");
// var obtMarks3 = +prompt("Enter Marks for 3rd Subject");
// var totalMarks = 100;
// var allTotal = totalMarks * 3;
// var allObtain = obtMarks1 + obtMarks2 + obtMarks3;
// var allPercentage = allObtain / allTotal * 100;
// document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><br>");
// document.write("<tr><td>"+ sub1 + "</td> <td>" + totalMarks + "</td><td>" + obtMarks1 + "</td><td>" + (obtMarks1 / totalMarks * 100) + "%</tr>");
// document.write("<tr><td>"+ sub2 + "</td> <td>" + totalMarks + "</td><td>" + obtMarks2 + "</td><td>" + (obtMarks2 / totalMarks * 100) + "%</tr>");
// document.write("<tr><td>"+ sub3 + "</td> <td>" + totalMarks + "</td><td>" + obtMarks3 + "</td><td>" + (obtMarks3 / totalMarks * 100) + "%</tr>");

// document.write("<b><tr><td></td> <th>" + allTotal + "</th><th>" + allObtain + "</th><th>" + allPercentage + "%</tr>");

// // ASSIGNMENT # 9 - 10
// // Chapter # 9 to 11
// // Task # 1
// var city = prompt("Enter Your City Name");
// if(city == "Karachi"){
//     document.write("Welcome to the City of Lights")
// }
// else if(city == "Islamabad"){
//     document.write("Welcome to the Capital of Pakistan")
// }
// else{
//     document.write("Welcome to " + city)
// }

// // Task # 2
// var gender = prompt("Enter your Gender");
// if(gender == "Male" || gender == "male"){
//     document.write("Good Morning Sir")
// }
// else if(gender == "Female" || gender == "female"){
//     document.write("Good Morning Madam")
// }
// else{
//     document.write("Input the right Gender")
// }

// // Task # 3
// var color = prompt("Enter Signal Color");
// if(color == "Red"){
//     document.write("Must Stop");
// }
// else if(color == "Yellow"){
//     document.write("Ready to move");
// }
// else if(color == "Green"){
//     document.write("Move now");
// }
// else{
//     document.write("It's not a Traffic Signal Color");
// }

// // Task # 4
// var fuelInCar = +prompt("Enter remaining fuel in car(in litres)");
// if(fuelInCar <= 0.25){
//     document.write("Please refill the fuel in your car");
// }
// else{
//     document.write("No need to refill fuel");
// }

// // Task # 5
// // a
// var a = 4;
// if(++a === 5){
//     alert("given condition for variable a is true");
// }

// // b
// var b = 82;
// if(b++ === 83){
//     alert("given condition for variable b is true");
// }

// // c
// var c = 12;
// if(c++ === 13){
//     alert("condition 1 is true");
// }
// if(c === 13){
//     alert("Condition 2 is true");
// }
// if(++c < 14){
//     alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
// }

// // d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if(totalCost === laborCost + materialCost){
//     alert("The cost equals")
// }

// // e
// if(true){
//     alert("True");
// }

// if(false){
//     alert("False")
// }

// // f
// if("car"<"cat)"){
//     alert("car is smaller than cat");
// }

// // Task # 6
// var subj1 = +prompt("Enter English Marks Obtained");
// var subj2 = +prompt("Enter Urdu Marks Obtained");
// var subj3 = +prompt("Enter Math Marks Obtained");
// var obtain = (subj1 + subj2 + subj3);
// var totalmarks = 300;
// var percent = (obtain / totalmarks * 100);
// document.write("<h1>Marks Sheet</h1>");
// document.write("<br>Total marks : " + totalmarks);
// document.write("<br>Marks obtained : " + obtain);
// document.write("<br>Percentage : " + percent + "%");

// if(percent >= 80){
//     document.write("<br>Grade : A-one<br>Remarks : Excellent");
// }

// else if(percent >= 70){
//     document.write("<br>Grade : A<br>Remarks : Good");
// }

// else if(percent >= 60){
//     document.write("<br>Grade : B<br>Remarks : You need to improve");
// }

// else if(percent < 60){
//     document.write("<br>Grade : Fail<br>Remarks : Sorry");
// }

// else{
//     document.write("<br>Please Enter Marks from 0 to 100");
// }

// // Task # 7
// var secret = 8;
// var guess = +prompt("Guess the Secret Number");
// if(guess === secret){
//     document.write("Bingo! Correct answer");
// }
// else if(guess === secret+1){
//     document.write("Close enough to the correct answer");
// }
// else{
//     document.write("Try Again");
// }

// // Task # 8
// var numb = 8;
// if(numb % 3 === 0){
//     document.write("Number is Divisible by 3");
// }
// else{
//     document.write("Number is not divisible by 3");
// }

// // Task # 9
// var even = +prompt("Enter Number to check the number is even or odd");
// if(even % 2 === 0){
//     document.write("This is an Even Number");
// }
// else{
//     document.write("This is an Odd Number");
// }

// // Task # 10
// var temp = +prompt("Enter Today's Temperature");
// if(temp > 40){
//     document.write("It is too hot  outside.");
// }
// else if(temp > 30){
//     document.write("The Weather today is Normal.");
// }
// else if(temp > 20){
//     document.write("Today's Weather  is cool.");
// }
// else if(temp > 10){
//     document.write("OMG! Today's weather  is so Cool.");
// }
// else{
//     document.write("Try Again!!!");
// }

// // Task # 11
// var firstNum = +prompt("Enter First Number to Calculate");
// var secondNum = +prompt("Enter Second Number to Calculate");
// var operator = prompt("Enter operator to Calculate");
// if(operator == "+"){
//     document.write(firstNum + secondNum)
// }
// else if(operator == "-"){
//     document.write(firstNum - secondNum)
// }
// else if(operator == "*"){
//     document.write(firstNum * secondNum)
// }
// else if(operator == "/"){
//     document.write(firstNum / secondNum)
// }
// else if(operator == "%"){
//     document.write((firstNum / secondNum * 100))
// }
// else{
//     document.write("Wrong Calculation Please Try Again!!")
// }

// // ASSIGNMENT # 12 - 13
// // Chapter # 12 - 13
// // Task # 1
// var char = prompt("Enter any Character");
// if(char >= 'A' && char <= 'Z'){
//     document.write("This is an Uppercase Letter");
// }
// else if(char >= 'a' && char <= 'z'){
//     document.write("This is an Lowercase Letter");
// }
// else if(char >= 0 && char <= 9){
//     document.write("This is a Number");
// }
// else{
//     document.write("Try Again");
// }

// // Task # 2
// var a = +prompt("Enter a number");
// var b = +prompt("Enter a number");
// if(a > b){
//     document.write(a + " is Largest Number")
// }
// else if(b > a){
//     document.write(b + " is Largest Number")
// }

// else{
//     document.write("All Number all are equals")
// }


// // Task # 3
// var number = +prompt("Enter number to check positive or negative");
// if(number > 0){
//     document.write(number + " is Positive Number");
// }
// else if(number === 0){
//     document.write(number + " is Zero Number")
// }
// else if(number < 0){
//     document.write(number + " is Negative Number");
// }

// // Task # 4
// var character = prompt("Enter a string to check Vowel  or Consonant");
// if(character == "a" || character == "e" || character == "i" || character == "o" || character == "u" || character == "A" || character == "E" || character == "I" || character == "O" || character == "U"){
//     document.write(true)
// }
// else{
//     document.write(false)
// }

// // Task # 5
// var password = "SMIT1234";
// var inpass = prompt("Enter your password");
// if(password === inpass){
//     document.write("Correct! The password you entered matches the original password")
// }
// else{
//     document.write("Incorrect password")
// }

// // ASSIGNMENT # 13 - 15
// // Chapter # 13 - 15
// // Task # 1
// var student = [];

// // Task # 2
// var student1 = [{}];

// // Task # 3
// var strarr = ["Shehzad","Zohaib","Waqas"];

// // Task # 4
// var numarr = [1,2,3,4,45];

// // Task # 5
// var boolarr = [true, false, true]

// // Task # 6
// var mixarr = ["Shehzad", 148, true];

// // Task # 7
// document.write("<h1>Qualifications:</h1><br>")
// var qualification = ["1). SSC", "2). HSC", "3). BCS", "4). BS", "5). BCOM", "6). MS", "7). M. Phil.", "8). PhD"];
// document.write(qualification[0])
// document.write("<br>" + qualification[1])
// document.write("<br>" + qualification[2])
// document.write("<br>" + qualification[3])
// document.write("<br>" + qualification[4])
// document.write("<br>" + qualification[5])
// document.write("<br>" + qualification[6])
// document.write("<br>" + qualification[7])

// // Task # 8
// var sname = ["Michael", "John", "Tony"];
// var score = [320, 230, 480];
// var total = 500;
// document.write("Score of " + sname[0] + " is " + score[0] + ". Percentage: " + (score[0] / total * 100) + "%")
// document.write("<br>Score of " + sname[1] + " is " + score[1] + ". Percentage: " + (score[1] / total * 100) + "%")
// document.write("<br>Score of " + sname[2] + " is " + score[2] + ". Percentage: " + (score[2] / total * 100) + "%")

// // Task # 9
// var colorname = ["Red", "Green", "Yellow", "Blue"]
// document.write(colorname)
// // a.
// var askcolor = prompt("What color you want to add to the beginning of this list")
// colorname.unshift(askcolor)
// document.write("<br>" + colorname)
// // b.
// var askcolor = prompt("What color you want to add to the end of this list")
// colorname.push(askcolor)
// document.write("<br>" + colorname)
// // c.
// colorname.unshift("Pink", "Brown")
// document.write("<br>" + colorname)
// // d. 
// colorname.shift()
// document.write("<br>" + colorname)
// // e.
// colorname.pop()
// document.write("<br>" + colorname)
// // f.
// var askIndexToAdd = +prompt("Enter Index number where you want to add in array")
// var askColorToAdd = prompt("Enter Color name to add in the given index in array")
// colorname.splice(askIndexToAdd, 0,  askColorToAdd)
// document.write("<br>" + colorname)
// var askIndexToDel = +prompt("Enter Index number where you want to add in array")
// var askRangetoDel = prompt("Enter number of index to delete color from the given index in array")
// colorname.splice(askIndexToDel, askRangetoDel)
// document.write("<br>" + colorname)

// // Task # 10
// var Score1 = [320, 230, 480, 120];
// document.write(Score1 + "<br>")
// Score1.sort();
// document.write(Score1)

// // Task # 11
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write("Cities list:<br>" + cities);
// selectedCities = cities.slice(2, 4)
// document.write("<br><br>Selected cities list:<br>" + selectedCities)

// // Task # 12
// var arr = ["This", "is", "my", "cat"];
// document.write("Array:<br>" + arr);
// var arrtostr = arr.join(" ");
// document.write("<br><br>String:<br>" + arrtostr);

// // Task # 13
// var devices = [];
// devices[0] = "keyboard";
// devices[1] = "mouse";
// devices[2] = "printer";
// devices[3] = "monitor";
// document.write("Devices:<br>" + devices + "<br>");
// document.write("<br>Out:<br>" + devices.shift());
// document.write("<br>Out:<br>" + devices.shift());
// document.write("<br>Out:<br>" + devices.shift());
// document.write("<br>Out:<br>" + devices.shift());

// // Task # 14
// var devices1 = [];
// devices1[0] = "keyboard";
// devices1[1] = "mouse";
// devices1[2] = "printer";
// devices1[3] = "monitor";
// document.write("Devices:<br>" + devices1 + "<br>");
// document.write("<br>Out:<br>" + devices1.pop());
// document.write("<br>Out:<br>" + devices1.pop());
// document.write("<br>Out:<br>" + devices1.pop());
// document.write("<br>Out:<br>" + devices1.pop());

// // Task # 15
// var manufacture = ["Apple", "Samsung", "Motorola", "Nokia", "Sony & Haier"];
// document.write("<h1>Manufacturers:</h1>")
// document.write("<select><option>" + manufacture[0] + "</option><option>" + manufacture[1] + "</option><option>" + manufacture[2] + "</option><option>" + manufacture[3] + "</option><option>" + manufacture[4] + "</option></select>");

// // ASSIGNMENT # 17 - 20
// // Chapter # 17 - 20
// // Task # 1
// var mdarr = [];

// // Task # 2
// var mdarray = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]
// document.write(mdarray)

// // Task # 3
// for(i = 1; i <= 10; i++){
//     document.write("<br>" + i)
// }

// // Task # 4
// var table = +prompt("Enter a number to show its multiplication table");
// var length = +prompt("Enter length of multiplication table");
// document.write("Multiplication table of " + table);
// document.write("<br>Length " + length + "<br><br>")
// for(i = 1; i <= length; i++){
//         document.write(table + " x " + i + " = " + table * i + "<br>")
// }

// // Task # 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// document.write(fruits.join("<br>"))
// for(var i = 0; i < fruits.length; i++){
//     document.write("<br>Element at index [" + i + "] is " + fruits[i])
// }

// // Task # 6
// // Counting
// document.write("<h3>Counting:</h3>");
// for(var i = 1; i < 16; i++){
//     document.write(i + ",");
// }

// // Reverse Counting
// document.write("<h3>Reverse counting:</h3>");
// for(var j = 10; j > 0; j--){
//     document.write(j + ",")
// }

// // Even Numbers
// document.write("<h3>Even:</h3>");
// for(var k = 0; k <= 20; k += 2){
//     document.write(k + ",");
// }

// // Odd Numbers
// document.write("<h3>Odd:</h3>");
// for(var l = 1; l < 20; l += 2){
//     document.write(l + ",")
// }

// // Series Numbers
// document.write("<h3>Series:</h3>");
// for(var m = 2; m <= 20; m += 2){
//     document.write(m + "k,");
// }

// // Task # 7
// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var found = false;
// for (var i = 0; i < bakery.length; i++) {
//     // document.write(search)
//     if (bakery[i] === search) {
//         document.write(search + " is <b>available</b> at index " + i + " in our bakery<br>");
//         found = true;
//         break
//     }
// }
// if(!found){
//     document.write("We are sorry. " + search + " is <b>not available</b> in our bakery")
// }

// // Task # 8
// var arr1 = [24, 53, 78, 91, 12];
// var largenum = 0;
// for(i = 0; i <= largenum; i++){
//     if(arr1[i] > largenum){
//         largenum = arr1[i]
//     }
// }
// document.write("Array items: " + arr1);
// document.write("<br>The largest number is " + largenum);

// // Task # 9
// var arr2 = [24, 53, 78, 91, 12];
// var smallnum = arr2[0];
// for(i=0; i < arr2.length; i++){
//     if(arr2[i] < smallnum){
//         smallnum = arr2[i];
//     }
// }
// document.write("<br>Array items: " + arr2);
// document.write("<br>The smallest number is " + smallnum);

// Task # 10
for(var i = 5; i <=100; i += 5){
    document.write(i + ", ");
}