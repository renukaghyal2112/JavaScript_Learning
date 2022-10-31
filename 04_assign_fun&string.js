console.log("square of 5,6,25,1000");
var square = function(value){
    console.log(value*value);
}
square(5)
square(6)
square(25)
square(100)

console.log(`****************************************`);

console.log(`Area of Triangle`);
var area = function(value1,value2){
    console.log(value1*value2/2);
}

area(45,34)
console.log(`****************************************`);

console.log(`Area of rectangular`);
var rectangular = function(length,width){
    console.log(length*width);
}
rectangular(499,917)

console.log(`****************************************`);

console.log(`.....Before swapping......`);
var swap_value = function(value1,value2){
    console.log(value1,value2);
}
swap_value("Virat","Anushka")

console.log(`.....After swapping......`);

var swap_value = function(value1,value2){
    var temp = value1
value1 = value2
value2 = temp
 console.log(value1,value2);
 
}
swap_value("Virat","Anushka")

console.log(`****************************************`);

console.log(`.....Before swapping......`);
var swap_no = function(no1,no2){
    console.log(no1,no2);
}
swap_no(1000,2000)

console.log(`.....After swapping......`);

var swap_no = function(no1,no2){
 temp = no1;
 no1=no2;
 no2= temp;
console.log(no1,no2);
}
swap_value(1000,2000)
console.log(`****************************************`);

console.log("JavaScript the most popular language");

console.log(`Total character in the string`);
var greet = "JavaScript the most popular language"
var char = greet.length
console.log(char);
console.log(`.....................................`);


console.log(`Index of S`);

var index = greet.indexOf('S');
console.log(index);
console.log(`.....................................`);

console.log(`Index of string S`);

var index = greet.indexOf('lang');
console.log(index);
console.log(`.....................................`);

console.log(`Last character using length property`);

var char = greet.charAt('35');
console.log(char);
console.log(`.....................................`);

console.log(`3rd last caracter`);

var char = greet.charAt('33');
console.log(char);

console.log(`.....................................`);
