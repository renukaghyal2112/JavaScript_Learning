console.warn(`===========Assignment 01========`);
console.log(`---------Q1 to print 5 to 15 by incrementing----------`);
var number = 5;
var inline =" ";
while (number <= 15) {
    inline = inline + number+" ";
    number ++    
}
console.log(`num is ${ inline}`);

console.log(`---------Q2 to print 50 to 40 by decrementing----------`);
var number = 50;
var inline = " ";
while (number >= 40) { 
       inline = inline+number+" ";
    number--
    
}
console.log(inline);

console.log(`---------Q3 to print first 15 Even numbers----------`);

var number = 0;
var inline = " ";
while (number <= 30) {
    if (number % 2 == 0) {
        inline=inline + number+" ";
        number = number + 2
    }

}
console.log(inline);

console.log(`---------Q4 to print first 10 Odd numbers----------`);

var number = 1;
var inline = " ";
while (number <= 20) {
    if (number % 2 == 1) {
    inline= inline+number+" ";
        number = number + 2
    }
}
console.log(inline);
console.log(`---------Q5 to print table of 5----------`);
var number = 5;
var inline = " ";
while (number <= 50) {
    inline = inline +number+" ";
    number = number + 5
}
console.log(inline);
console.log(`---------Q6 to print table of 10----------`);

var number = 10;
var inline = " ";
while (number <= 100) {
    inline = inline +number+" ";
    number = number + 10

}
console.log(inline);
console.log(`---------Q6 to print reverse table of 10----------`);

var number = 100;
var inline = " ";
while (number >= 10) {
    inline = inline + number+" ";
    number = number-10
}
console.log(inline);