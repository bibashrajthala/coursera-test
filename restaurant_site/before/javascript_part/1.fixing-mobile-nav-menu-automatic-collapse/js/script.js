$(function(){ //Same as document.addEventListener("DOMContentLoaded",function{...});

	//same as document.querySelector("#navbar-toggle").addEventListener("blur",func{...});
	$(".navbar-toggle").blur(function(event){
		var screenWidth = window.innerWidth;
		if (screenWidth < 768) {
			$("#collapsable-nav").collapse('hide');
		}
	});
});