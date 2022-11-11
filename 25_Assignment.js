console.log("-------------------map()--------------------");
const array_numbers = [20,11,40,25,23,11,9,31,60,2,19]
array_numbers.forEach((currentValue,index,value)=>{
    console.log(currentValue+10);
})
console.log("---------------------");
array_numbers.forEach((currentValue)=>{
console.log(currentValue*currentValue);
})
console.log("---------------------");
array_numbers.forEach((currentValue,index)=>{
console.log(currentValue+index);
})
