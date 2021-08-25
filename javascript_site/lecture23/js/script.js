// //Event Handling
document.addEventListener("DOMContentLoaded" , 
	function(event){

		document.querySelector("button")
			.addEventListener("click" , function () {
				// var self = this;
				// var name = "";

				//call the server to get the name
				$ajaxUtils
					.sendGetRequest("/data/name.txt" , 
						function(request){
							var name = request.responseText;
							// console.log(self.name);
							document.querySelector("#content")
								.innerHTML = "<h2>Hello " + name + "!</h2";
						}
					);

					// document.querySelector("#content")
					// 	.innerHTML = "<h2>Hello " + self.name + "!</h2";
				}
			);
	}
);


