// //**** copying variables by value vs by reference

// //** copying variables by value
// var a = 7;
// var b = a;
// console.log("a: " + a);
// console.log("b: "+ b);

// b = 5;
// console.log("after b is updated...")
// console.log("a: " + a);
// console.log("b: "+ b);


// //** copying variables by reference
// var a = {x  : 7};
// var b = a;
// console.log(a);
// console.log(b);

// //if updated as b = {x:5}; only b is changed as direct value of b is still remains same
// b.x = 5;
// console.log("after b is updated...")
// console.log(a);
// console.log(b);


//**** passing variables by value vs by reference

// //** passing variables by value
// function changePrimitive(primValue) {
// 	console.log("in changePrimitive...");
// 	console.log("before:");
//  	console.log(primValue);

//  	primValue = 5;
// 	console.log("after:");
//  	console.log(primValue);
// }

// var value = 7;
// changePrimitive(value); //primvalue = value
// console.log("after changePrimitive,original value:");
// console.log(value); 

//** passing variables by reference
function changeObject(objValue) {
	console.log("in changeObject...");
	console.log("before:");
 	console.log(objValue);

 	objValue.x = 5;
	console.log("after:");
 	console.log(objValue);
}

var value = {x : 7};
changeObject(value); //primvalue = value
console.log("after changeObject,original value:");
console.log(value); 
