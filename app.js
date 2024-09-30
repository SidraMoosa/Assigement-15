            //Chapter 10 (if statements)

// //q1.
// var city=prompt("Enter your city");
// if(city === "Karachi"){
//   console.log("Karachi is the city of Light");
// }
// else{
//   console.log(`You lived in ${city}` );
// }

// //q2.
// var x=10;
// var y=10;
// var z= prompt("Please enter the value of z");

// if(x ===y){
//     console.log(z);    
// }

// //q3.
// var zipcode= "10010";
// if(zipcode ==="10010"){
//     alert("Karachi");
// }
// else{
//     alert("please write correct code");
// }

// //q4.
// var x =1;
// if(x === 1){
//     x = 2;

// }

//             // Chapter 11 (Comparison Operators)

// //q1.            
// var a =10;
// var b =20;
// if(a!==b){
//     console.log(true);
// }
// else{
//   console.log(false);
// }

// //q2.
// var a= 10;
// var b= 5;
// if(a>=b){
//     console.log("a is greater or equal than b");
// }
// else{
//     console.log("a is less than b")
// }

//  //q3.
// var a =5;
// if(a!==10){
//     a= 20;
//     console.log(a);
// }

//  //q4.
// var num1= 20;
// var num2= 30;
// if(num1!==num2){
//     alert("Congratulations");
// }

// //q5.
// var firstName= prompt("Enter your firstName");
// var anotherName = "Sidra";
// if(firstName!==anotherName){
//     alert("No match");
// }

//            // Chapter 12 (if…else and else if statements)

// //q1.            
// var a= 10;
// var b= 5;
// if(a>=b){
//     alert("a is greater or equal than b");
// }
// else{
//     alert("a is less than b")
// }

// //q2.
// var totalMarks =Number(prompt("Enter your totalMarks"));
// var obtainedMarks =Number(prompt("Enter your obtainedMarks"));
// var percentage= (obtainedMarks/totalMarks)*100;
// var grade;

// if(percentage>=90){
//     grade="A+";
// }
// else if(percentage>=79){
//     grade="A"
// }
// else if(percentage>=70){
//     grade="B"
// }
// else if(percentage>=60){
//     grade="C"
// }
// else if(percentage>=50){
//     grade="D"
// }
// else if(percentage>=40){
//     grade="C"
// }
// else{
//     grade="F"
// }
// alert(` Your grade is ${grade}`);

// //q3.
// var a= 20;
// if (a === 10) {
//     alert("a is 10"); 
// }
// else{
//     alert(`The correct value of a is ${a}`);
// }

// //q4.
// var city= prompt("Enter your city name");
// if(city==="Karachi"){
//     alert("This is Karachi");
// }
// else if(city==="Lahore"){
//     alert("This is Lahore");
// }
// else{
//     alert("This city is neither Karachi nor Lahore");
// }    

                        //Chapter 13 (Testing sets of conditions)

// //q1.                        
// var a= 5;
// var b= 5;
// var c= 15;
// var d= 15;
// if(a===b&& c===d){
//   console.log("Both condition are true");
// }
// else{
//   console.log(" One or Both condition are false");
// } 

// //q2.
// var a= 5;
// var b= 5;
// var c= 15;
// var d= 20;
// if(a===b&& c!==d){
//   console.log("Either a is equal to b, or c is not equal to d ");
// }
// else{
//   console.log(" Both condition are false");
// } 

// //q3.
// userName= prompt("Enter your  name");
// userAge= prompt("Enter your age");

// if((userName=== "Hamza" ||userName=== "Arsalan") && userAge<60){
//     alert(`condition true`);
// }
// else{
//     alert(`condition false`);
// }

//q4


// //q5.
// var firstName= "Sidra";
// var lastName = "Moosa";

// userFirstName= prompt("Enter your first name");
// userLastName= prompt("Enter your last name");

// if(userFirstName=== firstName && userLastName===lastName){
//     alert(`Wellcome ${firstName} ${lastName}!`);
// }
// else{
//     alert(`Name does not match`);
// }

                    //Chapter 14 (If statements nested)

// //q1.
// // Code an if statement enclosing a nested if. If password is not
// // empty, then check if password is not greater than 5 , then display
// // an alert that says &quot;Password must be greater than 5&quot; if greater
// // than 5 then Alert &quot;OK&quot;.

// var password= prompt("Enter your password");

// if(password!==""){
//     if(password.length<=5){
//         alert("Password must be greater than 5");
//     }else{
//         alert("ok")
//     }
// }else{
//     alert("password cannot be empty");
// }

// //q2.
// var a=1;
// var c= "Max";

// if(a===1){
//     if(c==="Max"){
//         alert("Ok");
//     }
// }

// //q3.
// var a=1;
//  var c= "Max";

//  if(a===1 & c=== "Max"){
//     alert("Ok")
//  }

// //q4.    
// var num1=10;
// var num2=10;
// if(num1===num2){
//     if(num1<=num2){
//         alert('both conditions are true');
//     }

// }else{
//     alert('condition false');
// }




//                 // chapter 9-11 pdf USER INPUT & CONDITIONAL STATEMENT

// //q1.
// var city= prompt("Enter your city");
// if(city==="Karachi"){
//   alert("Welcome to city of lights");
// }
// else{
//   alert(`Wellcome to ${city}`);
// }



// //q2.
// var gender = prompt("Enter your gender");
// var message;

// if (gender === "male") {
//   message = "Good Morning Sir.";
// } 

// else if (gender === "female") {
//   message = "Good Morning Ma’am.";
// } 

// else {
//   alert("incorrect input!!");
// }

// alert(message);

// //q3.
// var signalColors= prompt("Enter the color of traffic signal(Red,Yellow,Green):");
// if(signalColors==="Red"){
//   alert("Must Stop");
// }
// else if(signalColors==="Yellow"){
//   alert("Ready to move");
// }
// else if(signalColors==="Green"){
//   alert("Move now");
// }
// else{
//   alert("Invalid color! please enter Red,Yellow,Green. ");
// }

// //q4.
// var fuel=prompt("Enter your remaining fuel");
// if(fuel<"0.25liters"){
//   alert("Please refill the fuel in your car");
// }
// else{
//   alert("fuel level is sufficient");
// }

// //q5.
// //a.
//  var a= 4;
// if(++a===5){
//   alert("giving condition for variable is true");
// }

// //b.
// var b = 82;
// if (b++ === 83){
//   alert("giving condition for variable is true");
// }

// //c.
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
//   alert("condition 2 is true");
//   }
//   if (++c < 14){
//     alert("condition 3 is true");
//     }
//     if(c === 14){
//       alert("condition 4 is true");
//       }

    //   //d.
    //   var materialCost = 20000;
    //   var laborCost = 2000;
    //   var totalCost = materialCost + laborCost;
    //   if (totalCost === laborCost + materialCost){
    //   alert("The cost equals");
    //   } 

//       //e.
//       if (true){
//         alert("True");
//         }
//         if (false){
//       alert("False");
//           }

// //f.
// if("car" < "cat"){
//   alert("car is smaller than cat");
//   }

// //q6.
// var mark1=+prompt("Enter your first subject mark");
// var mark2=+prompt("Enter your second subject mark");
// var mark3=+prompt("Enter your third subject mark");
// var totalMark=prompt("Enter your total marks");

// var obtainedMark= mark1+mark2+mark3;
// var percentage=(obtainedMark/totalMark)*100;

// var grade;
// var remarks;

// if(percentage>=80){
//   grade= "A+";
//   remarks= "Excellent";
// }
// else if(percentage>=70){
//   grade= "A";
//   remarks= "good";
// }
// else if(percentage>=60){
//   grade= "B";
//   remarks= "You need to improved";
// }
// else {
//   grade= "F";
//   remarks= "Sorry";
// }

// alert(`Marks Sheet  \n 
//     Total marks ${totalMark} \n
//   Mark obtained ${obtainedMark}\n
//   Percentage:${percentage}\n
//   Grade ${grade}\n
//   Remarks ${remarks}`);

// //q7.
// var secretNum= 6
// var userGuess=+prompt("Guess the secret number (1 to 10):")
// if(userGuess===secretNum){
//   alert("Bingo! Correct answer.")
// }
// else if(userGuess+1===secretNum){
//   alert("Close enough to the correct answer");
// }
// else{
//   alert(`sorry that's not correct the secret num is ${secretNum} `);
// }

// //q8.
// // Write a program to check whether the given number is
// // divisible by 3. Show the message to the user if the number
// // is divisible by 3.

// var number= +prompt("Enter a number");
// if(number%3===0){
//     alert(`The number ${number} is  divided by 3`);
// }
// else{
//     alert(`The number ${number} is not divided by 3`);
// }

// q9.
// Write a program that checks whether the given input is an
// even number or an odd number.



// //q10.
// var temperature=prompt("Enter the temperature");
// if(temperature>40){
//   alert("It is too hot outside.");
// }
// else if(temperature>30){
//   alert("The Weather today is Normal.");
// }
// else if(temperature>20){
//   alert("Today's Weather is cool.");
// }
// else if(temperature>10){
//   alert("OMG! Today's weather is so Cool.");
// }
// else{
//   alert("It's quite cold today" );
// }

// //q11.
// var firstNumber= +prompt("Enter your firstnumber");
// var secondNumber= +prompt("Enter your secondnumber");
// var operator= prompt("Enter operatorvar(+, -, *, /, %) ");
// var result;

// if(operator=== "+"){
//     result= firstNumber+secondNumber;
// }
// else if(operator=== "-"){
//     result= firstNumber-secondNumber;
// }
// else if(operator=== "*"){
//     result= firstNumber*secondNumber;
// }
// else if(operator=== "/"){
//     result= firstNumber/secondNumber;
// }
// else if(operator=== "%"){
//     result= firstNumber%secondNumber;
// }
// else{
//     alert("invalid number");
// }
// alert(`${result}`);


            //chapter 12-13 pdf IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS

//q1.
// Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

//q2.
// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

//q3.
// Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

//q4.
//  Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

// //q5.
// var correctPassword= "sidra";

// var userPassword= prompt("Enter your password");
// if(correctPassword=== userPassword){
//     var checkPassword = prompt("Enter your original password");
// if(userPassword===checkPassword){
//     alert("Correct! The password you entered matches the original password.");
// }else{
//     alert("Incorrect password");
// }

// }else{
//     alert("Please enter your password");
// }