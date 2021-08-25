//*****Common Language Construct

//** if statement (all false)
if( false || null || 0  || 
	"" || undefined || NaN){
	console.log("This line will never get executed");
}
else{
	console.log("all false");
}


//** if statement (all true)
if (true && 1 && -1 && "hello world!" && "false" ){
	console.log("all true");
}

