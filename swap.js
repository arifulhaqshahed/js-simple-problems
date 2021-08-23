 var first = 4;
 var second = 7;
 console.log(first, second);

/*  firsrt approch
 var temp = first;
 first = second;
 second = temp;
 console.log(first, second) */

// destructuring
[first, second] = [second, first];
console.log(first, second)