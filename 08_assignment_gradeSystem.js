function gradeSystem(score) {
    if (score < 35) {
        console.log('You are Failed');

    } else if (score >= 35 && score <= 60) {
        console.log('You are passed with grade C');
    } else if (score >= 60 && score <= 75) {
        console.log('You are passed with grade B');
    } else if (score >= 75 && score <= 90) {
        console.log('You are passed with grade A');
    } else if (score >= 90 && score <= 100) {
        console.log('You are passed with grade A+');
    }
    else if (score > 0 || score<100 ||   score<= "undefined"|| score <="string" ||  score<= "null" || score >= " ") {
        console.log('Invalid Output');
        

    }

}

console.log("Marks-66");
gradeSystem(66);
console.log("------------------------");
console.log("Marks-13");
gradeSystem(13);
console.log("------------------------");
console.log("Marks-  ");
gradeSystem(" ");
console.log("------------------------");
console.log("Marks-98");
gradeSystem(98);
console.log("------------------------");
console.log("Marks-fifty five");
gradeSystem("fifty five");
console.log("------------------------");
console.log("Marks-35");
gradeSystem(35);
console.log("------------------------");
console.log("Marks-75");
gradeSystem(75);
console.log("------------------------");
console.log("Marks- null");
gradeSystem("null");
console.log("------------------------");
console.log("Marks- undefined");
gradeSystem("undefined");
console.log("------------------------");
console.log("Marks-(-20)");
gradeSystem(-20);
console.log("------------------------");
console.log("Marks-55");
gradeSystem(55);
console.log("------------------------");
console.log("Marks-82");
gradeSystem(82);
console.log("------------------------");
console.log("Marks-102");
gradeSystem(102);



