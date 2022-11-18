function max(arr){
    let max=null
    let max2=null
    for(let i=0; i<arr.length; i++){
        if(arr[i] >max){
            max2=max
            max=arr[i]
        }else if(max2<arr[i]&&arr[i]<max){
            max2=arr[i]
        }
    }
    return max2
}

let arr = [12, 35, 1, 10, 34, 1]

console.log(max(arr))
