// //** without namespace

// var name  = "ram";
// function sayHi () {
// 	console.log("hi " + name);
// }

//** with namespace
var greetRam = {};
greetRam.name  = "ram";
greetRam.sayHi = function () {
	console.log("hi " + greetRam.name);
}