//**** default values

//** without default value
function orderChickenWith(sideDish){
	console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();

//** with default value using if statement
function orderChickenWith(sideDish){
	if(sideDish === undefined){
		sideDish = "whatever";
	}
	console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();

//** with default value using better way
function orderChickenWith(sideDish){
	sideDish = sideDish || "whatever";
	console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();

// //** with default value using better way
// function orderChickenWith(sideDish){
// 	sideDish = "whatever" || sideDish ;
// 	console.log("Chicken with " + sideDish);
// }

// orderChickenWith("noodles");
// orderChickenWith();