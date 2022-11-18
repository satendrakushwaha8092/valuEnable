function ArmstrongNumberCheck(n){
    let temp=n
    let sum=0
while(n>0){
    r=n%10
    sum=sum+r*r*r
    n=Math.floor(n/10)
}
    console.log(sum)
    if(sum===temp) return true
    else return false
}

console.log(ArmstrongNumberCheck(153))