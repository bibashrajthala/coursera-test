//**** functions are First-Class Data Types
//**** functions are Objects

function multiply(x , y){
	return x * y;
}
// console.log(multiply(5 , 3));


//setting property(name-value pair) in function just like in object
multiply.version = "v.1.0.0";
console.log(multiply);
console.log(multiply.toString());
// console.log(multiply());
console.log(multiply.version);
console.log(multiply["version"]);

//** Function Factory
function makeMultiplier(multiplier){
	var myFunc = function (x){
		return multiplier * x;
	};
	return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));


//**Passing Funcytion as argument
function doOperation(x , operation){
	return operation(x);
}

var result = doOperation(5 , multiplyBy3);
console.log(result);

result = doOperation(400 , doubleAll);
console.log(result);