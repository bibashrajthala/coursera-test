$(function(){ //Same as document.addEventListener("DOMContentLoaded",function{...});

	$(".navbar-toggle").blur(function(event){ //same as document.querySelector("#navbar-toggle").addEventListener("blur",func{...});
		var screenWidth = window.innerWidth;
		if (screenWidth < 768) {
			$("#collapsable-nav").collapse('hide');
		}
	});
});


//**** Dynamically Loading main content of home page
(function (global) { //IIFE
	var dc = {}; //namesapce (on name David Chu)

	var homeHtml = "snippets/home-snippet.html"; //url where home-snippet is sitting

	// Convenience function for inserting innerHTML for "selector"
	var insertHtml = function (selector , html) {
		var targetElem = document.querySelector(selector);
		targetElem.innerHTML = html;
	}
 
	//Show Loading Icon inside element identified by selector
	var showLoading = function (selector) {
		var html = "<div class='text-center>'"
		html += "<img src='images/ajax-loader.gif'></div>"
		insertHtml(selector , html);
	}

	//On Page load(bafore images or CSS)
	document.addEventListener("DOMContentLoaded" , function(event){

		//on first load , show homeview
		showLoading("#main-content"); //show loading icon before request and response
		$ajaxUtils.sendGetRequest(
			homeHtml,
			function (responseText) {
				document.querySelector("#main-content")
					.innerHTML = responseText;
			},
			false);
	});

global.$dc = dc;

})(window);


