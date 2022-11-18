function isPrime(number){
    let count = 0;
    for(let i = 0; i < number;i++){
        if(number%i==0) count++;
    }
    if(count==1) return true;
    else return false;
}
console.log(isPrime(17))

function x(para){
    console.log(para)
}

// function y(x){
//     x()
// }
x(x=>x*2)

let primeCheck={
         isPrime(number){
        let count = 0;
        for(let i = 0; i < number;i++){
            if(number%i==0) count++;
        }
        if(count==1) return true;
        else return false;
    }
    
}
console.log(primeCheck)

console.log(primeCheck.isPrime(23))

//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
//[2,3,5,7,11,13,17]
