//13. WAP with 2 different logic, to find all duplicate number in an array

let arr=[1,2,2,3,4,1,9,9]

for(let i=0; i<arr.length; i++){
    for(let j=0; j<i; j++){
        if(arr[i]==arr[j]) console.log(arr[i])
    }
}



let map=new Map();

for(let i=0; i<arr.length; i++){
    if(map.get(arr[i])){
        map.set(arr[i],map.get(arr[i])+1);
    }else{
        map.set(arr[i],1)
    }
}

console.log(map)

for(let ele of map){
    if(ele[1]>1) console.log(ele[0])
}

for(let i=0; i<arr.length; i++){
    for(let j=0; j<i;j++){
        if(arr[i]==arr[j]) console.log(arr[i])
        break;
    }
}