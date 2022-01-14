//**** ways of creating object

//** simple object creation using new Object() syntax
var company  = new Object();
company.name = "Facebook";
// company.ceo.firstName = "Mark";
//* it is similar to:
// var a;
// a.hello = "text";

company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";


// console.log(company);
console.log("company CEO name is: " + company.ceo.firstName);
console.log("company CEO name is: " + company["name"]);
console.log("company CEO name is: " + company.ceo.firstName);

company.$stock = 110;

//** string literal as property

//* these two uing dot notation dont work
// company.$stock of company = 110;
// company."$stock of company" = 110;

company["$stock of company"] = 200;

// console.log(company);
console.log("stock price is: " + company["$stock of company"])

//** variable as property
var stockPropName = "stock of my company";
company[stockPropName] = 300;
console.log("stock price is: " + company[stockPropName])
console.log("stock price is: " + stockPropName)


