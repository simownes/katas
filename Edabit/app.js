
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Examples
// addUp(4) ➞ 10

// addUp(13) ➞ 91

// addUp(600) ➞ 180300

function addUp(n){
    i = 0
    var sum = n;
    if(n > 1){
        for (let i = 0; i < n; i++) {
           sum += i; 
        }
    }
    return sum;
}


console.log(addUp(4))
console.log(addUp(13))
console.log(addUp(600))
















// Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

// Examples
// convert(1, 3) ➞ 3780

// convert(2, 0) ➞ 7200

// convert(0, 0) ➞ 0

function convert(hours,minutes){
    const h = hours*3600;
    const m = minutes*60
    return h+m;
}
console.log(convert(2,0));

