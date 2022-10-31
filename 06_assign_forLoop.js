console.warn("=========Assignment 01===========");

console.warn("------------Q1 Numbers from 5 to 15---------------");
for (let index = 5; index <= 15; index++) {
    console.log(index);
    
}
console.warn("------------Q2 Numbers decrease from 50 to 40---------------");

for (let index = 50; index >= 40; index--) {
    console.log(index);
    
}

console.warn("------------Q3 First  15 odd numbers ----------");

for (let index = 1; index < 30; index++) {
   if (index%2!=0) {
    console.log(index);
   }
    
}
console.warn("------------Q4 First 10 EVEN numbers ----------");


var EvenNumber = 0; 
for (let index = 0; index < 20; index++) { 
    if(index%2==0){
        console.log(index); 
        EvenNumber = EvenNumber +1;
       
    }
    
}

console.warn("------------Q5 Table (5) ----------");

for (let index = 5; index <= 50; index=index+5) {
    console.log(index);
    }

    console.warn("------------Q6 Table(10) ----------");
 for (let index = 10; index <=100 ; index=index+10) {
    console.log(index);
    
 }

 console.warn("------------Q7 Decrease by 10) ----------");

 for (let index = 100; index >=10; index=index-10) {
    console.log(index);
    
 }

 console.warn("=========Assignment 02===========");

var monthNumber = 1;
var monthNumber =5;
var monthNumber = 7;
var monthNumber = 8;
switch (monthNumber) {
    case 1:
        console.log("January");

        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;

    default:
        break;
}
