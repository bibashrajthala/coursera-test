//****The 'event' argument 

document.addEventListener("DOMContentLoaded", 
	function (event) {
		function sayHello(event) {
			console.log(event);

			this.textContent = "said it";

			var name = document.getElementById("name").value;

			var message = "<h2>hello " + name + "!</h2>"; //string concatenation

			document
			.getElementById("content") 
			.innerHTML = message;	

			if (name === "student"){
				var title = 
				document
				.querySelector("#title")
				.textContent;

				title += " & loving it!";

				document
				.querySelector("h1") //since only one h1 in html here h1 can be used instead of #title
				.textContent = title;
			}
		}

		// //** Unobstructive event binding
		document.querySelector("button")
			.addEventListener("click" , sayHello);

		document.querySelector("body")
			.addEventListener("mousemove" ,  
				function (event) {
					if (event.shiftKey === true){
						console.log("x:" + event.clientX);
						console.log("y:" + event.clientY);
					}
				}
			);
	}
);	


