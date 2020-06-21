var $ = 3.14; //here simply $ is variable jese we use (pi) inplace of $
var person = "Myself Yash";
var answer = "Yes";
function myfunction()
{
	document.getElementById('demo').innerHTML = $ + "<br>"+person+"<br>"+answer;
}
//adding my first comment. XD

/*

JavaScript Identifiers
All JavaScript variables must be identified with unique names.

These unique names are called identifiers.

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:

Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter
Names can also begin with $ and _ (but we will not use it in this tutorial)
Names are case sensitive (y and Y are different variables)
Reserved words (like JavaScript keywords) cannot be used as names

*/

/*-----One Statement, Many Variables--------------
 var person = "John Doe", carName = "Volvo", price = 200;*/

//-----------------------MOST IMPOTANT COMMENT-Till date------------------------------------------
/*In the JavaScript library jQuery, for instance, 
the main function $ is used to select HTML elements. 
In jQuery $("p"); means "select all p elements".*/


var txt1 = "What a very ";
txt1 += "nice Day";

function mytext()
{
	document.getElementById('text').innerHTML = txt1;
}



/*
     (**) = Exponentiation (ES2016)
     =	x = y	x = y
    +=	x += y	x = x + y
    -=	x -= y	x = x - y
    *=	x *= y	x = x * y
    /=	x /= y	x = x / y
    %=	x %= y	x = x % y
    **=	x **= y	x = x ** y
*/