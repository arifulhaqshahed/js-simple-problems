/* const fibo = [0, 1];
for(let i = 2 ; i <= 10; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo) */


function fibonacciSeries(num){
    if(typeof num != 'number'){
        return 'please enter a number';
    }
    else if(num < 2){
        return 'please enter a positive number greater than 2';
    }
    const fibo = [0, 1];
    for(let i = 2; i <= num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
const fiboSeries = fibonacciSeries(-22);
console.log(fiboSeries);

