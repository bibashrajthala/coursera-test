//**** ways of creating object (part 2)

//** better way to create object using object literal i.e curly braces {}
var facebook = {
	name: "Facebook",
	ceo: {
		firstName: "Mark",
		favColor: "blue"
	},
	stock: 110,
	"$stock of company": 200
};
console.log(facebook);
console.log(facebook.name);
console.log(facebook.ceo.firstName);
console.log(facebook["name"]);
console.log(facebook.ceo["favColor"]);
console.log(facebook["$stock of company"]);


//**using variable as property of object is not possible here 
//**var order and order inside object facebook is different here so need to use quotaion while getting in conso le.log
var order = "likes";
var facebook = {
	name: "Facebook",
	ceo: {
		firstName: "Mark",
		favColor: "blue"
	},
	stock: 110,
	"$stock of company": 200,
	order: "comment 500"
};
console.log(facebook);
console.log(facebook["order"])
console.log(order);




