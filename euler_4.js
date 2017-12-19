/*
4- Largest palindrome product

A palindromic number reads the same both ways. 
The largest palindrome made from the product of two 2-digit numbers
is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.*/


var par=[];
for(var i=999; i>1; i--){
    for(var j=999; j>1; j--){
        var product=(i*j);
        var stringProd= product.toString().split("").reverse().join("");
        if(product==stringProd){
            par.push(product);
            break;
        }
        
    }
    
}
console.log(Math.max(...par));
