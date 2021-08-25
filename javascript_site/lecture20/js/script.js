//****DOM Manipulation


// //** print out what element.
// function sayHello() {
// 	console.log(
// 		document.getElementById("name")
// 		);
// }




// //** print out what user typed in input element
// function sayHello() {
// 	console.log(
// 		document.getElementById("name").value
// 		);
// }



// //** print out what user typed + some strings attaches to it 
// function sayHello() {
// 	var name = document.getElementById("name").value;

// 	var message = "hello " + name + "!"; //string concatenation

// 	document
// 	.getElementById("content") 
// 	.textContent = message;	
// }



// //** print out what user typed + some strings attaches to it as h2 
// function sayHello() {
// 	var name = document.getElementById("name").value;

// 	var message = "<h2>hello " + name + "!</h2>"; //string concatenation

// 	document
// 	.getElementById("content") 
// 	.innerHTML = message;	
// }




//** change h1 when user types "student" in input and clicks button
function sayHello() {
	var name = document.getElementById("name").value;

	var message = "<h2>hello " + name + "!</h2>"; //string concatenation

	document
	.getElementById("content") 
	.innerHTML = message;	

	if (name === "student"){
		var title = 
		document
		.querySelector("#title")
		.textContent;

		title += " & loving it!"

		document
		.querySelector("h1") //since only one h1 in html here h1 can be used instead of #title
		.textContent = title;
	}
}

