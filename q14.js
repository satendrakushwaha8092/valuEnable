// 14. [80, 60, 10, 50, 30, 100, 0, 50]
// Find pairs whose sum = 100;
// Logic for above problem?
// What will be the complexity for it?
// Any better solution for the above problem?

let arr=[1,2,3,4,5,6,7,8,9,10]

function sumPair(arr,sum) {
let i=0
let j=arr.length -1

while(i<j){
    if(arr[i]+arr[j]==sum) return [arr[i],arr[j]]
    else if(arr[i]+arr[j]<sum) i++;
    else j--
}
return false
}

console.log(sumPair(arr,23))
