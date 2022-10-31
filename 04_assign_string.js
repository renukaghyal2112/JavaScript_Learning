console.log(`----------Assignment 01---------`);

var fav = "My dream company is TCS";
console.log(fav);
console.log(`.................`);

var myHobbies1 = "Swimming";
var myHobbies2 = "Reading";
var myHobbies3 = "Travelling";
// console.log(myHobbies1);
// console.log(myHobbies2);
// console.log(myHobbies3);

var result = myHobbies1.concat(myHobbies2).concat(myHobbies3)
console.log(result);


console.log(`-----------Assignment 02----------`);

var string_handson = function(){
  console.log("Hey you are doing good, keep it up");
}
string_handson()

var greet = "Hey you are doing good, keep it up"
console.log(greet);


console.log("..............Length of String.......................");
var greet = "   Hey you are doing good, keep it up   "
var length = greet.length
console.log(length);

console.log("..............Remove extra space......................");
var greet = "   Hey you are doing good, keep it up   "
var length = greet.length
console.log(length);
var trim = greet.trim()
console.log(trim.length);

// console.log(".............First & last Character......................");
// var greet= "Hey you are doing good, keep it up "
// var char = greet.charAt(0)
// var lastChar = greet.charAt(33)
// console.log("first character-" char), "last character -" (lastchar);
// // var result = char.concat(lastChar)
// // console.log(result);

console.log("..............Total words......................");

var line = "hey | you| are | doing | good | keep | it | up";
var assign = line.split("|");
console.log(assign);

console.log("..............Index of Good......................");
var greet = "Hey you are doing good, keep it up";
var line = greet.indexOf('good');
console.log(line);

console.log("..............index 22 using substring......................");
var  greet = "Hey you are doing good, keep it up";
var index = (greet.substring(22))
console.log(index);

console.log("..............index 22 using slice......................");
var  greet = "Hey you are doing good, keep it up";
var index = (greet.slice(22))
console.log(index);

console.log("..............start with Hey......................");
var  greet = "Hey you are doing good, keep it up";
console.log(greet.includes("Hey"));


console.log("..............end with up......................");
var  greet = "Hey you are doing good, keep it up";
console.log(greet.includes("up"));