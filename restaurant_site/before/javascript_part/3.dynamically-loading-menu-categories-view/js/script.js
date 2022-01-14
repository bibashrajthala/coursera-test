$(function(){ //Same as document.addEventListener("DOMContentLoaded",function{...});

	$(".navbar-toggle").blur(function(event){ //same as document.querySelector("#navbar-toggle").addEventListener("blur",func{...});
		var screenWidth = window.innerWidth;
		if (screenWidth < 768) {
			$("#collapsable-nav").collapse('hide');
		}
	});
});


//**** Dynamically Loading main content of home page,menu categories page
(function (global) { //IIFE
	var dc = {}; //namesapce (on name David Chu)

	var homeHtml = "snippets/home-snippet.html"; //url where home-snippet is sitting
	var allCategories = "http://davids-restaurant.herokuapp.com/categories.json";
	var categoriesTitleHtml = "snippets/categories-title-snippet.html";
	var categoryHtml = "snippets/category-snippet.html";
	
  

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

	//Return substitute of '{{propName}} with propValue in given 'string'
	var insertProperty = function (string , propName , propValue) {
		var propToReplace = "{{" + propName +  "}}";
		string = string.replace(new RegExp(propToReplace , "g") , propValue);
		return string;
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

		//load the menu categories view
		dc.loadMenuCategories = function () {
			showLoading("#main-content");
			$ajaxUtils.sendGetRequest(
				allCategories,
				buildAndShowCategoriesHTML
			);
		}

		
		
		//builds HTML for the categories page based on the data from the server
		function buildAndShowCategoriesHTML(categories){
			//load title snippet of categories page
			$ajaxUtils.sendGetRequest(
				categoriesTitleHtml,
				function (categoriesTitleHtml) {
					//retrieve single category snippet
					$ajaxUtils.sendGetRequest(
						categoryHtml,
						function (categoryHtml) {
							var categoriesViewHtml = 
								buildCategoriesViewHtml(categories , categoriesTitleHtml , categoryHtml);
								insertHtml("#main-content" , categoriesViewHtml);
						},
						false);
				},
				false);
		}

		//Using categories object datas and snippets html build categoriesViewHtml to be inserted into page
		function buildCategoriesViewHtml(categories , categoriesTitleHtml , categoryHtml) {
			var finalHtml = categoriesTitleHtml;
			finalHtml += "<section class ='row'>";

			//loop over categories
			for(var i = 0; i < categories.length; i++){
				//inserting categories values
				var html = categoryHtml;
				var name = "" + categories[i].name;
				var short_name = categories[i].short_name;
				html = insertProperty(html , "name" , name);
				html = insertProperty(html , "short_name" , short_name);

				finalHtml += html;
			}
			finalHtml += "</section>"
			return finalHtml;
		}



	});

global.$dc = dc;

})(window);



