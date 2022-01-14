//**** Function Constructors

// //** this object
// function test(){
// 	// console.log("hello Coursera!");
// 	console.log(this);
// 	this.myName = "Yaakov";
// }
// test();
// console.log(window.myName);


// //** Function constructor : a new way to create an object
// function Circle(radius){
// 	// console.log(this);
// 	this.radius = radius;

// 	this.getArea =
// 		function (){
// 			return Math.PI * Math.pow(this.radius , 2);
// 		};
// }

// var myCircle = new Circle(10);
// // console.log(myCircle.getArea());
// console.log(myCircle);


//** Prototype
function Circle(radius){
	this.radius = radius;
}

Circle.prototype.getArea =
		function (){
			return Math.PI * Math.pow(this.radius , 2);
		};


var myCircle = new Circle(20);
//dont do
// var myCircle = Circle(20);
console.log(myCircle);

var myOtherCircle = new Circle(30);
console.log(myOtherCircle);

