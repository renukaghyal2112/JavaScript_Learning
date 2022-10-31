var tcsEligibilityCheck = function (grad_score, hsc_score, ssc_score, candidate_name) {
console.log(grad_score >= 70 );
    var result = grad_score >= 70 || hsc_score >= 80 || ssc_score > 90  // false || true
        ? `Congrates ${candidate_name} you are eligible for TCS interview`
        : "Unfortunately you are not eligible for interview";
    console.log(result);
}
tcsEligibilityCheck(80, 86, 90, "Mohit Sharma");
tcsEligibilityCheck(69, 65, 95, "Anil Pende");
console.warn("=================================");

console.warn(`------------Assignment1----------------------`);
console.log("```````````Q1 Male Marriage Eligibility``````````");

var maleMarriageEligibility = function(age, gender, name){
  console.log(age>=21);
  var result = age>=21 ? "you are eligible for Marriage" : "You are not eligible for marriage";
  console.log(result);
}
maleMarriageEligibility( 25,"male", "Billgates" )
maleMarriageEligibility(17,"male", "Stew jobs" )

console.log("```````````Q2 Female Marriage Eligibility``````````");

var FemaleMarriageEligibility  = function(age,gender , name ){
console.log(age>=18);
var result = age>=18 ? "You are eligible for marriage" : "You are not eligible for marriage"
console.log(result);
}
FemaleMarriageEligibility( 16, "Female","Jenifer");
FemaleMarriageEligibility( 25, "Female","Malinda Gates");

console.warn("=================================");

console.warn(`------------Assignment2----------------------`);

// var EvenOrOdd = function(num){
//   console.log(num%2 );
//   var result = num%2 ? "ODD" :"EVEN"
//   console.log(result);
// }
// EvenOrOdd(45);
// EvenOrOdd(70);
// EvenOrOdd(67);
// EvenOrOdd(98);


var EenOdd = function(arg){
// console.log(arg % 2);
var result = arg%2 ? "EVEN" : "ODD";
console.log(result);
}
 EenOdd(70);
 EenOdd(45);
 EenOdd(98);
 EenOdd(67);

 console.warn("------------------------------------");


 var voting = function(person){
 // console.log(person>=18);
  var result = person>=18 ? "yes You are eligible for vote" : "No you are not eligible for vote"
  console.log(result);
 }
 console.log("Age=18");
voting(18);
console.log("Age=20");
 voting(20);
 console.log("Age=17");
 voting(17);
 console.log("Age=40");
 voting(40);
 console.warn("------------------------------------");

 var char = function(string){
  console.log(string.length);
  var result = string.length>=10 ? "Yes string contain more than 10 character" : "No string contain more than 10 character "
console.log(result);

 }
 char("JavaScript-ES6");


var  start = function(string){
console.log(string.start);
}
start(JavaScript Language);



