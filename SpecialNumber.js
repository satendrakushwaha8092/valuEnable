function specialNumber(n) {
    let temp=n
    let fact=1
    let sum=0
    while(n>0){
        r=n%10
        fact=1
        for(let i=r;i>=1;i--){
            fact=fact*i
        }
        sum=sum +fact
        n=Math.floor(n/10)
    }
    if(sum==temp)return true
    else return false
}
console.log(specialNumber(145))