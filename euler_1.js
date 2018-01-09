/*
Question 1: 
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

var n=0;
function sumMultiples(max, m1, m2){
for( var i=0;i<max; i++){
    if( i % m1===0|| i% m2=== 0){
        n+=i;
    }
    
}
console.log(n);
}

sumMultiples(1000, 3, 5);
