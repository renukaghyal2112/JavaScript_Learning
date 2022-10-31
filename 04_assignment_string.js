console.warn("==============Assignment01 ====================");
var wordLengthSquare = function(word){
  var word = word.length
  return word * word;
}
console.log("----Q1-Square of Length-------");
console.log(wordLengthSquare("javaScript"));
console.log(wordLengthSquare("google"));
console.log(wordLengthSquare("Developer"));

console.warn("------------------------------------");
console.log("----Q2-Square of Length-------");

var line = function(){
console.log("I am Angular Developer");

}
line()

var greet ="I am Angular Developer"
var result1 = greet.split(" ")
console.log(result1);


var result3 = greet.length
console.log("Total length of String=",result3);

var result2 = greet.length/4
console.log("Divided by total word =",result2);

var result4 = greet.length*4
console.log("Multiply by total no=",result4);

console.warn("==================================");

console.warn("==============Assignment02 ====================");


console.log("----Q1 Greatest value-------");

var GreatestNo = function(num1,num2){
var result = num1 > num2 ? num1 : num2
console.log(result);
}
GreatestNo(10,-10)
GreatestNo(800,899)

console.warn("------------------------------------");

console.log("----Q2 Even Or Odd-------");

var EvenOrOdd = function(num1){
var result = num1 % 2 ? true : false
console.log(result);
}
EvenOrOdd(29);
EvenOrOdd(44);
EvenOrOdd(0);
EvenOrOdd(101);

console.log("----Q3 word length Even Or Odd-------");


var word = function(word){
var wordLength = word.length
var result = wordLength%2 ? "EVEN":"ODD"
console.log(result);
}
word("Javascript");
word("Developer");
word("Google");
console.warn("------------------------------------");
