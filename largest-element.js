function largestElement(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}
const ages = [23, 111, 34, 76, 122, 31, 13];
const oldest = largestElement(ages);
console.log(oldest)