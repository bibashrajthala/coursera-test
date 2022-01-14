// //Event Handling
document.addEventListener("DOMContentLoaded" , 
	function(event){

		document.querySelector("button")
			.addEventListener("click" , function () {
				
				//call the server to get the json parsed alues
				$ajaxUtils
					.sendGetRequest("/data/name.json" , 
						function(res){
							var message = res.firstName + " " + res.lastName;
							if(res.likesChineseFood){
								message += " doesnot like Chinese Food"
							}
							else{
								message += " likes Chinese Food "
							}
							message += "and uses ";
							message += res.numberOfDisplays + 1;
							message += " displays of code";

							document.querySelector("#content")
								.innerHTML = "<h2> " + message + "</h2";
						}
					);

				
			});
	}
);


