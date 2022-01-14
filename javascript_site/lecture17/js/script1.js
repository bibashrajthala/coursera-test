//  //** without namespace

// var name  = "bibash";
// function sayHello () {
// 	console.log("hello " + name);
// }


//** with namespace
var greetBibash = {};
greetBibash.name  = "bibash";
greetBibash.sayHello = function () {
	console.log("hello " + greetBibash.name);
}



