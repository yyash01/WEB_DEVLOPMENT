
//create an object
var person = {
	firstname: "yash",
	lastname: "jain",
	age:19,
	eyecolor:"blue",
	//object methods ---Objects can also have methods.
	//Methods are stored in properties as function definitions.
	fullname: function(){
		return this.firstname+ " " +this.lastname;
	}
};
//display some data from objects
document.getElementById("demo").innerHTML = person.fullname()+" is "+person.age;


var answer1 = "It's allright you will be fine:";
var answer2 = "yash jain";

document.getElementById("demo2").innerHTML = answer2+"<br>"+answer1;