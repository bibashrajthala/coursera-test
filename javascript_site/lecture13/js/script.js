//**** object literals and 'this' keyword


var literalObject = { //new Object();
	radius : 10,

	getArea : function () {
		console.log(this);

		return Math.PI * Math.pow(this.radius , 2);
	} 

};
// literalObject.getArea();
console.log(literalObject.getArea());



//** Bug in JS
var literalObject = { //new Object();
	radius : 10,

	getArea : function () {
		console.log(this);

		var increaseRadius = function (){
			this.radius = 20;
		};
		increaseRadius();
		console.log(this.radius);

		return Math.PI * Math.pow(this.radius , 2);
	} 
};
console.log(literalObject.getArea());


// //** Fix of bug in JS
// var literalObject = { //new Object();
// 	radius : 10,

// 	getArea : function () {
// 		var self = this;
// 		console.log(this);

// 		var increaseRadius = function (){
// 			self.radius = 20;
// 		};
// 		increaseRadius();
// 		console.log(this.radius);

// 		return Math.PI * Math.pow(this.radius , 2);
// 	} 
// };
// console.log(literalObject.getArea());