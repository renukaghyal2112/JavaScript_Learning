let arrayOfNames = ["Kamat","Memon","Nashpati","Taimur","Momon","Kamat","Andy","Taimur"];
console.log(`Given array-`,arrayOfNames);
let arrayset = new Set(arrayOfNames)

console.log("----Remove Duplicate Value------");
//  console.log(arrayset);
 let uniArray = [...new Set(arrayOfNames)]
 console.log(uniArray);
 console.log("--------------------");
console.log(`delete element: 2`);
console.log("--------------------");
console.log(arrayset.size);
let uniqueArray = [...new Set(arrayOfNames)]
console.log(uniqueArray);