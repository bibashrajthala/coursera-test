//*****Common Language Construct

// **String Concatination
var string = "Hello";
string += " World";
// string = string + " World";
console.log(string + "!") ;

//** Regular Math Operators
console.log((5 + 4) / 3);

//** NaN
console.log(undefined / 5);


function test1(a){
	console.log(a / 5);
}
test1();


//**Equality or Regular equality
var x = 4 , y = 4;
if(x == y){
	console.log("x=4 is equal to y=4");
}

//** Type Coercoin
x = '4';
if(x == y){
	console.log("x='4' is equal to y=4");
}

//** Strict Equality
if(x === y){
	console.log("x='4' is equal to y=4");
}
else{
	console.log("x='4' is  NOT equal to y=4");

}

