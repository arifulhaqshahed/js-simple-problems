function findLargestNumber(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
}
const largest = findLargestNumber(74, 121, 56);
// console.log(largest)


function findSmallestNumber(num1 , num2, num3){
    if(num1 < num2 && num1 < num3){
        return num1;
    }
    else if(num2 < num1 && num2 < num3){
        return num2;
    }
    else{
        return num3;
    }
}
const smallest = findSmallestNumber(222, 123 , 325);
console.log(smallest)