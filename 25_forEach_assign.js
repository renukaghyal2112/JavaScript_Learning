console.log("------log index----------");
given_array = [ 1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ];
given_array.forEach((currentValue,index) => {
    console.log(currentValue,  index);
});
console.log("------log positive value----------");
given_array.forEach((currentValue,index) => {
    if (currentValue>0) {
        console.log(currentValue);
    }
    });
console.log("------log negative value----------");

given_array.forEach((currentValue,index) => {
    if (currentValue<0) {
        console.log(currentValue);
    }
});
console.log("------log Even Numbers------");
given_array.forEach((currentValue,index) => {
    if (currentValue%2===0) {
        console.log(currentValue);
    }
});

console.log("------log sum all numbers------");

let sum=0;
given_array.forEach(add => sum+= add )
    console.log(sum);
console.log("------log Even Position Array------");
given_array.forEach((currentValue,index)=>{
if (index%2==0) {
    console.log(currentValue,index);
}
})

console.log("------log Odd Position & negative Array------");

given_array.forEach((currentValue,index)=>{
if (index%2!=0 && currentValue<0) {
    console.log(currentValue,index);
}
})

