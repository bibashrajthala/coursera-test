//**** AJAX basics

(function (global) {  //using IIFE

	// setting up a namespace for our utility
	var ajaxUtils = {};

	// Returns an HTTP Request object
	function getRequestObject() {
		if(global.XMLHttpRequest){
			return (new XMLHttpRequest());
		}
		else if(global.ActiveXObject){
			//For very old IE browsers(optoinal)
			return (new ActiveXObject("microsoft XMLHTTP"));
		}
		else{
			global.alert("Ajax is not available");
			return(null);
		}
	} 

	// var request = getRequestObject();

	//Makes a Ajax GET Request to 'requestURL'
	ajaxUtils.sendGetRequest = 
		function(requestURL , responseHandler , isJsonResponse){
			var request = getRequestObject();
			// var myhandler = responseHandler;
			// request.onreadstagechange = handleResponse;
			request.onreadystatechange = 
				function(){
					handleResponse(request, responseHandler , isJsonResponse);
				};
			request.open("GET" , requestURL , true);
			request.send(null); //for POST only
		};

	// Only calls user provided 'responseHandler'
	//functions if response is ready and not an error
	function handleResponse(request , responseHandler , isJsonResponse){
		if ((request.readyState == 4) && (request.status == 200)){
			responseHandler(request);
		}

		//defaulting isJsonResponse to true
		if (isJsonResponse == undefined) {
			isJsonResponse = true;
		}

		if (isJsonResponse) {
			responseHandler(JSON.parse(request.responseText));
		}
		else{
			responseHandler(request.responseText);
		}
		
	} 

	//Expose utility to the global object
	global.$ajaxUtils = ajaxUtils;

})(window);

