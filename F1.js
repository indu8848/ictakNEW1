//Write a JavaScript function to get an Array and to read the First Element of 
// the array. Check whether its Prime or Not

function getFirstElement(arr) {
    if (arr.length>0) {
        return arr[0];
     }
    else{
        return "no elements in the array";
     }
 }
 let myarray=[31, 32, 33, 34, 35, 36, 37 ,38];
 var firstElement = getFirstElement(myarray); // Function Call
 console.log("First elememt is "+firstElement);
 if (firstElement<=1){
    console.log("firstElement is not a prime number");
 }else{
        let isPrime=true;
        for (let i = 2; i < firstElement; i++) {
            if(firstElement % i ===0) {
                isPrime=false;
                break;
            }
            
        }
    if(isPrime) {
        console.log("And the it's a prime number");
        
        }
        else{
            console.log("And it's not a prime number");
        }
        }
