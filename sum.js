const number = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
/* let sum = 0;
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    sum = element + sum;
}
console.log(sum) */

function sumOfArrayNumbers(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        sum = element + sum;
    }
    return sum; 
}
let total = sumOfArrayNumbers(number);
console.log('array total = ', total)
