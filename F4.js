

// Write a javascript program to find the sum of squares of the elements of an array

function SumOfsQuares(arr)
{
    let sum = 0;
   for(let i = 0; i < arr.length; i++)
   {
       sum += arr[i] ** 2;
   }
   return sum;
}

let myArray=[9, 8, 7, 6, 5, 4, 3, 2, 1];
let Result = SumOfsQuares(myArray);
console.log("The sum of squares of the array is " + Result);



