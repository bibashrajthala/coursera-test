(function (window) {
	var greetRam = {}; //namespace
	var greeting = "hi ";
	greetRam.name  = "ram";
	greetRam.sayHi = function () {
		console.log(greeting + greetRam.name);
	}

	window.greetRam = greetRam;

})(window);

