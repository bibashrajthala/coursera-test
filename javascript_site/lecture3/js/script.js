// not defined 
// console.log(x);

//undefined
var x;
console.log(x);

// but if we assign something to it
// x=5;
// console.log(x);

if(x == undefined) {
	console.log("x is undefined");
}

//after x is assigned something
x=5;
if(x == undefined) {
	console.log("x is undefined");
}
else{
	console.log("x has been defined");
}
