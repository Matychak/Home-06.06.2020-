
//Попередження!!!
// Фото с схемою чатвертей з 5 задачкі, в коді Html.





// 1
// let user_numb = prompt("Enter number!");

// if (user_numb > 0) {
// 	alert("Number positive");
// }

// else if (user_numb == 0) {
// 	alert("Number zero");
// }

// else if (user_numb < 0) {
// 	alert("Number negative");
// }
// else {
// 	alert("error")
// }

// 2

// let user_year = prompt("How old are you?");

// if (0 > user_year) {
// 	alert("Enter correctly given!");
// }

// else if (user_year > 120) {
// 	alert("Enter correctly given!!");
// } 

// else if (user_year > 0 || 120 < user_year) {
// 	alert("correctly given!")
// }

// 3

// let a = prompt("Enter number");

// Math.abs(a);

// alert(Math.abs(a));

// 4

// let user_hour = prompt("Enter hour");

// let user_minutes = prompt("Enter minutes");

// let user_second = prompt("Enter second");

// if (user_hour > 24) {
// 	alert("pleas enter correcrly hour");
// }

// else if (0 > user_hour) {
// 	alert("pleas enter correcrly hour");
// }

// // minutes
// else if (user_minutes > 60) {
// 	alert("pleas enter correcrly minutes");
// }

// else if (0 > user_minutes) {
// 	alert("pleas enter correcrly minutes");
// }

// // second
// else if(user_second > 60) {
// 	alert("pleas enter correcrly second");
// }

// else if (0 > user_second) {
// 	alert("pleas enter correcrly second");
// }

// else if (user_hour > 0 || 24 < user_hour && user_minutes > 0 || 60 < user_minutes && user_second > 0 || 60 < user_second){
// 	alert("thx");
// }

// else{
// 	alert("error");
// }

// 5 



let user_x = prompt("Enter x");

let user_y = prompt("Enter y");





// 1

 if (user_x > 0 && user_y > 0) {

	alert("1 part");
}

// 2 
else if (user_x < 0 && user_y > 0) {

	alert("2  part");
}

// 3 

else if (user_x < 0 && user_y < 0) {

	alert("3 part");
}

// 4 

else if (user_x > 0 && user_y < 0) {

	alert("4 part");
}

// Якщо на нулі

else if (user_x == 0 && user_y == 0) {

	alert("not known");
}

else{
	alert("error");
}