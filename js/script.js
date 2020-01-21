//question 1

var myString = "string";
console.log(myString);

//quetion 2

var person = { Firstname: "john", age: 4 };
console.log(person);

//question 3

var outOfStock = true;
if (outOfStock === true) {
  console.log("out of stock");
} else {
  console.log("in stock");
}

//question 4

var numbers = ["1", "2", "3", "4", "5"];
console.log(numbers);

//question 5

for (var count = 15; count <= 25; count++) {
  console.log(count);
}

//question 6

for (var count = 15; count <= 25; count++) {
    
    if ( count === 20) {
    console.log(count);
    }
    
      }

//question 7

var john = ["mac", 34, false];

var peter = ["peter", 23, true];
console.log(john);
console.log(peter);

//question 8

function whatIDontLike(snakes) {
  console.log("I dont Like " + snakes);
}
whatIDontLike("snakes");

//question 9

function twoArguments (lion, cat) {
    var sum = lion - cat;
    console.log(sum);
}
twoArguments(30, 18);

//question 10

var emptyArray = []

function accept (nothing) {
    console.log(nothing);
}
accept(30)

