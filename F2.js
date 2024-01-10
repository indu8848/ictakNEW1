//JavaScript program to find the most frequent item of an array.

function MostfrequentElement(arr)
{
   let FrequencyMap={};           //empty object for storing frequency of each element in the array
   let MaxFrequencyEncountered=0; //keeps track of highest frequency encountered while iterating throughn the loop
   let MostOccuredElement;           //to store the element which has the highest frequency

for(let i=0;i<arr.length;i++)
{
let  item=arr[i];
FrequencyMap[item]=(FrequencyMap[item] || 0) + 1; 
if (FrequencyMap[item] > MaxFrequencyEncountered)
{
   MaxFrequencyEncountered=FrequencyMap[item];
   MostOccuredElement=item;
}
}
return MostOccuredElement;
}
let myArray = [6,7,9,3,9,6,9,8,3,9,9,6,7,9,4,3,9,2,8,3,4];

let result=MostfrequentElement(myArray);
console.log("the most frequent item in the given array is "+result);











