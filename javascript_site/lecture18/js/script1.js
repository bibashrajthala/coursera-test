
(function (window){
	var greetBibash = {}; //namespace
	var greeting = "hello ";
	greetBibash.name  = "bibash";
	greetBibash.sayHello = function () {
		console.log(greeting + greetBibash.name);
	}

	window.greetBibash = greetBibash;

})(window);




