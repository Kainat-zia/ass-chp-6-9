// Q1
 
// let a = 10;

// document.write("Result:"+"</h3>"+"<br>");

// document.write("The value of a is : "+a+"<br>");

// document.write("........................"+"<br>");
// let b = ++a;

// document.write("The value of ++a is : "+b+"<br>");
// document.write("Now the value of a is : "+a+"<br>");

// let c = a++;

// document.write("The value of a++ is : "+c+"<br>");
// document.write("Now the value of a is : "+a+"<br>");

// let d = --a;

// document.write("The value of --a is : "+d +"<br>");
// document.write("Now the value of a is : "+a+"<br>");

// let e = a--;

// document.write("The value of a-- is : "+e +"<br>");
// document.write("Now the value of a is : "+a+"<br>");

// let a = 2, b = 1;
// let result = --a - --b + ++b + b--;

// document.write("a is : " + a+"<BR>");
// document.write("b is : "+b +"<BR>");
// document.write("result is : "+result);

// //  Q 2
// var a = 2;
// var b = 1;
// var result = --a;
// document.write ("the result is :"+""  + result +"<br>")

// var result = --a - --b;
// document.write ("the result is :"+""  + result+"<br>" )

// var result = --a - --b + ++b;
// document.write ("the result is :"+""  + result + "<br>")

// var result = --a - --b + ++b + b--;
// document.write ("the result is :"+""  + result +"<br>" )

// document.write("a is 2"+ "<br>")
// document.write("b is 1"+ "<br>")
// document.write("result is: "+ result+"<br>")

// // Q3
// let name = prompt("input a name")
// alert ("Thank you")

// // Q5

// var num = prompt("Enter the number you want to print the table for:");

// if (num === "" || num === null) {
//     num = 5; 
// } 
// for (var i = 1; i <= 10; i++) {
//     console.log(num + " * " + i + " = " + (i * num));
// }



// Q6
var subject1 = prompt("enter the first subject name")
var subject2 = prompt("enter the second subject name")
var subject3 = prompt("enter the third subject name")

var totalmarkspersubject = 100
var obtainedmark1 = prompt("enter the obtained mark for " + subject1 )
var obtainedmark2 = prompt("enter the obtained mark for " + subject2 )
var obtainedmark3 = prompt("enter the obtained mark for " + subject3 )


var totalMaximumMarks = totalmarkspersubject * 3;
var percentage1 = ((obtainedmark1 / totalmarkspersubject) * 100);
var percentage2 = ((obtainedmark2 / totalmarkspersubject) * 100);
var percentage3 = ((obtainedmark3 / totalmarkspersubject) * 100);
var sum = obtainedmark1 + obtainedmark2 + obtainedmark3;
var totalPercentage = percentage1 + percentage2 + percentage3;

document.write("<b> subject " + "" + "&nbsp;&nbsp;&nbsp;&nbsp;")
document.write("<b> Total marks " + "" + "&nbsp;&nbsp;&nbsp;&nbsp;")
document.write("<b> Obtaied marks " + "" + "&nbsp;&nbsp;&nbsp;&nbsp;")
document.write("<b> percentage<br>")
document.write(subject1 +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +totalmarkspersubject +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +obtainedmark1 +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + percentage1 +"%"  + "<br>")
document.write(subject2 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +totalmarkspersubject +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +obtainedmark2 +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + percentage2  + "%"+  "<br>")
document.write(subject3 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +totalmarkspersubject + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +obtainedmark3 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + percentage3 + "%" +"<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ totalMaximumMarks + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ sum + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ totalPercentage +"%" )

 
