//**** Arrays

// //**special for loop to traverse properties of object
// var myobj = {
// 	name : "Yaakov",
// 	course : "HTML/CSS/JS",
// 	platform : "Coursera"
// };

// for(var prop in myobj){
// 	console.log(prop + ": " + myobj[prop]);
// }



//** arrays are just objects
var names2 = ["Yaakov" , "John" , "Joe"];

// for(var name in names2){
// 	console.log("names2[" + name + "] : " + "hello "+ names2[name]);
// }

names2.greeting = "hi!";
for(var name in names2){
	console.log("names2[" + name + "] : " + "hello "+ names2[name]);
}

