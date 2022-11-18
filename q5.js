//5. WAP to find missing elements from the array?

function findMissing(arr){
    let n=arr[arr.length-1];
    let sum1=(n*(n+1))/2
    let sum2=0
    for(let i=0;i<arr.length;i++){
        sum2=sum2+arr[i]
    }
    return sum1-sum2
}

console.log(findMissing([1,2,3,5,6,7]));