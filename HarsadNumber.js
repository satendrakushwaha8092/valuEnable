function Harsad(n) {
    const reverseNumber=reverse(n);
    let temp=n
    let sum=0
    while(n>0){
        r=n%10
        sum=sum+r
        n=Math.floor(n/10)
    }
    console.log(sum)
    if(temp==reverse(sum)*sum) return true
    else return false
}

console.log(Harsad(1729))

function reverse(n){
    let arr=[]
    while(n>0){
        r=n%10
        arr.push(r)
        n=Math.floor(n/10)
    }
    return arr.join('')
}