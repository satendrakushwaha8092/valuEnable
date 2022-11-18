function EmirpNumber(n) {
    const reverseNumber=reverse(n);
    console.log(isPrime(n))
    console.log(isPrime(reverseNumber))
    if(isPrime(n)==true&&isPrime(reverseNumber)==true) return true
    return false
    
}
console.log(EmirpNumber(13))

function reverse(n){
    let arr=[]
    while(n>0){
        r=n%10
        arr.push(r)
        n=Math.floor(n/10)
    }
    return arr.join('')
}

function isPrime(n){
    let count = 0
    for(let i = 1; i < n; i++) {
        if(n%i==0) count++;
    }
    if(count==1) return true
    else return false
}