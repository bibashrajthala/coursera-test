// //**** Arrays

// var array = new Array();
// array[0] = "Yaakov";
// array[1] = 2;
// array[2] = function (name) {
// 	console.log("Hello " + name);
// };
// //array[3] is empty
// array[4] = {course : "HTML , CSS & JS"};

// console.log(array); 
// console.log(array[1]);
// console.log(array[2]);
// array[2](); 
// array[2]("bibash");
// array[2](array[0]); //passing array as value for argument
// console.log(array[4]);
// console.log(array[4].course);


// //** Shorthand array creation
// var names = ["Yaakov" , "John" , "Joe"];
// console.log(names);


// //** functions ,objects .strings,number in array
// var names = [
// 	{name : "john"}, //object
// 	{course : "javascript"}, //object
// 	3, //number
// 	function a() { //function
// 		console.log("i am functon")
// 	},
// 	"bibash" //string
// ];
// console.log(names);

//** printing each item of array uaing loop
var names = ["Yaakov" , "John" , "Joe"];

for(var i = 0; i < names.length; i++){
	console.log("hello " + names[i]);
}

//** sparse of array
names[100] = "bib";
for(var i = 0; i < names.length; i++){
	console.log("hello " + names[i]);
}
