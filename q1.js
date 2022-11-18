//1. Find Second largest element in an array : arr[] = [12, 35, 1, 10, 34, 1, 35]

function max(arr){
    console.log(arr);
    for(let j=arr.length-1; j>=0; j--){
        if(arr[j]!=arr[j-1]) return arr[j-1];
    }
        
}

let arr = [12, 35, 1, 10, 34, 1,35,67,67]

console.log(max(arr.sort()))
