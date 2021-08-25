//*****Common Language Construct

//** best practice of using curly braces is using it in same line
//** using it in new line and same line
//** not just for style

//** curly brace in new line is bad
function a()
{
	return
	{
		name:"Yakov"
	};
}

//** curly brace in same line is best practice
function b(){
	return{
		name:"Yakov"
	};
}

console.log(a());
console.log(b());


//***** for loop
var sum = 0;
for( var i = 0; i < 10; i++){
	console.log(i);
	sum = sum + i;
}
console.log("sum of 0 to 9 is:" + sum);

